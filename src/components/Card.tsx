import dayjs from 'dayjs';
import { Launch } from '../models/launch.model';

type Props = {
  data: Launch;
};

function Card({ data }: Props) {
  const { name, details, date_utc: date, links } = data;
  const { small } = links.patch;
  return (
    <div className="lg:max-w-[500px] lg:border w-full rounded border-gray-300 p-4 flex flex-col gap-3 group">
      <div className="flex justify-between flex-col sm:flex-row gap-3">
        <div>
          <h1 className="font-semibold font-serif text-xl mb-3">{name}</h1>
          <p className="max-h-64 overflow-auto text-sm">{details}</p>
        </div>
        <img className="h-48 sm:h-36 pl-2 pb-2 self-center sm:self-start" src={small} alt="" srcSet="" />
      </div>
      <p className="font-mono text-xs ml-auto mt-auto">{dayjs(date).format('DD/MM/YYYY')}</p>
      <div className="lg:hidden w-full border-b border-gray-300" />
    </div>
  );
}

export { Card };
