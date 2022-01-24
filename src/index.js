module.exports = function check(str, bracketsConfig) {
  let startArr = str.split('')
  let arr = []
  for (let i = 0; i < startArr.length - 1; i++) {
    arr = [startArr[i], startArr[i+1]]
    if (bracketsConfig.some(elem => elem.every((e, index) => e == arr[index]))) {
      console.log(startArr)
      startArr.splice(i, 2)
      i = i - 2
    }
  }
  return startArr.length == 0
}
