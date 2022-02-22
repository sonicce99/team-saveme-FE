const useLocationNumber = (selected) => {
  const array = [];

  selected.map((local, index) => {
    switch (local) {
      case "서울":
        array.push(101000);
        break;
      case "인천":
        array.push(108000);
        break;
      case "대구":
        array.push(104000);
        break;
      case "대전":
        array.push(105000);
        break;
      case "세종":
        array.push(118000);
        break;
      case "경남":
        array.push(110000);
        break;
      case "경기":
        array.push(102000);
        break;
      case "부산":
        array.push(106000);
        break;
      case "광주":
        array.push(103000);
        break;
      case "울산":
        array.push(107000);
        break;
      case "강원":
        array.push(109000);
        break;
      case "경북":
        array.push(111000);
        break;
      default:
        console.log("error");
    }
  });
  return array;
};
