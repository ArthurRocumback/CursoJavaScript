function calculateAverage(arr) {
    if (arr.length === 0) {
      return 0;
    }
    let soma = arr.reduce((a, e) => a + e, 0);
    let media = soma / arr.length;
   
    return media;
  }