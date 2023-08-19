import { useEffect, useRef } from 'react';
import { useGetLaunchesByQueryQuery } from '../../services/spaceXApi.service';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { incrementPage } from '../../store/slices/queryArg.slice';
import { Message } from '../shared';
import { CardWrapper } from './CardWrapper';

function CardLoadMoreButton() {
  const queryArg = useAppSelector((state) => state.queryArg);
  const { data, isFetching } = useGetLaunchesByQueryQuery(queryArg);
  const dispatch = useAppDispatch();

  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const btn = btnRef.current;

    const intersectionCb: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && data) {
          dispatch(incrementPage(data));
        }
      });
    };

    const observer = new IntersectionObserver(intersectionCb);

    if (btn) {
      observer.observe(btn);
    }

    return () => {
      observer.disconnect();
    };
  }, [btnRef, data, dispatch]);

  if (data?.hasNextPage) {
    return (
      <CardWrapper>
        <button
          onClick={() => dispatch(incrementPage(data))}
          className="h-full w-fullhover:bg-stone-200 text-gray-500 font-mono text-sm hover:bg-stone-200 py-4"
          type="button"
          ref={btnRef}
        >
          {isFetching ? <Message content="Loading..." /> : 'Load more...'}
        </button>
      </CardWrapper>
    );
  }
}

export { CardLoadMoreButton };
