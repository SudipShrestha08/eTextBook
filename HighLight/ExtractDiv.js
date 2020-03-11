const fs = require('fs');
const Path = require('path');

function newFile(p){
    // var res = p.join("<br>");

    const newFileContent = 
`<html>
    <head>
        <meta charset="utf-8" />
        <title>Processed File</title>
    </head>
    <body>
        ${p}
    </body>
</html>`
                          
     fs.open('myNewFile.html','w', function(err, file){
         if(err) {
            throw err;
         }
         else{
            fs.writeFile('myNewFile.html', newFileContent , function(err){
                if(err){
                    throw err;
                }else{
                    console.log(p);
                }
            });
           }
     });
}

function processFile(path) {
    let fileName = "05_TOP_Science_G3TB_C5_Materials_All_Around_91-118-11 copy.html";

    fs.readFile(fileName, {encoding : 'utf-8'}, function(err, data) {
        if (!err) {
            let str = data.toString();
            let p = str.match(/<div[^>]+class="Basic-Text-Frame"[^>]*>[^>]*<\/div>/);
            newFile(p);
        } else {
            console.log(err)
        }
    });
}

// function processFile(path) {
//   // const text = fs.readFileSync(path, 'utf8');
//   // text.split(/\r?\n/).forEach((line) => {
//   //   if (line.match('http:\/\/')) {
//   //     console.log(line.replace(/^\s+/, ''));
//   //     console.log(`${path}\n`);
//   //   }
//   // });
//   console.log
// }

function buildTree(startPath) {
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