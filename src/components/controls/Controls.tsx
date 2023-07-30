import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

function Controls({ children }: Props) {
  return <div className="flex justify-end gap-3">{children}</div>;
}

Controls.defaultProps = {
  children: null,
};

export { Controls };
