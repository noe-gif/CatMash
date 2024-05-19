'use client';

import InterfaceLayout from 'src/layouts/interface';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return <InterfaceLayout>{children}</InterfaceLayout>;
}
