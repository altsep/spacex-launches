import { useAppDispatch } from '../../store/hooks';
import { toggleSort } from '../../store/slices/queryArg.slice';
import { ControlsButton } from './ControlsButton';
import { ControlsDatePicker } from './ControlsDatePicker';

function Controls() {
  const dispatch = useAppDispatch();
  return (
    <div className="flex justify-end items-end gap-3">
      <ControlsDatePicker labelText="Start date" name="$gte" />
      <ControlsDatePicker labelText="End date" name="$lte" />
      <ControlsButton textContent="Sort by date" handleClick={() => dispatch(toggleSort())} />
    </div>
  );
}

export { Controls };
