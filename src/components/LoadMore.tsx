import { CardWrapper } from './CardWrapper';

type Props = { handleClick: () => void; loading: boolean };

function LoadMore({ handleClick, loading }: Props) {
  return (
    <CardWrapper>
      <button
        onClick={handleClick}
        className="h-full w-fullhover:bg-stone-200 text-gray-500 font-mono text-sm hover:bg-stone-200 py-4"
        type="button"
      >
        {loading ? 'Loading...' : 'Load more...'}
      </button>
    </CardWrapper>
  );
}

export { LoadMore };
