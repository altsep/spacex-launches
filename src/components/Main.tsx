import { useState } from 'react';
import { launches } from '../../__mocks__/launches';
import { Launch } from '../models/launch';
import { sortByDate } from '../utils/helpers/sorting';
import { CardList } from './CardList';
import { Controls } from './Controls';

function Main() {
  const [mockData, setMockData] = useState<Launch[]>(() => sortByDate([...launches], 'desc'));

  return (
    <div className="max-w-6xl mx-auto m-1 lg:px-6 2xl:max-w-[1920px]">
      <Controls data={mockData} setData={(data: Launch[]) => setMockData(data)} />
      <CardList data={mockData} />
    </div>
  );
}

export { Main };
