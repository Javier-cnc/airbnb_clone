// ===== the way execute this file is with 'npm run gencat' command in the root folder of the project ====

/** The purpose of this file is to automate the process of creating the collection of categories using the files
 * inside the categories folder which represents the icon and the name of the category
 */

const fs = require("fs");
const { map } = require("rxjs");

// definition of address
var readDirectoryAddress = "src/assets/categories";
var writeFileAddress = "src/assets/categories.json";

// #region Utility Function
function showConsoleMessageWithColor(type, message) {
  const colorCollection = new Map();

  colorCollection.set("success", "\x1b[42m%s\x1b[0m");
  colorCollection.set("error", "\x1b[41m%s\x1b[0m");

  console.log(colorCollection.get(type), message);
}
// #endregion

fs.readdir(readDirectoryAddress, (err, files) => {
  if (err) {
    return showConsoleMessageWithColor("error", "This is my error: " + err);
  }

  // #region show directory files
  // listing all files using forEach
  files.forEach((file) => {
    //console.log(file);
  });

  // #endregion

  // #region create the json object

  let categories = [];

  // build the categories collection using the information from the files inside the directory
  files.forEach((file) => {
    // get the name without extension of the file
    var name = file.split(".")[0];

    // add the element to the categories collection
    categories.push({ icon: file, label: name });
  });

  // #endregion

  // #region show the json object
  // print to the console the json object
  //console.log(categories);
  //#endregion

  // #region stringify JSON Object
  var jsonContent = JSON.stringify(categories);
  //console.log(jsonContent);

  // #endregion

  // #region save in file system json Object
  fs.writeFile(writeFileAddress, jsonContent, "utf8", function (err) {
    if (err) {
      showConsoleMessageWithColor(
        "error",
        "An error occured while writing JSON Object to File."
      );
      return console.log(err);
    }
  });
  // #endregion

  // show a message with green background color indicating the success of the operation
  showConsoleMessageWithColor("success", "*****OPERATION SUCCESSFULL******");
});
