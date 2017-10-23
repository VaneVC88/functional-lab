function reduce(arr, fn, initial) {
  // TU SOLUCIÓN AQUÍ
  return(function innerReduce (idx, value){
    if (idx > arr.length - 1){
        return value
    }
    
    return innerReduce(idx + 1, fn(value, arr[idx], idx, arr))
  })(0, initial)
}

module.exports = reduce;