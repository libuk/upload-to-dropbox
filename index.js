const yargs = require("yargs");
const fs = require("fs");

const argv = yargs
  .option("path", {
    description: "The path of the file you want to upload",
    alias: "p",
    type: "string"
  })
  .help()
  .alias("help", "h")
  .demandOption("path", "Please provide path argument").argv;

function uploadToDropbox() {
  if (argv.path) {
    const filePath = argv.path;

    // check if path leads to a file
    const fileExists =
      fs.existsSync(filePath) && fs.lstatSync(filePath).isFile();

    // if not, exit
    if (!fileExists) {
      console.error("Error: Please provide a valid path to a file");
      process.exit(1);
    }

    console.log("file exists?", fileExists);

    // if yes, upload file to dropbox

    // first check if file with same name exists

    // if it exists, throw error (later ask to use force option)

    // if it doesn't, upload file

    // file upload successful?

    // if no, throw an error

    // if yes, spit back url of file on dropbox

    console.log("You chose to upload something");
  }
}

if (require.main === module) {
  uploadToDropbox();
}
