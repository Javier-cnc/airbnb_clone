const { map } = require("rxjs");

// #region Utility Function
function showConsoleMessageWithColor(type, message) {
  const colorCollection = new Map();

  colorCollection.set("success", "\x1b[42m%s\x1b[0m");
  colorCollection.set("error", "\x1b[41m%s\x1b[0m");

  console.log(colorCollection.get(type), message);
}
// #endregion

module.exports = { showConsoleMessageWithColor };
