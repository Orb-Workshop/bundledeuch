/*
  Runs after `bun install`

  Copies the scriptedeuch map prefabs into ./maps/prefabs/scriptedeuch
*/
import { cpSync } from "node:fs";
console.log("Bun - Post-Installation Step");
console.log("Copying scriptedeuch library prefabs into './maps/prefabs/scriptedeuch' folder...");
cpSync("../node_modules/scriptedeuch/maps/prefabs/scriptedeuch",
       "./maps/prefabs/scriptedeuch",
       {recursive: true});
