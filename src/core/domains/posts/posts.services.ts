import { api } from "@/core/config/axios/api";
import type {
  PostDetailsResponse,
  PostListByCategoryParams,
  PostListParams,
  PostListResponse,
} from "./posts.types";

export async function getPosts(
  params: PostListParams,
): Promise<PostListResponse> {
  const { data } = await api.get<PostListResponse>("/posts", {
    params,
  });
  return data;
}

export async function getPostsDetails(
  id: string,
): Promise<PostDetailsResponse> {
  const { data } = await api.get<PostDetailsResponse>(`/posts/id/${id}`);
  return data;
}

export async function getPostsByCategory({
  category,
  ...params
}: PostListByCategoryParams): Promise<PostListResponse> {
  const { data } = await api.get<PostListResponse>(
    `/posts/category/${category}`,
    { params },
  );
  return data;
}
