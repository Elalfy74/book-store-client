'use client';

import { useForm, zodResolver } from '@mantine/form';
import { InfoIcon } from 'lucide-react';
import {
  Paper,
  Divider,
  Stack,
  TextInput,
  PasswordInput,
  Button,
  Group,
  Anchor,
  Title,
  Alert,
} from '@mantine/core';

import type { PageDictType } from '@/store/server/create-dict-store';
import { useProtected } from '@/hooks/use-protected';

import { useLoginWithCredentials } from './hooks/use-login-with-credentials';
import { type LoginSchemaType, loginSchema } from './login-form.schema';
import { GoogleLogin } from './google-login';

interface LoginFromProps {
  dict: PageDictType<'login'>;
}

export const LoginFrom = ({ dict }: LoginFromProps) => {
  useProtected(false, '/');
  const { loginWithCredentials, isPending, error } = useLoginWithCredentials();

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validate: zodResolver(loginSchema),
  });

  // const handleAction = (formData: FormData) => {
  //   const submit = form.onSubmit((values) => {});
  //   submit();

  //   if (!form.isValid()) return;
  // };

  const handleSubmit = (values: LoginSchemaType) => {
    loginWithCredentials(values);
  };

  return (
    <Paper radius="md" p="xl" withBorder className="container max-w-lg">
      {error && (
        <Alert variant="light" color="red" title={'Error'} icon={<InfoIcon />} mb="lg" radius="md">
          {error.message}
        </Alert>
      )}

      <Title order={2} fz="lg" fw={500} className="first-letter:uppercase">
        {dict.title}
      </Title>

      <GoogleLogin text={dict.google} />

      <Divider label={dict.divider} labelPosition="center" my="lg" />

      <form noValidate onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          <TextInput
            name="email"
            required
            label={dict.input.email.label}
            placeholder="hello@mantine.dev"
            value={form.values.email}
            onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
            error={form.errors.email && dict.input.email.error}
            radius="md"
            autoComplete="email"
          />

          <PasswordInput
            name="password"
            required
            label={dict.input.password.label}
            placeholder={dict.input.password.placeholder}
            value={form.values.password}
            onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
            error={form.errors.password && dict.input.password.error}
            radius="md"
          />
        </Stack>

        <Group justify="space-between" mt="xl">
          <Anchor component="button" type="button" c="dimmed" size="xs">
            {dict.register}
          </Anchor>
          <Button type="submit" radius="xl" w={150} loading={isPending}>
            {!isPending && dict.login}
          </Button>
        </Group>
      </form>
    </Paper>
  );
};
