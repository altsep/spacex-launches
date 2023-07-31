// TODO: test: ensure more cards are rendered after getting appended on additional request
// TODO: allow to conditionally enable infinite scroll

import { CardList } from './components/cards';
import { Controls } from './components/controls';

function App() {
  return (
    <div className="max-w-6xl m-2 sm:m-4 lg:mx-auto lg:px-6 2xl:max-w-[1920px]">
      <Controls />
      <CardList />
    </div>
  );
}

export { App };
