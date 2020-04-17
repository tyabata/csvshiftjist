const fs = require('fs');
const path = require('path');
const iconv = require('iconv-lite');

const filename = process.argv[2];
const outputFileName = process.argv[3] || converted.csv;

if (!filename) {
  console.error('ファイル指定してね');
  return;
}

const file = fs.readFileSync(filename, 'utf8');
const dist = path.join(process.env.PWD || process.cwd(), `./${outputFileName}.csv`);

// Shift-jisで書き出しする
fs.writeFileSync(dist, '');
const fd = fs.openSync(dist, 'w');
const encoded = iconv.encode(file, 'Shift_JIS');
fs.write(fd, encoded, 0, encoded.length, (err, written, buffer) => {
  //  バッファをファイルに書き込む
  if (err) {
    throw err;
  } else {
    console.log('ファイルが正常に書き出しされました');
  }
});
