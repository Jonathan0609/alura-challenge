"use client";

import {
  Badge,
  Box,
  Center,
  Grid,
  GridCol,
  Group,
  LoadingOverlay,
  Pagination,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";
import PostCard from "@/components/Post/Card";
import { categories } from "@/core/domains/posts/posts.contants";
import { usePostsList } from "@/core/domains/posts/posts.hooks";

export default function HomePostList() {
  const [page, setPage] = useState<number>(1);

  const postList = usePostsList({ page: page, limit: 6 });

  const posts = postList.data?.posts || [];

  return (
    <Box pos="relative">
      <LoadingOverlay
        visible={postList.isLoading}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 4 }}
      />

      <Stack gap="lg">
        <Grid align="center">
          <GridCol span={{ base: 12, md: "content" }} mr="auto">
            <Group gap="lg">
              <Text fw="bold" fz={24} c="#284260">
                Minhas postagens
              </Text>

              <TextInput
                placeholder="Buscar..."
                rightSection={<IconSearch size={18} />}
                size="md"
                styles={{ input: { borderColor: "#1CA7C8" } }}
              />
            </Group>
          </GridCol>

          <GridCol span={{ base: 12, md: "content" }}>
            <Group gap={16}>
              <Text fw="bold" fz="md" c="#284260">
                Categorias:
              </Text>

              {categories.map((category) => (
                <Badge
                  key={category.value}
                  radius="sm"
                  size="lg"
                  tt="capitalize"
                >
                  <Text fw="bold" fz="md">
                    {category.label}
                  </Text>
                </Badge>
              ))}
            </Group>
          </GridCol>
        </Grid>

        <Grid>
          {posts.map((post) => (
            <GridCol key={post.id} span={{ base: 12, md: 4 }}>
              <PostCard post={post} />
            </GridCol>
          ))}
        </Grid>

        <Center>
          <Pagination
            value={page}
            total={postList?.data?.pagination.totalPages || 0}
            onChange={(value) => setPage(value)}
          />
        </Center>
      </Stack>
    </Box>
  );
}
