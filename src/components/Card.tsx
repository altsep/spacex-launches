import dayjs from 'dayjs';
import { Launch } from '../models/launch';

type Props = {
  data: Launch;
};

function Card({ data }: Props) {
  const { name, details, date_utc: date, links } = data;
  const [img] = links.flickr.original;
  const formattedDate = dayjs(date).format('DD/MM/YYYY');
  return (
    <div className="rounded border-gray-300 group lg:border overflow-hidden m-2 sm:m-4 lg:m-0 relative flex flex-col lg:h-80">
      <div className="flex justify-between flex-col sm:flex-row gap-3 h-full mb-9  lg:m-3">
        <div className="flex flex-col">
          <h1 className="font-semibold font-serif text-xl mb-3">{name}</h1>
          <p className="max-h-80 lg:max-h-56 overflow-auto text-sm">{details}</p>
        </div>
        {img != null && (
          <a className="h-40 sm:w-48 sm:h-48 flex-shrink-0" href={img} target="_blank" rel="noopener noreferrer">
            <img
              className="h-full w-full object-cover mx-auto rounded sm:rounded-full"
              src={img}
              alt=""
              loading="lazy"
            />
          </a>
        )}
      </div>
      <time className="font-mono text-xs absolute bottom-3 right-3" dateTime={date}>
        {formattedDate}
      </time>
      <div className="border-b border-gray-300 lg:hidden" />
    </div>
  );
}

export { Card };
