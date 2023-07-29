import { useState } from 'react';
import { Launch } from '../models/launch';
import { sortByDate } from '../utils/helpers/sorting';

type Props = {
  data: Launch[];
  setData: (data: Launch[]) => void;
};

function Controls({ data, setData }: Props) {
  const [sortMode, setSortMode] = useState<'asc' | 'desc'>('asc');

  const handleSortByDate = () => {
    const sortedMockData = sortByDate(data, sortMode);
    setData(sortedMockData);
    setSortMode((state) => (state === 'asc' ? 'desc' : 'asc'));
  };

  return (
    <button
      className="ml-auto block bg-gray-200 hover:bg-gray-100 active:bg-gray-200 border border-gray-500 py-1 px-2 rounded"
      type="button"
      onClick={handleSortByDate}
    >
      Sort by date
    </button>
  );
}

export { Controls };
