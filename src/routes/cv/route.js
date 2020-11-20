const { hookInterface, hookEntityDefinitions } = require('@elderjs/elderjs');
const fs = require('fs');
const yaml = require('js-yaml');
// const utils = require("utils")
// import { loadFnamesFromDatabase } from "utils.js"

module.exports = {
  // the all function returns an array of all of the 'request' objects of a route. Since this is the homepage, there is only one.
  all: () => [{ slug: 'cv' }],
  // the permalink function takes a 'request' object and returns a relative permalink. In this case "/"
  permalink: ({ request }) => `/${request.slug}/`,
  data: ({ request, data }) => {
    // The data function populates what data should be in available in our Svelte template.
    // Since we will be listing out Elder.js's hooks, we make sure to populate that on the data object so it can be looped through
    // in our Svelte template.

    // data.hookEntityDefinitions = hookEntityDefinitions
    // let fileContents = fs.readFileSync('data/cv.yaml', 'utf8');
    // let sections = yaml.safeLoad(fileContents);
    // let sections = []
    // const dataFileNames = [
    //   "education",
    //   "experiences",
    //   "publications",
    //   "talks",
    //   "teaching"
    // ]

    // const fileData = await Promise.all(dataFileNames.map(async (fkey) => {
    //   const fdata = await fs.readFile(`_data/${fkey}.yaml`, 'utf8')
    //   return yaml.safeLoad(fdata)
    // }))
    // const db = {}
    // dataFileNames.forEach((fkey, i) => {
    //   db[fkey] = fileData[i]
    // })

    // return {
    //   data: {
    //     ...data,
    //     db
    //   }
    // }

    // const sections = [
    //   "Education",
    //   "Research Experience",
    //   "Publications",
    //   "Talks",
    //   "Teaching"
    // ]

    return { ...data };
  },
  layout: "Layout.svelte"
};
