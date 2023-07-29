type Props = {
  stringToRender: string;
};

function Code({ stringToRender }: Props) {
  return <pre className="whitespace-pre-wrap text-xs">{stringToRender}</pre>;
}

export { Code };
