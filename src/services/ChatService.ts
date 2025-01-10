import apiClient from '../utils/apiClient';
import { Chat } from '../types/models';

export const fetchChats = async (): Promise<Chat[]> => {
  const response = await apiClient.get('/chats');
  return response.data;
};

// export const createChat = async (chatData: ChatCreateRequest): Promise<Chat> => {
//   const response = await apiClient.post('/chats', chatData);
//   return response.data;
// };
