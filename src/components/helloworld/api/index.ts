/** 全局配置的请求 */
import request from "@/utils/request";
/** define */
import { NAME } from "../define";

/**
 * 服务器请求 封装格式
 */
const myrequert = (routerpaths: string[], payload: any) => {
  /** 路由路径前缀 */
  const PREFIX = `/api/` + NAME;
  const url = [PREFIX, ...routerpaths].join(`/`);
  return request({
    url,
    method: "post",
    data: payload,
  });
};

export const total = (payload = {}) => myrequert(["total"], payload);
export const add = (payload = {}) => myrequert(["add"], payload);
export const change = (payload = {}) => myrequert(["change"], payload);
export const remove = (payload = {}) => myrequert(["remove"], payload);
