import fs from 'fs';
import path from 'path';

const saveToJson = (jsonName, dbname, callback) => {
  fs.writeFile(path.join(__dirname, '/../Database/index.json'), JSON.stringify(jsonName), callback);
};

export default saveToJson;
