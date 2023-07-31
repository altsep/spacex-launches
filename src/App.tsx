// TODO: test: ensure cards are rendered in the CardList
// TODO: test: ensure card image correctly handles request in CardImg
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
