import { useAppDispatch } from '../../store/hooks';
import { toggleSort } from '../../store/queryArgOpts.slice';
import { Button } from './Button';

function Controls() {
  const dispatch = useAppDispatch();
  return (
    <div className="flex justify-end gap-3">
      <Button textContent="Sort by date" handleClick={() => dispatch(toggleSort())} />
    </div>
  );
}

export { Controls };
