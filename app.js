const fs = require('fs');
const marked = require('marked');

//实时检测md文件的变化
fs.watchFile('markdown/a.md',() => {

  //读取md文件内容
  fs.readFile('markdown/a.md','utf-8',(err,data) => {
    if(err){
      throw err;
    }else {

      fs.readFile('./a.template','utf-8',(err,template) => {
        if(err){
          throw err
        }else {

            //使用marked方法，将md文件转化为html文件
            let htmlStr = marked(data.toString());

            //将html模板中的@markdown，替换成htmlStr字符串
            htmlStr = template.replace('@markdown',htmlStr);

            //将格式化对的html字符串，写入到新的文件中
            fs.writeFile('html/a.html',htmlStr,err => {
              if(err){
                throw err;
              }else {
                console.log('success!');
              }
            });
        }
      });





    }
  });

});
