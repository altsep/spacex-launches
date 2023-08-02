import { useScroll } from '../../hooks/useScroll';
import { useGetLaunchesByQueryQuery } from '../../services/spaceXApi.service';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { incrementPage } from '../../store/slices/queryArgOpts.slice';
import { Card } from './Card';
import { CardLoadMoreButton } from './CardLoadMoreButton';

function CardList() {
  const queryOpts = useAppSelector((state) => state.queryArgOpts);
  const { data, error, isFetching } = useGetLaunchesByQueryQuery(queryOpts);
  const launches = data?.docs || [];
  const dispatch = useAppDispatch();
  const handleIncrement = () => dispatch(incrementPage(data));

  useScroll(handleIncrement, isFetching);

  if (error) return 'Error occured';

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
