export interface PostData {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  likes: number;
  category: {
    slug: string;
    name: string;
    description: string;
  };
  tags: {
    slug: string;
    name: string;
  }[];
  imageUrl: string;
}

export interface PostListParams {
  page?: number;
  limit?: number;
}

export interface PostListResponse {
  pagination: {
    currentPage: number;
    totalPages: number;
    totalPosts: number;
    postsPerPage: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
  posts: PostData[];
}

export interface PostDetailsResponse {
  post: PostData;
  meta: {
    generatedAt: string;
    seed: string;
  };
}

export interface PostListByCategoryParams {
  category?: string;
  page?: number;
  limit?: number;
}
