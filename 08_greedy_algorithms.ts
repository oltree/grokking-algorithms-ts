let states: string[] = ['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az'];

interface Stations {
  [key: string]: string[];
}

const stations: Stations = {
  one: ['id', 'nv', 'ut'],
  two: ['mt', 'wa', 'id'],
  three: ['or', 'nv', 'ca'],
  four: ['ca', 'az'],
  five: ['nv', 'ut'],
};

const greedy = (): string[] => {
  const finalStations: string[] = [];

  while (states.length > 0) {
    let bestStation: string | null = null;
    let statesCovered: string[] = [];

    for (const station in stations) {
      const covered = stations[station].filter((state) =>
        states.includes(state)
      );

      if (covered.length > statesCovered.length) {
        bestStation = station;
        statesCovered = covered;
      }
    }

    states = states.filter((state) => !statesCovered.includes(state));

    if (bestStation !== null) {
      finalStations.push(bestStation);
    }
  }

  return finalStations;
};
