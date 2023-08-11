import { useScroll } from '../../hooks/useScroll';
import { useGetLaunchesByQueryQuery } from '../../services/spaceXApi.service';
import { Message } from '../shared';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { incrementPage } from '../../store/slices/queryArg.slice';
import { Card } from './Card';
import { CardLoadMoreButton } from './CardLoadMoreButton';

function CardList() {
  const queryArg = useAppSelector((state) => state.queryArg);
  const { data, error, isFetching } = useGetLaunchesByQueryQuery(queryArg);
  const launches = data?.docs || [];
  const dispatch = useAppDispatch();
  const handleIncrement = () => dispatch(incrementPage(data));

  useScroll(handleIncrement, isFetching);

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
