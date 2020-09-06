findOutlier = (integers) => {
    var evens = 0;
    var odds = 0;
  
    for (var i = 0; i < integers.length; i++) {
      if (Math.abs(integers[i]) % 2 == !0) {
        var oddNums = integers[i];
        odds++;
      }
      if (Math.abs(integers[i]) % 2 == 0) {
        var evenNums = integers[i];
        evens++;
      }
    }
    return odds > evens ? evenNums : oddNums;
  };