import { Stack } from "@mantine/core";
import HomeAuthor from "@/components/Home/Author";
import HomeContact from "@/components/Home/Contact";
import HomePostList from "@/components/Home/PostList";

export default function HomePage() {
  return (
    <Stack gap="lg">
      <HomeAuthor />

      <HomePostList />

      <HomeContact />
    </Stack>
  );
}
