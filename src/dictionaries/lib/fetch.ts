// import { getServerJwtSession } from './get-server-jwt-session';

// export const fetchClient = async (url: string, options?: RequestInit) => {
//   const session = await getServerJwtSession();

//   return fetch(url, {
//     ...options,
//     headers: {
//       ...options?.headers,
//       ...(session && { Authorization: `Bearer ${session.jwt}` }),
//     },
//   });
// };
