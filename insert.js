const db = require("./db_config");

db.connect(function (err) {
  // if (err) throw err;

  let sql = `INSERT INTO customers (name, address) 
             VALUES ('Starbucks', 'Bekasi Mall')`;

  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});