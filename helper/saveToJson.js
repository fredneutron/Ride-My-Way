import fs from 'fs';

const saveToJson = (jsonName,dbname,callback){
	fs.writeFile('../Database/'+dbname+'.json', JSON.stringify(jsonName),callback);
}

export default saveToJson;