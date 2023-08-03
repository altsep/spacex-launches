import { useGetLaunchesByQueryQuery } from '../../services/spaceXApi.service';
import { useAppSelector } from '../../store/hooks';
import { Message } from '../shared';
import { Card } from './Card';
import { CardLoadMoreButton } from './CardLoadMoreButton';

function CardList() {
  const queryOpts = useAppSelector((state) => state.queryArgOpts);
  const { data, error } = useGetLaunchesByQueryQuery(queryOpts);
  const launches = data?.docs || [];

  if (error) return <Message content="Error occured" />;

  return (
    <div className="w-full my-6 lg:grid lg:grid-cols-2 lg:gap-6 2xl:grid-cols-3">
      {launches.map((item) => (
        <Card item={item} key={item.id} />
      ))}
      <CardLoadMoreButton />
    </div>
  );
}

export { CardList };
