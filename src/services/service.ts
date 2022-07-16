type IQueryParam = Record<string, string>;
interface IRequestOptions {
  method: 'GET' | 'POST';
  queryParams?: IQueryParam;
  body?: unknown;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function request(url: string, { method, queryParams, body }: IRequestOptions) {
  const urlObj = new URL(url);
  // if (queryParams) {
  //   (Object.keys(queryParams) as Array<keyof typeof queryParams>).forEach(
  //     (value) => {
  //       urlObj.searchParams.append(value, queryParams[value]);
  //     }
  //   );
  // }

  return fetch(urlObj, {
    method,
    body: JSON.stringify(body),
    headers: {
      'content-type': 'application/json',
    },
  }).then((value) => value.json());
}

// export function getRequest(url: string, queryParams: IQueryParam) {
//   return request(url, {
//     method: 'GET',
//     queryParams,
//   });
// }

export function postRequest(
  url: string,
  body: unknown,
  queryParams?: IQueryParam
) {
  return request(url, {
    method: 'POST',
    queryParams,
    body,
  });
}
