import dayjs from 'dayjs';
import { Launch } from '../models/launch';

type Props = {
  data: Launch;
};

function Card({ data }: Props) {
  const { name, details, date_utc: date, links } = data;
  const { small } = links.patch;
  return (
    <div className="rounded border-gray-300 p-4 group lg:border">
      <div className="flex justify-between flex-col sm:flex-row gap-3">
        <div>
          <h1 className="font-semibold font-serif text-xl mb-3">{name}</h1>
          <p className="max-h-80 lg:max-h-32 overflow-auto text-sm">{details}</p>
        </div>
        <div className="flex-shrink-0">
          <img className="w-48 sm:w-36 mb-3 mx-auto" src={small} alt="" />
          <p className="font-mono text-xs text-right">{dayjs(date).format('DD/MM/YYYY')}</p>
        </div>
      </div>
      <div className="w-full border-b border-gray-300 lg:hidden mt-3" />
    </div>
  );
}

export { Card };
