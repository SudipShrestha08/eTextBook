const fs = require('fs');
const Path = require('path');

function processFile(path) {
    let fileName = "05_TOP_Science_G3TB_C5_Materials_All_Around_91-118-11 copy.html";

    fs.readFile(fileName, {encoding : 'utf-8'}, (err, data) => {
        if (!err) {
            let str = data.toString();
            let scripts = /<script(?=\s|>)(?!(?:[^>=]|=(['"])(?:(?!\1).)*\1)*?\shref=['"])[^>]*>.*?<\/script>/gi;
            let newValue = str.replace(scripts, '');

            fs.writeFile(fileName, newValue, function(err){
                if(err){
                    throw err;
                }
            });
        }
    });
}

function buildTree(startPath){
  fs.readdir(startPath, (err, entries) => {
    entries.forEach((file) => {
      const path = Path.join(startPath, file);
      if (fs.lstatSync(path).isDirectory()) {
        buildTree(path);
      } else if (file.match(/\.html$/)) {
        processFile(path);
      }
    });
  });
}

buildTree('/home/sudip_stha/Desktop/AP/HighLight');