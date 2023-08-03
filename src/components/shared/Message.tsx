type Props = { content: string };

function Message({ content }: Props) {
  return <span className="m-auto text-gray-500 font-mono text-sm py-4">{content}</span>;
}

export { Message };
