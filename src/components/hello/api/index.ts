/** request */
import request from "@/utils/request";
/** define */
import { NAME } from "../define";

/**
 * url requert
 */
const myrequert = (
  routerpaths: string[],
  data: any = {},
  method: "get" | "post" = "post"
) => {
  /** PREFIX */
  const PREFIX = `/api/` + NAME;
  const url = [PREFIX, ...routerpaths].join(`/`);
  return request({
    url,
    method,
    data,
  });
};

export const total = (payload = {}) => myrequert(["total"], payload);
export const add = (payload = {}) => myrequert(["add"], payload);
export const change = (payload = {}) => myrequert(["change"], payload);
export const remove = (payload = {}) => myrequert(["remove"], payload);
export const show = (payload = {}) => myrequert(["show"], payload);
