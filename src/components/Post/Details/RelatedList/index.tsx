"use client";

import {
  Center,
  Grid,
  GridCol,
  Pagination,
  Skeleton,
  Stack,
  Text,
} from "@mantine/core";
import { useState } from "react";
import { usePostsByCategory } from "@/core/domains/posts/posts.hooks";
import PostCard from "../../Card";

interface Props {
  categorySlug: string;
}

export default function PostDetailsRelatedList({ categorySlug }: Props) {
  const [page, setPage] = useState<number>(1);

  const postsByCategory = usePostsByCategory(
    { page, limit: 3, category: categorySlug },
    !!categorySlug,
  );

  const posts = postsByCategory.data?.posts || [];

  return (
    <Skeleton visible={postsByCategory.isLoading}>
      <Stack>
        <Text fw="bold" fz={24} c="#284260">
          Postagens relacionadas
        </Text>

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
            total={postsByCategory?.data?.pagination.totalPages || 0}
            onChange={(value) => setPage(value)}
          />
        </Center>
      </Stack>
    </Skeleton>
  );
}
