"use client";

import { useForm } from "@mantine/form";
import {
  Paper,
  Divider,
  Stack,
  TextInput,
  PasswordInput,
  Button,
  Group,
  Anchor,
  Checkbox,
  Title,
} from "@mantine/core";

import type { PageDictType } from "@/store/server/create-dict-store";
import { useProtected } from "@/hooks/use-protected";

import { useLoginWithCredentials } from "./hooks/use-login-with-credentials";
import { GoogleLogin } from "./google-login";

interface LoginFromProps {
  dict: PageDictType<"login">;
}

export const LoginFrom = ({ dict }: LoginFromProps) => {
  const { loginWithCredentials, isPending } = useLoginWithCredentials();
  useProtected(false, "/");

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      remember: false,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) => (val.length < 6 ? "Password should include at least 6 characters" : null),
    },
  });

  const handleSubmit = (values: typeof form.values) => loginWithCredentials(values);

  return (
    <Paper radius="md" p="xl" withBorder className="container max-w-lg">
      <Title order={2} fz="lg" fw={500} className="first-letter:uppercase">
        {dict.title}
      </Title>

      <GoogleLogin text={dict.google} />

      <Divider label={dict.divider} labelPosition="center" my="lg" />

      <form onSubmit={form.onSubmit(handleSubmit)} noValidate>
        <Stack>
          <TextInput
            required
            label={dict.input.email.label}
            placeholder="hello@mantine.dev"
            value={form.values.email}
            onChange={(event) => form.setFieldValue("email", event.currentTarget.value)}
            error={form.errors.email && dict.input.email.error}
            radius="md"
            autoComplete="email"
          />

          <PasswordInput
            required
            label={dict.input.password.label}
            placeholder={dict.input.password.placeholder}
            value={form.values.password}
            onChange={(event) => form.setFieldValue("password", event.currentTarget.value)}
            error={form.errors.password && dict.input.password.error}
            radius="md"
          />

          <Checkbox
            label="Remember Me"
            checked={form.values.remember}
            onChange={(event) => form.setFieldValue("remember", event.currentTarget.checked)}
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
