import { useEffect, useMemo, useState } from 'react';
import { launches } from '../../__mocks__/launches';
import { Launch } from '../models/launch';
import { useGetLaunchesByQueryQuery } from '../services/spaceX';
import { DEFAULT_LAUNCHES_QUERY_ARG } from '../utils/constants/defaultLaunchesQueryArg';
import { sortByDate } from '../utils/helpers/sorting';
import { Button } from './Button';
import { CardList } from './CardList';
import { Code } from './Code';
import { Controls } from './Controls';

function Main() {
  const { data, error, isLoading } = useGetLaunchesByQueryQuery(DEFAULT_LAUNCHES_QUERY_ARG);

  const [shouldUseMockData, setShouldUseMockData] = useState(true);

  const sortedMockData = useMemo(() => sortByDate([...launches], 'desc'), []);

  const [launchesData, setLaunchesData] = useState<Launch[]>([]);

  useEffect(() => {
    if (shouldUseMockData) {
      setLaunchesData(sortedMockData);
    } else if (data?.docs) {
      setLaunchesData(data.docs);
    } else {
      setLaunchesData([]);
    }
  }, [data, shouldUseMockData, sortedMockData]);

  const [sortMode, setSortMode] = useState<'asc' | 'desc'>('asc');

  const handleDataType = () => setShouldUseMockData((prev) => !prev);

  const handleSortByDate = () => {
    const sortedData = sortByDate(launchesData, sortMode);
    setLaunchesData(sortedData);
    setSortMode((state) => (state === 'asc' ? 'desc' : 'asc'));
  };

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
