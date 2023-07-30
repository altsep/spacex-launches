import { Button } from './components/Button';
import { CardList } from './components/CardList';
import { Controls } from './components/Controls';
import { useAppDispatch } from './store/hooks';
import { toggleSort } from './store/queryArgOpts';

// TODO: add tests
// TODO: remove placeholder assets
// TODO: use rtk instead of prop drilling
// TODO: allow to conditionally enable infinite scroll

function App() {
  const dispatch = useAppDispatch();
  return (
    <div className="max-w-6xl mx-auto m-1 lg:px-6 2xl:max-w-[1920px]">
      <Controls>
        <Button handleClick={() => dispatch(toggleSort())} textContent="Sort by date" />
      </Controls>
      <CardList />
    </div>
  );
}

export { App };
