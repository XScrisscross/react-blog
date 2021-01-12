// export const getQueryString = (name) => {
//   var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
//   var reg_rewrite = new RegExp("(^|/)" + name + "/([^/]*)(/|$)", "i");
//   var r = window.location.search.substr(1).match(reg);
//   var q = window.location.pathname.substr(1).match(reg_rewrite);
//   if (r != null) {
//     return unescape(r[2]);
//   } else if (q != null) {
//     return unescape(q[2]);
//   } else {
//     return null;
//   }
// }

// export const getSearchQueryString = (search, name) => {
//   var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");

//   var r = search.substr(1).match(reg);

//   if (r != null) {
//     return unescape(r[2]);
//   } else {
//     return null;
//   }
// }

// export const getPathParamObject = (pathName) => {
//   const subPathName = pathName.substr(1, pathName.length - 1);
//   const paramArray = subPathName.split("&");
//   let paramObj = {};
//   paramArray.map((param) => {
//     const keyValue = param.split("=");
//     paramObj[keyValue[0]] = keyValue[1];
//   });
//   return paramObj;
// }