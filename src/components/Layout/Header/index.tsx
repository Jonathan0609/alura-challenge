import { Grid, GridCol, Group, Text } from "@mantine/core";
import { IconBracketsAngle } from "@tabler/icons-react";
import LayoutHeaderMenuLink from "./MenuLink";
import LayoutHeaderToogleColorScheme from "./ToogleColorScheme";

export default function LayoutHeader() {
  return (
    <Grid>
      <GridCol span={{ base: 12, md: "content" }} mr="auto">
        <Group gap={20}>
          <IconBracketsAngle size={36} color="#1CA7C8" />

          <Text fw={700} c="#284260" fz="24px">
            FERNANDA MASCHETI
          </Text>
        </Group>
      </GridCol>

      <GridCol span={{ base: 12, md: "content" }}>
        <Group gap="sm">
          <LayoutHeaderMenuLink />

          <LayoutHeaderToogleColorScheme />
        </Group>
      </GridCol>
    </Grid>
  );
}
