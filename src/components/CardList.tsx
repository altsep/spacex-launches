import { Launch } from '../models/launch';
import { Card } from './Card';
import { LoadMore } from './LoadMore';

type Props = {
  data: Launch[];
  loading: boolean;
  error: boolean;
  handleLoadMore: () => void;
};

function CardList({ data, loading, error, handleLoadMore }: Props) {
  if (error) return 'Error occured';

  return (
    <div className="w-full my-6 lg:grid lg:grid-cols-2 lg:gap-6 2xl:grid-cols-3">
      {data.map((item) => (
        <Card item={item} key={item.id} />
      ))}
      <LoadMore handleClick={handleLoadMore} loading={loading} />
    </div>
  );
}

export { CardList };
