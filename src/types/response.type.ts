export type ApiErrorResponse = {
  error: string;
  message: string | { [key: string]: string[] };
  path: string;
  statusCode: number;
  timestamp: string;
};
