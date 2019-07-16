let score = (line) => {
  let frames = line.split(' ');
  let score = 0;

  frames.forEach((frame)=>{
    score += valueOf(frame[0]);
    score += valueOf(frame[1]);
  });
  return score;
}

let valueOf = (roll) => {
  switch(roll) {
    case '-': {
      return 0;
      break;
    }
    case '/': {
      return 10;
      break;
    }
    default: {
      return parseInt(roll);
      break;
    }
  }
};

export default score;
