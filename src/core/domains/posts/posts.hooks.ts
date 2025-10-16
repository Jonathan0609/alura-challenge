import { useQuery } from "@tanstack/react-query";
import {
  getPosts,
  getPostsByCategory,
  getPostsDetails,
} from "./posts.services";
import type { PostListByCategoryParams, PostListParams } from "./posts.types";

export function usePostsList(params: PostListParams) {
  const result = useQuery({
    queryKey: ["posts/list", { ...params }],
    queryFn: () => getPosts(params),
  });

  return result;
}

export function usePostsDetails(id: string, enabled = true) {
  const result = useQuery({
    queryKey: ["posts/details", id],
    queryFn: () => getPostsDetails(id),
    enabled: !!id && enabled,
  });

  return result;
}

export function usePostsByCategory(
  params: PostListByCategoryParams,
  enabled = true,
) {
  const result = useQuery({
    queryKey: ["posts/details", params],
    queryFn: () => getPostsByCategory(params),
    enabled: !!params?.category && enabled,
  });

  return result;
}
