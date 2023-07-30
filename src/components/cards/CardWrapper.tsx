import { ReactNode } from 'react';

type Props = { children: ReactNode };

function CardWrapper({ children }: Props) {
  return (
    <div className="rounded border-gray-300 lg:border overflow-hidden m-2 sm:m-4 lg:m-0 relative flex flex-col lg:h-80">
      {children}
    </div>
  );
}

export { CardWrapper };
