type Props = { textContent: string; handleClick: () => void };

function Button({ textContent, handleClick }: Props) {
  return (
    <button
      className="bg-gray-200 hover:bg-gray-100 active:bg-gray-200 border border-gray-500 py-1 px-2 rounded"
      type="button"
      onClick={handleClick}
    >
      {textContent}
    </button>
  );
}
export { Button };
