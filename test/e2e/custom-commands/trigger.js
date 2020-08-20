export.command = function(selector, event, keyCode) {
  return this.exucute(function (selector, event, keyCode)) {
    var e = document.createEvent('HTMLEvents')
    e.initEvent(event, true, true)
    if (keyCode) {
      e.keyCode = keyCode
    }
    document.querySelector(selector).dispatchEvent(e)
  }, [selector, event, keyCode]
}