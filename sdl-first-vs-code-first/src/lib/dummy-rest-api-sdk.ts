import { PostShape, UserShape } from "../types";
import axios from "axios";

class SDK {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async getUserById(id: number): Promise<UserShape> {
    const response = await axios.get<{
      user: UserShape;
    }>(`${this.baseUrl}/users/${id}`);
    return response.data.user;
  }

  async getUsers() {
    const response = await axios.get<{
      users: UserShape[];
    }>(`${this.baseUrl}/users`);
    return response.data.users;
  }

  async getPostById(id: number) {
    const response = await axios.get<{
      post: PostShape;
    }>(`${this.baseUrl}/posts/${id}`);
    return response.data.post;
  }

  async getPosts() {
    const response = await axios.get<{
      posts: PostShape[];
    }>(`${this.baseUrl}/posts`);
    return response.data.posts;
  }

  async getUserPosts(id: number) {
    const response = await axios.get<{
      posts: PostShape[];
    }>(`${this.baseUrl}/users/${id}/posts`);
    return response.data.posts;
  }

  async getPostsByUserIds(userIds: number[]) {
    const response = await axios.post<{
      posts: PostShape[];
    }>(`${this.baseUrl}/posts/users`, {
      ids: userIds,
    });
    return response.data.posts;
  }
}

export const dummyEndpoint = new SDK("http://localhost:4001");
