export type InvalidCaseErrorType<MessageId> = {
  errors: { messageId: MessageId }[];
};

export type InvalidCaseWithoutError = { code: string; output: string };
