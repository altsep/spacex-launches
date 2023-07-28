import * as TimSort from 'timsort';
import { launches } from '../__mocks__/launches';
import { Card } from './components/Card';

const mockData = [...launches];

TimSort.sort(mockData, (a, b) => b.date_unix - a.date_unix);

function App() {
  return (
    <div className="bg-stone-100 w-full h-screen overflow-auto">
      <div className="w-full max-w-6xl mx-auto flex flex-wrap lg:gap-6 lg:my-6 justify-center">
        {mockData.map((l) => (
          <Card data={l} key={l.id} />
        ))}
      </div>
    </div>
  );
}

export { App };
