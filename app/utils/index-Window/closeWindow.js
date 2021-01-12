/**
 * 关闭当前浏览器窗口
 */
export const closeWindow = () => {
  if (navigator.userAgent.indexOf('MSIE') > 0) {
    if (navigator.userAgent.indexOf('MSIE 6.0') > 0) {
      window.opener = null
      window.close()
    } else {
      window.open('', '_top')
      window.top.close()
    }
    return
  }
  window.opener = null
  window.open('', '_self')
  window.close()
}