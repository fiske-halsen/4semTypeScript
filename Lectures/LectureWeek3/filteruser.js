const { filterDir, filterDirP, filterDirMyPromise } = require("./filterdir");

filterDir(__dirname, ".json", (err, files) => {
  if (err) {
    return console.log(err);
  }
  console.log(files);
});

// promise baseret
filterDirP(__dirname, ".js")
  .then((files) => console.log(files))
  .catch((e) => console.log(e));

filterDirMyPromise(__dirname, ".json").then((data) => console.log(data));

async function tester() {
  const files = await filterDirP(__dirname, ".js");
  console.log(files);
}
