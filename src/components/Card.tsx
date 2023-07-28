import dayjs from 'dayjs';
import { Launch } from '../models/launch.model';

type Props = {
  data: Launch;
};

function Card({ data }: Props) {
  const { name, details, date_utc: date, links } = data;
  const { small } = links.patch;
  return (
    <div className="w-64 rounded border border-gray-300 p-4 flex flex-col gap-3">
      <h1 className="font-semibold font-serif text-xl">{name}</h1>
      <p className="max-h-48 overflow-auto text-sm">{details}</p>
      <img className="mt-auto mx-auto p-4" src={small} alt="" srcSet="" />
      <p className="font-mono text-xs ml-auto">{dayjs(date).format('DD/MM/YYYY')}</p>
    </div>
  );
}

export { Card };
