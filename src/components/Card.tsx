import dayjs from 'dayjs';
import { Launch } from '../models/launch';
import { CardWrapper } from './CardWrapper';

type Props = {
  item: Launch;
};

function Card({ item }: Props) {
  const { name, details, date_utc: date, links } = item;
  // const [img] = links.flickr.original;
  const img = null;
  const formattedDate = dayjs(date).format('DD/MM/YYYY');
  return (
    <CardWrapper>
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
    </CardWrapper>
  );
}

export { Card };
