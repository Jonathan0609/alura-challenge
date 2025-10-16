"use client";

import {
  ActionIcon,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";

export default function LayoutHeaderToogleColorScheme() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const isColorSchemeLight = computedColorScheme === "light";

  return (
    <ActionIcon
      onClick={() => setColorScheme(isColorSchemeLight ? "dark" : "light")}
      variant="default"
      size="md"
    >
      {isColorSchemeLight ? (
        <IconMoon stroke={1.5} />
      ) : (
        <IconSun stroke={1.5} />
      )}
    </ActionIcon>
  );
}
