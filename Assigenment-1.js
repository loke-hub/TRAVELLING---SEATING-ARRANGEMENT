function findFacingSeat(input) {
    const lines = input.trim().split('\n');
    const T = parseInt(lines[0]);
    const testCases = lines.slice(1);
  
    const seatTypes = ['WS', 'MS', 'AS'];
    const oppositeSeatMap = { 1: 12, 2: 11, 3: 10, 4: 9, 5: 8, 6: 7, 7: 6, 8: 5, 9: 4, 10: 3, 11: 2, 12: 1 };
  
    return testCases
      .map((seatNumber) => {
        const seatMod = seatNumber % 12 || 12;
        const oppositeSeat = oppositeSeatMap[seatMod];
        const seatType = seatTypes[(seatMod - 1) % 6 < 2 ? (seatMod - 1) % 3 : 2];
        return `${oppositeSeat} ${seatType}`;
      })
      .join('\n');
  }
  
  const input = `2\n18\n40`;
  
  const output = findFacingSeat(input);
  console.log(output);
  