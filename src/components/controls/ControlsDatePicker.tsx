import dayjs from 'dayjs';
import { ChangeEvent, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setDateUTC } from '../../store/slices/queryArg.slice';
import { DATEPICKER_DATE_FORMAT } from '../../utils/constants/dateFormats.constant';
import { DateUTC } from '../../models/launchesQueryArg.model';
import { DEFAULT_LAUNCHES_QUERY_ARG } from '../../utils/constants';

type Props = {
  labelText: string;
  name: keyof DateUTC;
};

function ControlsDatePicker({ labelText, name }: Props) {
  const firstLaunchDate = '28 September 2008';
  const min = dayjs(firstLaunchDate).format(DATEPICKER_DATE_FORMAT);
  const max = dayjs().format(DATEPICKER_DATE_FORMAT);
  const initialValue = useMemo(() => {
    const defaultValue = DEFAULT_LAUNCHES_QUERY_ARG.query.date_utc[name];
    return dayjs(defaultValue).format(DATEPICKER_DATE_FORMAT);
  }, [name]);
  const id = labelText.toLowerCase().replace(' ', '-');

  const dateUTC = useAppSelector((state) => state.queryArg.query.date_utc);
  const [value, setValue] = useState(initialValue);
  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const nextValue = e.target.value || initialValue;
    setValue(nextValue);
    const nextDateUTC = { ...dateUTC, [e.target.name]: new Date(nextValue).toISOString() };
    dispatch(setDateUTC(nextDateUTC));
  };

  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{labelText}</label>
      <input
        className="px-2 border border-gray-500 rounded h-10 w-40"
        type="date"
        name={name}
        id={id}
        onChange={handleChange}
        placeholder="Select date"
        min={min}
        max={max}
        value={value}
      />
    </div>
  );
}

export { ControlsDatePicker };
