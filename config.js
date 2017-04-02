exports.DATABASE_URL = 'mongodb://emantes:1234@ds141950.mlab.com:41950/time-tracker'
						// process.env.DATABASE_URL ||
      //                  global.DATABASE_URL ||
      //                  (process.env.NODE_ENV === 'production' ?
      //                  		'mongodb://localhost/shopping-list':
      //                       'mongodb://localhost/shopping-list-dev'
      //                  	);
exports.PORT = process.env.PORT || 8080;