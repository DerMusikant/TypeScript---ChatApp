export type Chat = {
    _id: string,
    name: string,
    users: Array<string>,
    chatPic: string,
    fileDestination?: string
  }

export interface Post {
  name: string,
  users: Array<string>
}

export type GetPromise = {
   error: string;
   body: Array<Chat>
  }

export type PostPromise = {
  error: string;
  body: Chat
 }