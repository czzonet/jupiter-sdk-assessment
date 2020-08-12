import Cookies from "js-cookie";

/**
 * 令牌的使用
 */
function Token() {
  return {
    TOKENKEY: "admin-token",
    getToken: function() {
      return Cookies.get(this.TOKENKEY);
    },
    setToken: function(token: string) {
      return Cookies.set(this.TOKENKEY, token);
    },
    removeToken: function() {
      return Cookies.remove(this.TOKENKEY);
    },
  };
}

export const CookieToken = Token();
