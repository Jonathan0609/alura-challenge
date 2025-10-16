import { AppShell, AppShellMain, Stack, Text } from "@mantine/core";
import dayjs from "dayjs";
import type { ReactNode } from "react";
import LayoutHeader from "@/components/Layout/Header";

interface Props {
  children: ReactNode;
}

export default function PublicLayout(props: Props) {
  return (
    <AppShell
      py="20px"
      px={{ base: "16px", sm: "32px", md: "100px", xl: "150px" }}
      style={{ backgroundImage: 'url("/bg-colors.svg")' }}
    >
      <AppShellMain>
        <Stack gap="xl" h="100%">
          <LayoutHeader />

          {props.children}

          <footer>
            <Text fz="md" fw={400} c="#6E859F" ta="center">
              © Copyright {dayjs().year()}. Produzido por Fernanda Mascheti
            </Text>
          </footer>
        </Stack>
      </AppShellMain>
    </AppShell>
  );
}
