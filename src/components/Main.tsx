import { useState } from 'react';
import { Options } from '../models/launchesQueryArg';
import { useGetLaunchesByQueryQuery } from '../services/spaceX';
import { DEFAULT_LAUNCHES_QUERY_ARG } from '../utils/constants/defaultLaunchesQueryArg';
import { Button } from './Button';
import { CardList } from './CardList';
import { Controls } from './Controls';

// TODO: add tests
// TODO: remove placeholder assets
// TODO: try switching from prop drilling to rtk
// TODO: conditionally enable infinite scroll

function Main() {
  const [queryOpts, setQueryOpts] = useState<Options>({ ...DEFAULT_LAUNCHES_QUERY_ARG.options });

  const { data, error, isFetching } = useGetLaunchesByQueryQuery(queryOpts);

  const launches = data?.docs || [];

  const handleSortByDate = () =>
    setQueryOpts((prevState) => ({
      ...prevState,
      sort: prevState.sort[0] === '-' ? prevState.sort.slice(1) : `-${prevState.sort}`,
    }));

  const incrementPage = () => data?.hasNextPage && setQueryOpts((prevState) => ({ ...prevState, page: data.nextPage }));

  return (
    <div className="max-w-6xl mx-auto m-1 lg:px-6 2xl:max-w-[1920px]">
      <Controls>
        <Button handleClick={handleSortByDate} textContent="Sort by date" />
      </Controls>
      <CardList data={launches} loading={isFetching} error={!!error} handleLoadMore={incrementPage} />
    </div>
  );
}

export { Main };
