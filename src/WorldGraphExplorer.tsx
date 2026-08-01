import { useMemo, useState } from "react";

type Recipe = {
  a: string;
  b: string;
  result: string;
};

type Graph = {
  parents: Map<string, string[]>;
  children: Map<string, string[]>;
};

function buildGraph(recipes: Recipe[]): Graph {
  const parents = new Map<string, string[]>();
  const children = new Map<string, string[]>();

  for (const r of recipes) {
    const parentKey = `${r.a} + ${r.b}`;

    // children map (inputs → output)
    for (const input of [r.a, r.b]) {
      children.set(input, [...(children.get(input) || []), r.result]);
    }

    // parents map (output → inputs)
    parents.set(r.result, [
      ...(parents.get(r.result) || []),
      parentKey,
    ]);
  }

  return { parents, children };
}

export default function WorldGraphExplorer({
  recipes,
}: {
  recipes: Recipe[];
}) {
  const [selected, setSelected] = useState("wave");

  const graph = useMemo(() => buildGraph(recipes), [recipes]);

  const parents = graph.parents.get(selected) || [];
  const children = graph.children.get(selected) || [];

  return (
    <div style={styles.container}>
      {/* LEFT: PARENTS */}
      <div style={styles.panel}>
        <h3>Origins</h3>
        {parents.length === 0 && <div style={styles.muted}>None</div>}

        {parents.map((p, i) => (
          <div key={i} style={styles.item}>
            {p}
          </div>
        ))}
      </div>

      {/* CENTER NODE */}
      <div style={styles.center}>
        <h2 style={styles.node}>{selected}</h2>
      </div>

      {/* RIGHT: CHILDREN */}
      <div style={styles.panel}>
        <h3>Results</h3>
        {children.length === 0 && <div style={styles.muted}>None</div>}

        {children.map((c, i) => (
          <div
            key={i}
            style={styles.clickable}
            onClick={() => setSelected(c)}
          >
            {c}
          </div>
        ))}
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: "flex",
    height: "100vh",
    fontFamily: "sans-serif",
    background: "#0f0f0f",
    color: "#fff",
  },

  panel: {
    width: "30%",
    padding: 20,
    borderRight: "1px solid #333",
  },

  center: {
    width: "40%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  node: {
    padding: 20,
    border: "2px solid #555",
    borderRadius: 12,
  },

  item: {
    padding: 6,
    marginBottom: 4,
    background: "#1c1c1c",
    borderRadius: 6,
  },

  clickable: {
    padding: 6,
    marginBottom: 4,
    background: "#2a2a2a",
    borderRadius: 6,
    cursor: "pointer",
  },

  muted: {
    opacity: 0.5,
  },
};