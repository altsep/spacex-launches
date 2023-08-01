import { useAppDispatch } from '../../store/hooks';
import { toggleSort } from '../../store/slices/queryArgOpts.slice';
import { ControlsButton } from './ControlsButton';
import { ControlsDatePickerWrapper } from './ControlsDatePickerWrapper';

function Controls() {
  const dispatch = useAppDispatch();
  return (
    <div className="flex justify-end items-end gap-3">
      <ControlsDatePickerWrapper />
      <ControlsButton textContent="Sort by date" handleClick={() => dispatch(toggleSort())} />
    </div>
  );
}

export { Controls };
