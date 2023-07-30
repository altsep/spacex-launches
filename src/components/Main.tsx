import { useMemo, useState } from 'react';
import { launches } from '../../__mocks__/launches';
import { Launch } from '../models/launch';
import { Options } from '../models/launchesQueryArg';
import { useGetLaunchesByQueryQuery } from '../services/spaceX';
import { DEFAULT_LAUNCHES_QUERY_ARG } from '../utils/constants/defaultLaunchesQueryArg';
import { Button } from './Button';
import { CardList } from './CardList';
import { Code } from './Code';
import { Controls } from './Controls';

// TODO: add tests
// TODO: implement lazy-loading of cards
// TODO: remove placeholder assets

function Main() {
  const [queryOpts, setQueryOpts] = useState<Options>({ ...DEFAULT_LAUNCHES_QUERY_ARG.options });

  const { data, error, isLoading } = useGetLaunchesByQueryQuery(queryOpts);

  const [shouldUseMockData, setShouldUseMockData] = useState(false);

  const launchesData = useMemo<Launch[]>(
    () => (data?.docs != null && !shouldUseMockData ? data?.docs : [...launches]),
    [data, shouldUseMockData]
  );

  const handleDataType = () => setShouldUseMockData((prevState) => !prevState);

  const handleSortByDate = () =>
    setQueryOpts((prevState) => ({
      ...prevState,
      sort: prevState.sort[0] === '-' ? prevState.sort.slice(1) : `-${prevState.sort}`,
    }));

  const handleNextPage = () =>
    data?.hasNextPage && setQueryOpts((prevState) => ({ ...prevState, page: data.nextPage }));

  return (
    <div className="max-w-6xl mx-auto m-1 lg:px-6 2xl:max-w-[1920px]">
      <Controls>
        <Button handleClick={handleDataType} textContent="Toggle data type" />
        <Button handleClick={handleSortByDate} textContent="Sort by date" />
        <Button handleClick={handleNextPage} textContent="Load more" />
      </Controls>
      <CardList data={launchesData} loading={isLoading} error={!!error} />
      <Code stringToRender={JSON.stringify(launchesData, null, '\t')} />
    </div>
  );
}

export { Main };
