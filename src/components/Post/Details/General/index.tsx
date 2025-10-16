import { Badge, Grid, GridCol, Group, Image, Stack, Text } from "@mantine/core";
import type { PostData } from "@/core/domains/posts/posts.types";

interface Props {
  post: PostData;
}

export default function PostDetailsGeneral({ post }: Props) {
  return (
    <Stack>
      <Grid>
        <GridCol span={{ base: 12, md: 6 }}>
          <Stack gap={24}>
            <Text fw={700} c="#284260" fz={48} lh={1}>
              {post.title}
            </Text>

            <Stack gap="lg">
              <Text c="#6E859F" lh={1} fz="md" fw="bold">
                Categoria:
              </Text>

              <Badge radius="sm" size="xl">
                {post.category.name}
              </Badge>
            </Stack>

            <Stack gap="lg">
              <Text c="#6E859F" lh={1} fz="md" fw="bold">
                Tags:
              </Text>

              <Group gap={14}>
                {post.tags.map((tag) => (
                  <Badge variant="outline" key={tag.slug} radius="sm" size="xl">
                    {tag.name}
                  </Badge>
                ))}
              </Group>
            </Stack>
          </Stack>
        </GridCol>

        <GridCol span={{ base: 12, md: 6 }}>
          <Image src={post.imageUrl} alt={post.title} h={358} />
        </GridCol>
      </Grid>

      <Text fw={400} fz="md" c="#6E859F">
        {post.content}
      </Text>
    </Stack>
  );
}
