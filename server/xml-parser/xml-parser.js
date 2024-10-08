#!/usr/bin/env node

import fs from "fs";
import { xml2json } from "xml-js";

const mapAndCalculateJson = (jsonNode) => {
  let newJson = {
    name: jsonNode._attributes.words,
    size: 0,
    children: jsonNode.synset
      ? jsonNode.synset.map((item) => mapAndCalculateJson(item))
      : [],
  };
  const newSize = newJson.children.reduce(
    (acc, item) => acc + item.size + 1,
    0
  );
  newJson.size = newSize;
  return newJson;
};

const xml = fs.readFileSync("./xml-parser/structure_released.xml", "utf8");
const json = JSON.parse(xml2json(xml, { compact: true, alwaysArray: true }));
const linearData = [];

if (json.ImageNetStructure[0].synset[0]) {
  const newJson = mapAndCalculateJson(json.ImageNetStructure[0].synset[0]);

  const convertJsonToLinear = (jsonNode, prefix) => {
    const itemName = prefix ? `${prefix} > ${jsonNode.name}` : jsonNode.name;
    linearData.push({ name: itemName, size: jsonNode.size });
    jsonNode.children.forEach((child) => convertJsonToLinear(child, itemName));
  };
  convertJsonToLinear(newJson);
  fs.writeFileSync("./database/database.json", JSON.stringify(linearData));
  // fs.writeFileSync('./database/database.json', JSON.stringify(newJson));
  console.log("XML has been parsed into linear form");
}
