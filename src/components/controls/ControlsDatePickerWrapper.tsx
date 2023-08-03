import { ChangeEvent } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { setEndDate, setStartDate } from '../../store/slices/queryArg.slice';
import { DEFAULT_LAUNCHES_QUERY_ARG } from '../../utils/constants';
import { ControlsDatePicker } from './ControlsDatePicker';

function ControlsDatePickerWrapper() {
  const dispatch = useAppDispatch();
  const { date_utc: dateUTC } = DEFAULT_LAUNCHES_QUERY_ARG.query;
  return (
    <>
      <ControlsDatePicker
        handleChange={(e: ChangeEvent<HTMLInputElement>) => {
          const date = e.target.valueAsDate;
          const ISODate = date?.toISOString();
          dispatch(setStartDate(ISODate));
        }}
        labelText="Start date"
        initialValue={dateUTC.$gte}
      />
      <ControlsDatePicker
        handleChange={(e: ChangeEvent<HTMLInputElement>) => {
          const date = e.target.valueAsDate;
          const ISODate = date?.toISOString();
          dispatch(setEndDate(ISODate));
        }}
        labelText="End date"
        initialValue={dateUTC.$lte}
      />
    </>
  );
}

export { ControlsDatePickerWrapper };
