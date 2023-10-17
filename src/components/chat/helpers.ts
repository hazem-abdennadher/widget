// @ts-nocheck
import { ChatCompletionRequestMessage } from "openai-edge";
import { IConversationSpeaker } from "@/types/common.types";

export const convesationLogToMessages = (
  conv: ChatCompletionRequestMessage[]
) =>
  conv.map((entry: any) => ({
    role: entry.speaker,
    content: entry.entry,
  }));

export type IMessage = {
  id: string;
  createdAt?: Date;
  content: string;
  role: IConversationSpeaker;
  name?: string;
};

export const convesationLogToInitialMessages = (conv: IMessage[]) =>
  conv.map((entry) => ({
    id: entry.id,
    createdAt: entry.created_at,
    role: entry.speaker,
    content: entry.entry,
  }));

export const truncateText = (
  inputText: string,
  maxLength: number = 20
): string => {
  if (inputText?.length <= maxLength) {
    return inputText;
  }
  return `${inputText?.substr(0, maxLength - 3)}...`;
};
