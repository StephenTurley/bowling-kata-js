let score = (line) => {
  let frames = line.split(' ');

  return frames
    .map(scoreFrame)
    .reduce(scoreReducer, 0);
}

let scoreReducer = (score, current) => score + current

let scoreFrame = (frame) => {
  return [...frame]
    .map(valueOf)
    .reduce(scoreReducer, 0);
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
