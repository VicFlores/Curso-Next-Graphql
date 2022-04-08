import { baseUrl } from './config';

export const getImgUrl = (relativeUrl: string): string => {
  const subPath = relativeUrl.substring(8);
  return `${relativeUrl}`;
};
