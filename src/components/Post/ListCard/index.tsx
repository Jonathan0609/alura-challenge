import { Anchor, Card, Image, Stack, Text } from "@mantine/core";
import Link from "next/link";
import type { PostData } from "@/core/domains/posts/posts.types";

import classes from "./styles.module.css";

interface Props {
  post: PostData;
}

export default function PostListCard({ post }: Props) {
  return (
    <Card p={24} withBorder radius={4} className={classes.card}>
      <Stack justify="space-between" flex={1}>
        <Image src={post.imageUrl} alt={post.title} />

        <Text fw="bold" fz={20} c="#284260">
          {post.title}
        </Text>

        <Text fw={400} fz="md" c="#6E859F" lineClamp={3}>
          {post.content}
        </Text>

        <Anchor
          component={Link}
          underline="never"
          href={`/post/${post.id}`}
          fw="bold"
          c="#1CA7C8"
        >
          Ler mais
        </Anchor>
      </Stack>
    </Card>
  );
}
