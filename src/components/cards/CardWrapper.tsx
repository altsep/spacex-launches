import { ReactNode } from 'react';

type Props = { children: ReactNode };

function CardWrapper({ children }: Props) {
  return (
    <div className="rounded border-gray-300 lg:border overflow-hidden relative flex flex-col lg:h-80">{children}</div>
  );
}

export { CardWrapper };
