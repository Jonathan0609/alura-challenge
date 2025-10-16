"use client";

import { Button, Group } from "@mantine/core";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes } from "@/core/config/constants/routes";

export default function LayoutHeaderMenuLink() {
  const pathname = usePathname();

  return (
    <Group gap="xs">
      {routes.map((route) => (
        <Button
          variant="transparent"
          size="compact-md"
          key={route.key}
          component={Link}
          href={route.href}
          color={pathname.includes(route.key) ? "#1CA7C8" : "#284260"}
        >
          {route.label}
        </Button>
      ))}
    </Group>
  );
}
