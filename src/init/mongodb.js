'use strict';

/**
* practice Node.js project by Dataguru
* @author Plusseven Wang <jackwangjiaqi@qq.com>
*/

import mongoose from 'mongoose';

module.exports = function(done) {
  const conn = mongoose.createConnection($.config.get('db.mongodb'));
  $.mongodb = conn;
  $.model = {};


  done();
};
