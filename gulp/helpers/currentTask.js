module.exports = process.argv.length > 2 && !process.argv[2].includes(`--`) ? process.argv[2] : `build`;