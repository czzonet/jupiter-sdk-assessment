/**
 * 准确判断变量的类型，类似type of，返回类型字符串如"boolean"
 * TODO: 用数组准确列举类型
 */
const getType = (s: any) => {
  /** 得到类似"[object Boolean]" */
  const typeOfS = Object.prototype.toString.apply(s);
  /** 格式化，得到类似boolean的结果字符串 */
  const t = typeOfS.slice(8, -1).toLowerCase();
  return t;
};

/**
 * 深拷贝，针对vue保留其监听，即针对最外层对象和数组的额外处理，其他基础类型不要使用。
 * 注意：对于数组有副作用会直接改动源数据！
 * 针对基本类型和对象，除了数组，都要改变原指针而不仅仅是引用的内容，所以又要返回值。
 * 统一都要返回值。
 * 特别的，如果参数传递相同，那么不会有副作用，除了数组，其他都会返回新的保留监听的完整拷贝。数组返回自身。
 *
 * @param t 目标 需要拷贝至的对象
 * @param s 源 提供需要拷贝的数据
 */
export const deepcopywithwatch = (t: any, s: any): any => {
  try {
    /** type */
    const typeOfT = getType(t);

    typeOfT === "object"
      ? (t = Object.assign({}, t, JSON.parse(JSON.stringify(s))))
      : typeOfT === "array"
      ? (t as any[]).splice(
          0,
          (t as any[]).length,
          ...JSON.parse(JSON.stringify(s))
        )
      : (t = s);

    return t;
  } catch (error) {
    console.log("[E] [deepcopywithwatch]", error);
  }
};
