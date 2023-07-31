import dayjs from 'dayjs';
import { Launch } from '../../models/launch.model';
import { CardImg } from './CardImg';
import { CardText } from './CardText';
import { CardWrapper } from './CardWrapper';

type Props = {
  item: Launch;
};

function Card({ item }: Props) {
  const { name, details, date_utc: date, rocket } = item;
  const formattedDate = dayjs(date).format('DD/MM/YYYY');
  return (
    <CardWrapper>
      <div className="flex justify-between flex-col sm:flex-row gap-3 h-full mt-3 mb-9  lg:m-3">
        <CardText name={name} details={details} />
        <CardImg rocket={rocket} />
      </div>
      <time className="font-mono text-xs absolute bottom-3 right-3" dateTime={date}>
        {formattedDate}
      </time>
      <div className="border-b border-gray-300 lg:hidden" />
    </CardWrapper>
  );
}

export { Card };
