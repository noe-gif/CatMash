'use client';

import { useEffect } from 'react';
import { useRouter } from 'src/routes/hooks';

// ----------------------------------------------------------------------

export default function NotFoundView() {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, []);

  return <></>;
}
