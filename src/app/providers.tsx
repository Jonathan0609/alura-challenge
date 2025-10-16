"use client";

import { DatesProvider } from "@mantine/dates";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import dayjs from "dayjs";
import type { PropsWithChildren } from "react";

const FIVE_MINUTES = 1000 * 60 * 5;

export default function RootProviders(props: PropsWithChildren) {
  return (
    <QueryClientProvider
      client={
        new QueryClient({
          defaultOptions: {
            queries: {
              retry: 1,
              refetchOnWindowFocus: false,
              staleTime: FIVE_MINUTES,
            },
          },
        })
      }
    >
      <DatesProvider
        settings={{
          locale: dayjs.locale(),
        }}
      >
        {props.children}
      </DatesProvider>
    </QueryClientProvider>
  );
}
