import { CardList } from './components/cards/CardList';
import { Controls } from './components/controls/Controls';

// TODO: add tests
// TODO: allow to conditionally enable infinite scroll

function App() {
  return (
    <div className="max-w-6xl m-2 sm:m-4 lg:mx-auto lg:px-6 2xl:max-w-[1920px]">
      <Controls />
      <CardList />
    </div>
  );
}

export { App };
