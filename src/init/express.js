'use strict';

/**
* practice Node.js project by Dataguru
* @author Plusseven Wang <jackwangjiaqi@qq.com>
*/

import path from 'path';
import express from 'express';
import serveStatic from 'serve-static';
import bodyParser from 'body-parser';
import multiParty from 'multiparty';

module.exports = function(done) {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));

  const router = express.Router();
  $.router = router;

  app.use(router);
  app.use('/static',serveStatic(path.resolve(__dirname,'../../static')));

  app.listen($.config.get('web.port'),(err)=>{
    done(err);
  });

};
