function getMinMax(str) {
  // ваш код...

  let arrs = str.split(/[ ,]/);
  let result = arrs
    .map(item => Number(item))
    .filter(item => !isNaN(item));

  return {
    min: Math.min.apply(null, result),
    max: Math.max.apply(null, result)
  };
}