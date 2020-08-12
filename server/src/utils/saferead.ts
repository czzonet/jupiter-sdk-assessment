/** debug */
const NAME = `saferead`;
import Debug from "debug";
const debug = Debug(NAME);

/**
 * catch undefinded error when chain read
 */
export const saferead = (fn: () => any, errorDefault?: any) => {
  try {
    return fn();
  } catch (error) {
    debug("[I] %o at %O", error.toString(), fn ? fn.toString() : "");
    return errorDefault;
  }
};
