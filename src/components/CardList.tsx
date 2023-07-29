import { Launch } from '../models/launch';
import { Card } from './Card';

type Props = {
  data: Launch[];
  loading: boolean;
  error: boolean;
};

function CardList({ data, loading, error }: Props) {
  if (loading) return 'Loading...';

  if (error) return 'Error occured';

  return (
    <div className="w-full my-6 lg:grid lg:grid-cols-2 lg:gap-6 2xl:grid-cols-3">
      {data.map((l) => (
        <Card data={l} key={l.id} />
      ))}
    </div>
  );
}

export { CardList };
