function solve(directions) {
  const oppositeDirections = {
      'north': 'south',
      'south': 'north',
      'east': 'west',
      'west': 'east'
  };

  let result = [];

  for (let i = 0; i < directions.length; i++) {
      const currentDirection = directions[i].trim();
      const nextDirection = directions[i + 1] ? directions[i + 1].trim() : null;

      if (nextDirection && oppositeDirections[currentDirection] === nextDirection) {
          i++;
      } else {
          result.push(currentDirection);
      }
  }

  return result;
}


const input = ['north ', 'east ', 'west ', 'south ', 'west ', 'west ', 'north ', 'east '];
const output = solve(input);
console.log(output); 
