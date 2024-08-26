export type ChatListItemProps = {
  data: { name: string; lastMessage: string; profileUrl: string };
};

export type MessageProps = {
  message: string;
  isCurrentUser: boolean;
};
