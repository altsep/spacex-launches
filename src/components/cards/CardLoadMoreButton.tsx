import { useGetLaunchesByQueryQuery } from '../../services/spaceXApi.service';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { incrementPage } from '../../store/slices/queryArg.slice';
import { CardWrapper } from './CardWrapper';

function CardLoadMoreButton() {
  const queryArg = useAppSelector((state) => state.queryArg);
  const { data, isFetching } = useGetLaunchesByQueryQuery(queryArg);
  const dispatch = useAppDispatch();

  if (data?.hasNextPage) {
    return (
      <CardWrapper>
        <button
          onClick={() => dispatch(incrementPage(data))}
          className="h-full w-fullhover:bg-stone-200 text-gray-500 font-mono text-sm hover:bg-stone-200 py-4"
          type="button"
        >
          {isFetching ? 'Loading...' : 'Load more...'}
        </button>
      </CardWrapper>
    );
  }
}

export { CardLoadMoreButton };
