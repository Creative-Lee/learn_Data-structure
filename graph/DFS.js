//adjacency list

class Node {
  constructor(data) {
    this.data = data;
    this.adjacencyList = [];
    this.visited = false;
  }
}

class Graph {
  nodes = null;
  constructor(size) {
    this.nodes = new Array(size);
    for (let i = 0; i < size; i++) {
      nodes[i] = new Node(i);
    }
  }
  addEdge(idx1, idx2) {
    let node1 = this.nodes[idx1];
    let node2 = this.nodes[idx2];

    if (!node1.adjacencyList.includes(node2)) {
      node1.adjacencyList.push(node2);
    }
    if (!node2.adjacencyList.includes(node1)) {
      node2.adjacencyList.push(node1);
    }
  }

  dfs(idx) {
    let root = this.nodes[idx]; //idx를 받아 nodes 배열에서 루트노드를 정함
    let stack = []; // 스택 생성
    stack.push(root); // 스택에 루트 노트 푸시
    root.visited = true; // 루트 노드 스택에 들어갔으니 방문 체크

    while (!stack.length === 0) {
      // 스택이 비어있을 때 까지
      let popedNode = stack.pop(); // 스택에서 노드 하나 꺼냄

      for (let adjacencyNode of popedNode.adjacencyList) {
        // 꺼낸 노드의 인접 노드들
        if (adjacencyNode.visited === false) {
          // 인접노드에 방문 안했으면
          adjacencyNode.visited = true; // 방문처리
          stack.push(adjacencyNode); // 스택에 해당 인접노드 푸시 --> 스택 최상단에 쌓임
        } // 스택에는 루트의 인접노드들이 쌓이고 인접노드들이 또 쌓이고 반복하다가
      } //  인접노드가 없으면 반복문이 종료되고 종료 되고 종료되고 반복하다가
      this.visit(popedNode);
    } //  결국 stack에 모든 노드들을 방문하면 dfs 함수 최종 종료
  }

  visit(node) {
    console.log(`방문한 노드 데이터: ${node.data}`);
  }
}

const graph = new Graph(10);

console.log(graph.nodes);
