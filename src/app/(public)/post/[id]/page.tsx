"use client";

import { Stack } from "@mantine/core";
import { useParams } from "next/navigation";
import PostDetailsGeneral from "@/components/Post/Details/General";
import PostDetailsRelatedList from "@/components/Post/Details/RelatedList";
import { usePostsDetails } from "@/core/domains/posts/posts.hooks";

export default function PostDetailsPage() {
  const params = useParams();
  const id = params.id as string;

  const postDetails = usePostsDetails(id, !!id);

  const post = postDetails.data?.post;

  if (!post) return null;

  return (
    <Stack>
      <PostDetailsGeneral post={post} />

      <PostDetailsRelatedList categorySlug={post.category.slug} />
    </Stack>
  );
}
