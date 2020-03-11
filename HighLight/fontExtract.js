const fs = require('fs');
const Path = require('path');

function processFile(path, fontData) {
    let fileName = "index.html";

    fs.readFile(fileName, {encoding : 'utf-8'}, function(err, data) {
        if (!err) {
            let str = data.toString();
            let scripts = /<script(?=\s|>)(?!(?:[^>=]|=(['"])(?:(?!\1).)*\1)*?\shref=['"])[^>]*>.*?<\/script>/gi;
            let newValue = str.replace(scripts, '');
            
            fs.writeFile(fileName, newValue, (err)=>{
                if(!err){
                     let addFontScript = `
      <script>
            ${fontData}
      </script>
                                    `
                    fs.appendFile('index.html', addFontScript, function(err){
                        if(err){
                            throw err;
                         }
                        console.log('Update Successful');
                    });
                }
                else{
                    throw err.message;
                }
            });
        }
    });
}

function buildTree(startPath , fontData) {
  fs.readdir(startPath, (err,entries) => {
    entries.forEach((file) => {
        
      const path = Path.join(startPath, file);
      if (fs.lstatSync(path).isDirectory()) {
        buildTree(path);
      } else if (file.match(/\index.html$/)) {
        processFile(path, fontData);
      }
    });
  });
}

function processJsFile(path) {
    let fileName = "FontData.js";
    fs.readFile(fileName, {encoding : 'utf-8'}, function(err, data) {
        if (!err) {
           let fontData = data;
           buildTree('/home/sudip_stha/Desktop/AP/HighLight', fontData);
       }
      });

}

function buildTreeJs(startPath) {
    fs.readdir(startPath, (err, entries) => {
      entries.forEach((file) => {
        const path = Path.join(startPath, file);
        if (fs.lstatSync(path).isDirectory()) {
          buildTreeJs(path);
        } else if (file.match(/\FontData.js$/)) {
          processJsFile(path);
          // console.log(path)
        }
      });
    });
}

buildTreeJs('/home/sudip_stha/Desktop/AP/HighLight');