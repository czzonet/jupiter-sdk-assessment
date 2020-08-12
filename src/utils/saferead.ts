/**
 * catch undefinded error when chain read
 */
export const saferead = (fn: () => any, errorDefault?: any) => {
  try {
    return fn();
  } catch (error) {
    console.warn(
      "[I] [saferead]",
      error.toString(),
      "at",
      fn ? fn.toString() : ""
    );
    return errorDefault;
  }
};
