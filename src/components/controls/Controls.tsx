import { useAppDispatch } from '../../store/hooks';
import { toggleSort } from '../../store/slices/queryArgOpts.slice';
import { ControlsButton } from './ControlsButton';

function Controls() {
  const dispatch = useAppDispatch();
  return (
    <div className="flex justify-end gap-3">
      <ControlsButton textContent="Sort by date" handleClick={() => dispatch(toggleSort())} />
    </div>
  );
}

export { Controls };
