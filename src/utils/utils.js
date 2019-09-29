// 计算索引位置
// 算法复杂度 O(n) 因为滚动必然从顶部开始，所以也算马马虎虎
// 对比 posIndex2 的算法复杂度
export function posIndex(arr, pos) {
  let i = 0
  for (; i < arr.length - 1; i++) {
    // console.log('index:', i)
    if (pos > arr[i]) continue
    else break
  }
  return i
}

// 二分法查找（数据需排好序）
export function binarySearch(arr, target) {
  let low = 0
  let high = arr.length - 1
  let middleIndex = Math.floor((low + high) / 2)

  while (low < high && arr[middleIndex] !== target) {
    if (target <= arr[middleIndex]) {
      high = middleIndex - 1
    } else {
      low = middleIndex + 1
    }
    middleIndex = Math.floor((low + high) / 2)
  }
  if (arr[middleIndex] === target) return middleIndex
  else return -1
}

// 计算索引位置（借鉴二分法查找）算法复杂度 O(log n) = n + n/2 + n/4 + ... + n/2^k
export function posIndex2(arr, target) {
  let low = 1
  let high = arr.length - 1
  let middleIndex = Math.floor((low + high) / 2)
  if (target < arr[0]) return 0
  if (target >= arr[high]) return high

  while (!(target >= arr[middleIndex] && target < arr[middleIndex+1])) {
    if (target < arr[middleIndex]) {
      high = middleIndex - 1
    } else {
      low = middleIndex + 1
    }
    middleIndex = Math.floor((low + high) / 2)
    // console.log('index:', middleIndex)
  }
  return middleIndex
}
