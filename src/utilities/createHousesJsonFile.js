// The purpose of this function is to generate a json object that represents the houses collection using the information
// in one folder with all the images used to represent the dummy data

const fs = require("fs");
const uti = require("./handyFunctions");

const mainDirectoryAddress = "src/assets/Casas";
const writeFileAddress = "src/assets/houses.json";

async function createHousesJsonFile() {
  var imageFolders;

  // read the main folder where are all the houses folder
  try {
    imageFolders = await fs.promises.readdir(mainDirectoryAddress);
  } catch (errorMessage) {
    uti.showConsoleMessageWithColor(
      "error",
      "Unable to read main folder:" + errorMessage
    );
  }

  // #region Create the houses collection
  var houses = [];

  for (let i = 0; i < imageFolders.length; i++) {
    var images;
    try {
      // get the list of images inside this file
      images = await fs.promises.readdir(
        mainDirectoryAddress + "/" + imageFolders[i]
      );
    } catch (errorMessage) {
      uti.showConsoleMessageWithColor(
        "error",
        "unable to read image folder: " + errorMessage
      );
    }

    // include in the image address the name of the file in which
    // they are located
    images = images.map((image) => imageFolders[i] + "/" + image);

    // create some random value for the price field
    var price = Math.trunc(Math.random() * 10000);

    // create the rating value
    var rating = (Math.random() + 4).toFixed(2);

    // create the area value
    var area = Math.trunc(Math.random() * 5000);

    // add the element to the collection
    houses.push({
      region: imageFolders[i],
      images: images,
      price: price,
      rating: rating,
      area: area,
    });
    houses.push({
      region: imageFolders[i],
      images: images,
      price: price,
      rating: rating,
      area: area,
    });
  }

  console.log(houses);
  // #endregion

  // #region Save json file

  var jsonContent = JSON.stringify(houses);

  try {
    await fs.promises.writeFile(writeFileAddress, jsonContent, "utf8");
  } catch (errorMessage) {
    uti.showConsoleMessageWithColor(
      "error",
      "unable to write the file: " + errorMessage
    );
  }

  // #endregion

  // show a message with green background color indicating the success of the operation
  uti.showConsoleMessageWithColor(
    "success",
    "*****OPERATION SUCCESSFULL******"
  );
}

createHousesJsonFile();
