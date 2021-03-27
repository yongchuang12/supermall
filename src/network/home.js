import { request } from "./request";

export function getHomeMultidada() {
  return request({
    url: "/home/multidata",
  });
}
