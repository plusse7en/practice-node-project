'use strict';

/**
* practice Node.js project by Dataguru
* @author Plusseven Wang <jackwangjiaqi@qq.com>
*/

import ProjectCore from 'project-core';
import path from 'path';
import createDebug from 'debug';

const $=global.$=new ProjectCore();

//创建debug函数
$.createDebug = function(name) {
  return createDebug('my:'+name);
};
const debug = $.createDebug('server');

//加载配置文件
$.init.add((done) => {
  $.config.load(path.resolve(__dirname,'config.js'));
  const env=process.env.NODE_ENV || null;
  if (env){
    debug('load env: %s', env);
    $.config.load(path.resolve(__dirname,'../config',env+'.js'));
  }
  $.env=env;
  done();
});

//初始化Mongodb
$.init.load(path.resolve(__dirname,'init','mongodb.js'));
//加载Models
$.init.load(path.resolve(__dirname,'models'));

// 加载methods
$.init.load(path.resolve(__dirname, 'methods'));

//初始化Express
$.init.load(path.resolve(__dirname,'init','express.js'));
//加载路由
$.init.load(path.resolve(__dirname,'routes'));

//初始化
$.init((err)=>{
  if (err){
    console.error(err);
    process.exit(-1);
  } else {
    console.log('inited [env=%s]',$.env);
  }

  require('./test');


/*测试mongodb，数据是否写进数据库
=========docker的mongodb，用robomongo或mongovue这种gui工具刷新不出添加的数据，但是$.model.User.find({}, console.log)能查到数据

  const item = new $.model.User({
    name: `user${$.utils.date('YmdHis')}`,
    password: '123456',
    nickname: 'test user'
  });
  item.save(console.log);

  $.model.User.find({}, console.log);
*/
});
