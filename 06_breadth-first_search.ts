interface Graph<T> {
  [key: string]: T[];
}

const personIsSeller = (name: string): boolean => name.endsWith('mango-seller');

const graph: Graph<string> = {};
graph.you = ['alice', 'bob', 'claire'];
graph.bob = ['anuj', 'peggy'];
graph.alice = ['peggy'];
graph.claire = ['thom', 'jonny-mango-seller'];
graph.anuj = [];
graph.peggy = [];
graph.thom = [];
graph.jonny = [];

const search = (name: string): boolean => {
  let searchQueue = graph[name];
  const searched: string[] = [];

  while (searchQueue.length > 0) {
    const person = searchQueue.shift();

    if (person && !searched.includes(person)) {
      if (personIsSeller(person)) {
        console.log(`${person} is a mango seller!`);

        return true;
      } else {
        searchQueue = searchQueue.concat(graph[person]);

        searched.push(person);
      }
    }
  }

  return false;
};
