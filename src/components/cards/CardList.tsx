import { useGetLaunchesByQueryQuery } from '../../services/spaceX';
import { useAppSelector } from '../../store/hooks';
import { Card } from './Card';
import { LoadMore } from './LoadMore';

function CardList() {
  const queryOpts = useAppSelector((state) => state.queryArgOpts);
  const { data, error } = useGetLaunchesByQueryQuery(queryOpts);
  const launches = data?.docs || [];

  if (error) return 'Error occured';

  return (
    <div className="w-full my-6 lg:grid lg:grid-cols-2 lg:gap-6 2xl:grid-cols-3">
      {launches.map((item) => (
        <Card item={item} key={item.id} />
      ))}
      <LoadMore />
    </div>
  );
}

export { CardList };
