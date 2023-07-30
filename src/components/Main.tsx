import { useMemo, useState } from 'react';
import { launches } from '../../__mocks__/launches';
import { useGetLaunchesByQueryQuery } from '../services/spaceX';
import { DEFAULT_LAUNCHES_QUERY_ARG } from '../utils/constants/defaultLaunchesQueryArg';
import { Button } from './Button';
import { CardList } from './CardList';
import { Code } from './Code';
import { Controls } from './Controls';
import { Launch } from '../models/launch';

// TODO: add tests
// TODO: implement lazy-loading of cards
// TODO: remove placeholder assets

function Main() {
  const [sortParam, setSortParam] = useState(DEFAULT_LAUNCHES_QUERY_ARG.options.sort);

  const { data, error, isLoading } = useGetLaunchesByQueryQuery(sortParam);

  const [shouldUseMockData, setShouldUseMockData] = useState(true);

  const launchesData = useMemo<Launch[]>(
    () => (data != null && !shouldUseMockData ? data.docs : [...launches]),
    [data, shouldUseMockData]
  );

  const handleDataType = () => setShouldUseMockData((prevState) => !prevState);

  const handleSortByDate = () =>
    setSortParam((prevState) => (prevState[0] === '-' ? prevState.slice(1) : `-${prevState}`));

  return (
    <div className="max-w-6xl mx-auto m-1 lg:px-6 2xl:max-w-[1920px]">
      <Controls>
        <Button handleClick={handleDataType} textContent="Toggle data type" />
        <Button handleClick={handleSortByDate} textContent="Sort by date" />
      </Controls>
      <CardList data={launchesData} loading={isLoading} error={!!error} />
      <Code stringToRender={JSON.stringify(launchesData, null, '\t')} />
    </div>
  );
}

export { Main };
