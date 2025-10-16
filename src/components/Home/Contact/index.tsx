import { Grid, GridCol, Group, Stack, Text } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

export default function HomeContact() {
  return (
    <Grid>
      <GridCol span={{ base: 12, md: "content" }} mr="auto">
        <Stack gap={12}>
          <Text c="#1CA7C8" fw="bold" fz={16}>
            Vamos conversar?
          </Text>

          <Text c="#284260" fw="bold" fz={60}>
            Entre em contato
          </Text>
        </Stack>
      </GridCol>

      <GridCol span={{ base: 12, md: "content" }}>
        <Stack gap={12}>
          <Group gap={8}>
            <IconMail size={24} />

            <Text c="#6E859F" fw={400} fz={16}>
              fernandamascheti@gmail.com
            </Text>
          </Group>

          <Group gap={8}>
            <IconBrandLinkedin size={24} />

            <Text c="#6E859F" fw={400} fz={16}>
              /Fernanda Mascheti
            </Text>
          </Group>

          <Group gap={8}>
            <IconBrandGithub size={24} />

            <Text c="#6E859F" fw={400} fz={16}>
              /fernandamascheti
            </Text>
          </Group>
        </Stack>
      </GridCol>
    </Grid>
  );
}
