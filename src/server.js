'use strict';

/**
* practice Node.js project by Dataguru
* @author Plusseven Wang <jackwangjiaqi@qq.com>
*/

import ProjectCore from 'project-core';
import path from 'path';

const $=global.$=new ProjectCore();

//加载配置文件
$.init.add((done) => {
  $.config.load(path.resolve(__dirname,'config.js'));
  const env=process.env.NODE_ENV || null;
  if (env){
      $.config.load(path.resolve(__dirname,'../config',env+'.js'));
  }
  $.env=env;
  done();
});

//初始化
$.init((err)=>{
  if (err){
    console.error(err);
    process.exit(-1);
  } else {
    console.log('inited [env=%s]',$.env);
  }
});
