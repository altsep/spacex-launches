import { Launch } from '../models/launch';

type Props = Pick<Launch, 'name' | 'details'>;

function CardText({ name, details }: Props) {
  return (
    <div className="flex flex-col">
      <h1 className="font-semibold font-serif text-xl mb-3">{name}</h1>
      <p className="max-h-80 lg:max-h-56 overflow-auto text-sm">{details}</p>
    </div>
  );
}

export { CardText };
