const fs = require('fs');

fs.readFile('./a.template','utf-8',(err,data) => {
  if(err){

  }else {

    var str = data.replace('@markdown','这是md文件');

    console.log(data);
    console.log(str);

  }
});
