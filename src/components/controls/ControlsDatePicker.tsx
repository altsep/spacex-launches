import dayjs from 'dayjs';
import { ChangeEvent, useState } from 'react';
import { DATEPICKER_DATE_FORMAT } from '../../utils/constants/dateFormats.constant';

type Props = { handleChange: (e: ChangeEvent<HTMLInputElement>) => void; labelText: string; initialValue?: string };

function ControlsDatePicker({ handleChange, labelText, initialValue }: Props) {
  const firstLaunchDate = '28 September 2008';
  const min = dayjs(firstLaunchDate).format(DATEPICKER_DATE_FORMAT);
  const max = dayjs().format(DATEPICKER_DATE_FORMAT);
  const [value, setValue] = useState(() => dayjs(initialValue).format(DATEPICKER_DATE_FORMAT));
  const label = labelText.toLowerCase().replace(' ', '-');
  return (
    <div className="flex flex-col">
      <label htmlFor={label}>{labelText}</label>
      <input
        className="px-2 border border-gray-500 rounded h-10 w-40"
        type="date"
        name={label}
        id={label}
        onChange={(e) => {
          handleChange(e);
          setValue(e.target.value);
        }}
        placeholder="Select date"
        min={min}
        max={max}
        value={value}
      />
    </div>
  );
}

ControlsDatePicker.defaultProps = {
  initialValue: undefined,
};

export { ControlsDatePicker };
