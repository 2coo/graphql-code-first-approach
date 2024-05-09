export type UserShape = {
  id: number;
  name: string;
};

export type PostShape = {
  id: number;
  title: string;
  content: string;
  userId: number;
};
