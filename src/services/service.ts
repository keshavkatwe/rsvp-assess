type IQueryParam = Record<string, string>;
interface IRequestOptions {
  method: 'GET' | 'POST';
  queryParams?: IQueryParam;
  body?: unknown;
}

function request(url: string, { method, body }: IRequestOptions) {
  const urlObj = new URL(url);
  return fetch(urlObj, {
    method,
    body: JSON.stringify(body),
    headers: {
      'content-type': 'application/json',
    },
  }).then((value) => value.json());
}

export function getRequest(url: string) {
  return request(url, {
    method: 'GET',
  });
}

export function postRequest(url: string, body: unknown) {
  return request(url, {
    method: 'POST',
    body,
  });
}
