import { useGetLaunchesByQueryQuery } from '../../services/spaceXApi.service';
import { useAppSelector } from '../../store/hooks';
import { Message } from '../shared';
import { Card } from './Card';
import { CardLoadMoreButton } from './CardLoadMoreButton';

function CardList() {
  const queryArg = useAppSelector((state) => state.queryArg);
  const { data, error } = useGetLaunchesByQueryQuery(queryArg);
  const launches = data?.docs || [];

  if (error) {
    return <Message content="Error occured" />;
  }

  return (
    <div className="w-full my-6 lg:grid lg:grid-cols-2 lg:gap-6 2xl:grid-cols-3">
      {launches.map((item) => (
        <Card key={item.id} item={item} />
      ))}
      <CardLoadMoreButton />
    </div>
  );
}

export { CardList };
