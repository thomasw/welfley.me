// @flow
import { ExtendableError } from 'extendable-error';

export type EmailNotice = {|
  name: string,
  email: string,
  message: string
|};

type APIErrorArgs = {
  message?: string,
  response: Response,
  data: {},
  code: number
};

export class APIError extends ExtendableError {
  constructor({
    message = 'API error',
    response,
    data,
    code
  }: APIErrorArgs = {}) {
    super(message);
    this.response = response;
    this.data = data;
    this.code = code;
  }
}

export default async function parseResponse(response: Response) {
  const { status } = response;

  console.info(`API Response ${status} ${response.url}`);

  // HTTP 204 No content. (Nothing to deserialize).
  if (status === 204) return;

  const data = await response.json().catch(() => ({}));
  const errorData = { data, code: status };

  if (status >= 400)
    throw new APIError({ response, data: errorData, code: status });

  return data;
}

export async function sendEmailNotice(notice: EmailNotice) {
  const body = new URLSearchParams({
    'form-name': 'contact',
    ...notice
  }).toString();

  const response = await fetch('/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body
  });

  return parseResponse(response);
}
