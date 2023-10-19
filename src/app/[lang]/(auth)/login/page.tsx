import Link from 'next/link';
import { Title } from '@mantine/core';

import type { PageBaseProps } from '@/types';

import { getDictionary } from '@/lib/dictionary';
import { loginDicStore } from '@/store/server/dictionaries.store';

import { LoginFrom } from './components/login-form';

export default async function LoginPage({ params: { lang } }: PageBaseProps) {
  loginDicStore.data = await getDictionary(lang).login();

  return (
    <main className="my-20">
      <Title mb={25} ta="center">
        <Link href="/">MyBooks</Link>
      </Title>
      <LoginFrom dict={loginDicStore.data} />
    </main>
  );
}
