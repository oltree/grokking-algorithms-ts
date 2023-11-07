type Graph = {
  [node: string]: { [neighbor: string]: number };
};

type Costs = {
  [node: string]: number;
};

type Parents = {
  [node: string]: string | null;
};

const graph: Graph = {
  start: { a: 6, b: 2 },
  a: { fin: 1 },
  b: { a: 3, fin: 5 },
  fin: {},
};

const costs: Costs = {
  a: 6,
  b: 2,
  fin: Infinity,
};

const parents: Parents = {
  a: 'start',
  b: 'start',
  fin: null,
};

const processed: string[] = [];

const findLowerCostNode = (costs: Costs): string | null => {
  let lowerCostNode: string | null = null;
  let lowerCost: number = Infinity;

  for (let node in costs) {
    let cost: number = costs[node];

    if (cost < lowerCost && processed.indexOf(node) === -1) {
      lowerCost = cost;
      lowerCostNode = node;
    }
  }

  return lowerCostNode;
};

const dijkstra = () => {
  let node: string | null = findLowerCostNode(costs);

  while (node !== null) {
    let cost: number = costs[node];
    let neighbors: Graph[string] = graph[node];

    for (let n in neighbors) {
      let newCost: number = cost + neighbors[n];

      if (costs[n] > newCost) {
        costs[n] = newCost;
        parents[n] = node;
      }
    }

    processed.push(node);
    node = findLowerCostNode(costs);
  }
};
