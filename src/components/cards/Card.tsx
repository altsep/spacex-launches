import dayjs from 'dayjs';
import { Launch } from '../../models/launch';
import { CardImg } from './CardImg';
import { CardText } from './CardText';
import { CardWrapper } from './CardWrapper';

type Props = {
  item: Launch;
};

function Card({ item }: Props) {
  const { name, details, date_utc: date, links } = item;
  // const [img] = links.flickr.original;
  let img;
  const formattedDate = dayjs(date).format('DD/MM/YYYY');
  return (
    <CardWrapper>
      <div className="flex justify-between flex-col sm:flex-row gap-3 h-full mb-9  lg:m-3">
        <CardText name={name} details={details} />
        <CardImg img={img} />
      </div>
      <time className="font-mono text-xs absolute bottom-3 right-3" dateTime={date}>
        {formattedDate}
      </time>
      <div className="border-b border-gray-300 lg:hidden" />
    </CardWrapper>
  );
}

export { Card };
