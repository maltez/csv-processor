const parser = require('fast-csv');

class CsvParser {
    static parse(stream) {
        return new Promise((resolve, reject) => {
            const arr = [];
            parser
                .fromStream(stream, { headers: true })
                .on('data', (data) => {
                    arr.push(data);
                })
                .on('end', () => {
                    resolve(arr);
                })
                .on('error', (err) => {
                    reject(err);
                });
        });
    }
}

module.exports = CsvParser;
