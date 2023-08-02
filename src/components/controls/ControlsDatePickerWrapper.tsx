import { ChangeEvent } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { ControlsDatePicker } from './ControlsDatePicker';
import { DEFAULT_LAUNCHES_QUERY_ARG } from '../../utils/constants';
import { setEndDate, setStartDate } from '../../store/slices/queryArgOpts.slice';

function ControlsDatePickerWrapper() {
  const dispatch = useAppDispatch();
  const { date_utc: dateUTC } = DEFAULT_LAUNCHES_QUERY_ARG.query;
  return (
    <>
      <ControlsDatePicker
        handleChange={(e: ChangeEvent<HTMLInputElement>) => {
          const ISODate = e.target.valueAsDate?.toISOString();
          if (ISODate != null) {
            dispatch(setStartDate(ISODate));
          }
        }}
        labelText="Start date"
        initialValue={dateUTC.$gte}
      />
      <ControlsDatePicker
        handleChange={(e: ChangeEvent<HTMLInputElement>) => {
          const ISODate = e.target.valueAsDate?.toISOString();
          if (ISODate != null) {
            dispatch(setEndDate(ISODate));
          }
        }}
        labelText="End date"
        initialValue={dateUTC.$lte}
      />
    </>
  );
}

export { ControlsDatePickerWrapper };
