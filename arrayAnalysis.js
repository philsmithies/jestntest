function ArrayAnalysis(arr){
  const analyze = {};
  analyze.min = Math.min.apply(null, arr);
  analyze.max = Math.max.apply(null, arr);
  analyze.average = (arr.reduce((a, b) => a + b, 0) / arr.length)
  analyze.length = arr.length
  analyze.all = {
      average: analyze.average,
      min: analyze.min,
      max: analyze.max,
      length: analyze.length
  }
  return analyze;
}

module.exports = ArrayAnalysis