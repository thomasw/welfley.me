// @flow
function wait() {
  return new Promise(r => setTimeout(r, 1000));
}

export type EmailNotice = {|
  name: string,
  email: string,
  message: string
|};

export async function sendEmailNotice(notice: EmailNotice) {
  await wait();
  throw Error('Not Implemented.');
}
