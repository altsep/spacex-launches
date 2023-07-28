import { launches } from '../__mocks__/launches';
import { Card } from './components/Card';

function App() {
  return (
    <div className="bg-stone-100 w-full h-screen overflow-auto">
      <div className="w-full max-w-6xl mx-auto flex flex-wrap gap-6 border-gray-100 my-6 justify-center">
        {launches.map((l) => (
          <Card data={l} key={l.id} />
        ))}
      </div>
    </div>
  );
}

export { App };
