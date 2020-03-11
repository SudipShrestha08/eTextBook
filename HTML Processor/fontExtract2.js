const fs = require('fs');
const Path = require('path');

function processFile(path, fontData) {
    let fileName = "index.html";

    fs.readFile(fileName, {encoding : 'utf-8'}, function(err, data) {
        if (!err) {
            let str = data.toString();
            let scripts = /<script(?=\s|>)(?!(?:[^>=]|=(['"])(?:(?!\1).)*\1)*?\shref=['"])[^>]*>.*?<\/script>/gi;
            let newValue = str.replace(scripts, '');
            
            fs.writeFile(fileName, newValue, (err) => {
                if(!err){
                    let addFontScript = `
    <script>
        ${fontData}
    </script>
                                         `
                    let n = newValue.search(/<\/head>/)
                    let new_text = addFontScript;
                    let position = n;

                    fs.readFile(fileName, function(err, data){
                        if(err){
                            throw 'error opening file:' + err;
                        }
                           let file_content = data.toString();
                            file_content = file_content.substring(position);
                            
                         let file = fs.openSync(fileName, 'r+');   
                         let bufferedText = new Buffer.from(new_text+file_content);

                            fs.writeSync(file, bufferedText, 0, bufferedText.length, position, function(err){
                                if(err){
                                    console.log(err.message)
                                }else{
                                console.log('Update Successful');
                                }
                            });
                            // fs.close(file);
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
      } 
      else if (file.match(/\index.html$/)) {
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
        }
      });
    });
}

buildTreeJs('/home/sudip_stha/Desktop/AP/HighLight');