type Props = { textContent: string; handleClick: () => void };

function ControlsButton({ textContent, handleClick }: Props) {
  return (
    <button
      className="bg-gray-200 hover:bg-gray-100 active:bg-gray-200 border border-gray-500 h-10 px-4 rounded font-semibold"
      type="button"
      onClick={handleClick}
    >
      {textContent}
    </button>
  );
}
export { ControlsButton };
