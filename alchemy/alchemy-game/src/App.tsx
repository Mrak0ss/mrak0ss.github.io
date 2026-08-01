import { useState } from "react";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import type { DragEndEvent } from "@dnd-kit/core";
import { elements as baseElements } from "./data/elements";
import { recipes } from "./data/recipes";
import type { ElementId } from "./data/types";
import { saveGame, loadGame } from "./saveSystem";
import type { CustomElement } from "./saveSystem";
import type { RecipeOutput } from "./data/recipes";

const BASE_ELEMENT_IDS: ElementId[] = ["fire", "water", "earth", "air"];
const MIN_RECIPE_INPUTS = 2;

const KNOWN_ELEMENT_IDS = new Set<string>(baseElements.map((e) => e.id));

function isKnownElementId(id: string, custom: CustomElement[]): id is ElementId {
  return (
    KNOWN_ELEMENT_IDS.has(id) || custom.some((c) => c.id === id)
  );
}

function withBaseElements(ids: ElementId[]): ElementId[] {
  const result = [...ids];
  for (const base of BASE_ELEMENT_IDS) {
    if (!result.includes(base)) result.unshift(base);
  }
  return result;
}

function getRecipeOutputs(output: RecipeOutput): ElementId[] {
  return Array.isArray(output) ? output : [output];
}

function getRecipeKey(ids: ElementId[]): string {
  return [...ids].sort().join("+");
}

const tileStyle: React.CSSProperties = {
  width: "90px",
  height: "90px",
  background: "#1f2937",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "22px",
  borderRadius: "12px",
  userSelect: "none",
  gap: "4px",
};

function DraggableElement({
  id,
  emoji,
  name,
  border,
}: {
  id: string;
  emoji: string;
  name: string;
  border: string;
}) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={{
        ...tileStyle,
        border: `3px solid ${border}`,
        cursor: "grab",
        transform: transform
          ? `translate(${transform.x}px, ${transform.y}px)`
          : undefined,
      }}
    >
      <div style={{ fontSize: "28px" }}>{emoji}</div>
      <div style={{ fontSize: "12px", color: "#cbd5e1" }}>{name}</div>
    </div>
  );
}

function Workspace({ children }: { children: React.ReactNode }) {
  const { setNodeRef } = useDroppable({ id: "workspace" });

  return (
    <div
      ref={setNodeRef}
      style={{
        minHeight: "160px",
        background: "#0f172a",
        border: "2px dashed #334155",
        borderRadius: "14px",
        padding: "16px",
        display: "flex",
        gap: "12px",
        flexWrap: "wrap",
      }}
    >
      {children}
    </div>
  );
}

function initCustomElements(): CustomElement[] {
  const save = loadGame();
  return save?.customElements ?? [];
}

function initInventory(custom: CustomElement[]): ElementId[] {
  const save = loadGame();
  if (!save) return BASE_ELEMENT_IDS;
  const valid = save.inventory.filter((id): id is ElementId =>
    isKnownElementId(id, custom)
  );
  return withBaseElements(valid);
}

function initDiscovered(custom: CustomElement[]): ElementId[] {
  const save = loadGame();
  if (!save) return BASE_ELEMENT_IDS;
  const valid = save.discovered.filter((id): id is ElementId =>
    isKnownElementId(id, custom)
  );
  return withBaseElements(valid);
}

export default function App() {
  const [customElements, setCustomElements] = useState<CustomElement[]>(
    initCustomElements
  );

  const [inventory, setInventory] = useState<ElementId[]>(() =>
    initInventory(customElements)
  );

  const [workspace, setWorkspace] = useState<ElementId[]>([]);

  const [discovered, setDiscovered] = useState<ElementId[]>(() =>
    initDiscovered(customElements)
  );

  const [result, setResult] = useState("");
  const [inventorySearch, setInventorySearch] = useState("");

  // 🧪 LAB STATE
  const [showLab, setShowLab] = useState(false);
  const [pendingKey, setPendingKey] = useState<string | null>(null);

  const [labName, setLabName] = useState("");
  const [labEmoji, setLabEmoji] = useState("");

  const allElements = [...baseElements, ...customElements];
  const totalElementCount = new Set(allElements.map((element) => element.id)).size;
  const discoveredElementCount = new Set(discovered).size;
  const inventoryElementCount = new Set(inventory).size;
  const remainingElementCount = Math.max(
    totalElementCount - discoveredElementCount,
    0
  );
  const discoveryPercent =
    totalElementCount === 0
      ? 0
      : Math.round((discoveredElementCount / totalElementCount) * 100);

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over || over.id !== "workspace") return;

    const id = active.id as ElementId;
    if (!inventory.includes(id)) return;

    setWorkspace((prev) => [...prev, id]);
  }

  function combineWorkspace() {
    if (workspace.length < MIN_RECIPE_INPUTS) {
      setResult("Add at least two elements to combine.");
      return;
    }

    const key = getRecipeKey(workspace);
    const output = recipes[key];

    if (output) {
      const outputs = getRecipeOutputs(output);

      setResult("Created: " + outputs.join(", "));

      setDiscovered((prev) => {
        const next = [...prev];
        for (const recipeOutput of outputs) {
          if (!next.includes(recipeOutput)) next.push(recipeOutput);
        }
        return next;
      });

      setInventory((prev) => {
        const nextInventory = [...prev];
        for (const recipeOutput of outputs) {
          if (!nextInventory.includes(recipeOutput)) {
            nextInventory.push(recipeOutput);
          }
        }
        return nextInventory;
      });

      setWorkspace([]);
      return;
    }

    setPendingKey(key);
    setShowLab(true);
    setWorkspace([]);
  }

  function removeFromWorkspace(index: number) {
    setWorkspace((prev) => prev.filter((_, i) => i !== index));
  }

  function getElementMeta(id: string) {
    return allElements.find((e) => e.id === id);
  }

  function getElementState(id: ElementId): "green" | "yellow" | "red" {
    const keys = Object.keys(recipes);

    const relevant = keys.filter((k) => k.split("+").includes(id));

    if (relevant.length === 0) return "red";

    const productive = relevant.filter((k) => {
      const output = recipes[k];
      return getRecipeOutputs(output).some(
        (recipeOutput) => !discovered.includes(recipeOutput)
      );
    });

    if (productive.length === 0) return "red";

    const hasCraftable = productive.some((k) => {
      const [a, b] = k.split("+");
      return inventory.includes(a as ElementId) && inventory.includes(b as ElementId);
    });

    if (hasCraftable) return "green";
    return "yellow";
  }

  function borderColor(state: string) {
    if (state === "green") return "#22c55e";
    if (state === "yellow") return "#eab308";
    return "#ef4444";
  }

  const normalizedInventorySearch = inventorySearch.trim().toLowerCase();
  const filteredInventory = normalizedInventorySearch
    ? inventory.filter((id) => {
        const el = getElementMeta(id);
        const name = el?.name.toLowerCase() ?? "";
        return (
          id.toLowerCase().includes(normalizedInventorySearch) ||
          name.includes(normalizedInventorySearch)
        );
      })
    : inventory;

  function handleSave() {
    saveGame({ inventory, discovered, customElements });
    setResult("Game saved!");
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#111827",
        color: "white",
        fontFamily: "Arial",
        padding: "40px",
      }}
    >
      <h1>Alchemy System</h1>

      <section
        aria-label="Element counter"
        style={{
          marginTop: "18px",
          marginBottom: "18px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "12px",
          alignItems: "stretch",
        }}
      >
        <div
          style={{
            background: "#0f172a",
            border: "1px solid #334155",
            borderRadius: "8px",
            padding: "14px",
          }}
        >
          <div style={{ color: "#94a3b8", fontSize: "12px" }}>
            Discovery Progress
          </div>
          <div
            style={{
              marginTop: "6px",
              fontSize: "28px",
              fontWeight: 700,
              lineHeight: 1,
            }}
          >
            {discoveredElementCount} / {totalElementCount}
          </div>
          <div
            style={{
              height: "8px",
              marginTop: "12px",
              background: "#1f2937",
              borderRadius: "999px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${discoveryPercent}%`,
                height: "100%",
                background: "#10b981",
                borderRadius: "999px",
              }}
            />
          </div>
        </div>

        <div
          style={{
            background: "#172033",
            border: "1px solid #334155",
            borderRadius: "8px",
            padding: "14px",
          }}
        >
          <div style={{ color: "#94a3b8", fontSize: "12px" }}>Inventory</div>
          <div style={{ marginTop: "8px", fontSize: "24px", fontWeight: 700 }}>
            {inventoryElementCount}
          </div>
        </div>

        <div
          style={{
            background: "#172033",
            border: "1px solid #334155",
            borderRadius: "8px",
            padding: "14px",
          }}
        >
          <div style={{ color: "#94a3b8", fontSize: "12px" }}>Remaining</div>
          <div style={{ marginTop: "8px", fontSize: "24px", fontWeight: 700 }}>
            {remainingElementCount}
          </div>
        </div>

        <div
          style={{
            background: "#172033",
            border: "1px solid #334155",
            borderRadius: "8px",
            padding: "14px",
          }}
        >
          <div style={{ color: "#94a3b8", fontSize: "12px" }}>Complete</div>
          <div style={{ marginTop: "8px", fontSize: "24px", fontWeight: 700 }}>
            {discoveryPercent}%
          </div>
        </div>
      </section>

      <div style={{ color: "#10b981" }}>
        {result || "Drag elements into workspace, then combine them"}
      </div>

      <div style={{ display: "flex", gap: "10px", marginTop: "12px" }}>
        <button
          onClick={handleSave}
          style={{
            background: "#1d4ed8",
            color: "white",
            border: "none",
            borderRadius: "8px",
            padding: "8px 16px",
            cursor: "pointer",
          }}
        >
          Save
        </button>
      </div>

      <DndContext onDragEnd={handleDragEnd}>
        {/* INVENTORY */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            marginTop: "18px",
            flexWrap: "wrap",
          }}
        >
          <h3 style={{ margin: 0 }}>Inventory</h3>

          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "#0f172a",
              border: "1px solid #334155",
              borderRadius: "8px",
              padding: "8px 10px",
              minWidth: "260px",
            }}
          >
            <span style={{ color: "#94a3b8", fontSize: "14px" }}>Search</span>
            <input
              type="search"
              value={inventorySearch}
              onChange={(e) => setInventorySearch(e.target.value)}
              placeholder="Find an element"
              aria-label="Search inventory"
              style={{
                flex: 1,
                minWidth: 0,
                background: "transparent",
                border: "none",
                color: "white",
                outline: "none",
                fontSize: "14px",
              }}
            />
          </label>
        </div>

        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {filteredInventory.map((id) => {
            const el = getElementMeta(id);
            if (!el) return null;

            const state = getElementState(id);

            return (
              <DraggableElement
                key={id}
                id={id}
                emoji={el.emoji}
                name={el.name}
                border={borderColor(state)}
              />
            );
          })}

          {filteredInventory.length === 0 && (
            <div
              style={{
                color: "#94a3b8",
                background: "#0f172a",
                border: "1px dashed #334155",
                borderRadius: "8px",
                padding: "18px",
                width: "100%",
              }}
            >
              No inventory elements match "{inventorySearch}".
            </div>
          )}
        </div>

        {/* WORKSPACE */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",
            marginTop: "30px",
            flexWrap: "wrap",
          }}
        >
          <h3 style={{ margin: 0 }}>Workspace</h3>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            <button
              onClick={combineWorkspace}
              disabled={workspace.length < MIN_RECIPE_INPUTS}
              style={{
                background:
                  workspace.length < MIN_RECIPE_INPUTS ? "#334155" : "#0f766e",
                color: "white",
                border: "none",
                borderRadius: "8px",
                padding: "8px 16px",
                cursor:
                  workspace.length < MIN_RECIPE_INPUTS ? "not-allowed" : "pointer",
              }}
            >
              Combine {workspace.length > 0 ? `(${workspace.length})` : ""}
            </button>
            {workspace.length > 0 && (
              <button
                onClick={() => setWorkspace([])}
                style={{
                  background: "#374151",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  padding: "8px 16px",
                  cursor: "pointer",
                }}
              >
                Clear
              </button>
            )}
          </div>
        </div>

        <Workspace>
          {workspace.map((id, i) => {
            const el = getElementMeta(id);
            if (!el) return null;

            return (
              <div
                key={i}
                onClick={() => removeFromWorkspace(i)}
                style={{
                  ...tileStyle,
                  cursor: "pointer",
                }}
              >
                <div style={{ fontSize: "28px" }}>{el.emoji}</div>
                <div style={{ fontSize: "12px" }}>{el.name}</div>
              </div>
            );
          })}
        </Workspace>

        {/* DISCOVERED */}
        <h3 style={{ marginTop: "30px" }}>
          Discovered ({discoveredElementCount})
        </h3>

        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {discovered.map((id) => {
            const el = getElementMeta(id);
            if (!el) return null;

            return (
              <div
                key={id}
                style={{
                  padding: "8px",
                  background: "#1f2937",
                  borderRadius: "8px",
                }}
              >
                {el.emoji} {el.name}
              </div>
            );
          })}
        </div>
      </DndContext>

      {/* 🧪 LAB MODAL (CREATE NEW ELEMENT) */}
      {showLab && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              background: "#1f2937",
              padding: "20px",
              borderRadius: "12px",
              width: "320px",
            }}
          >
            <h2>🧪 Create New Element</h2>

            <div style={{ fontSize: "12px", color: "#60a5fa" }}>
              No reaction for: {pendingKey}
            </div>

            <input
              placeholder="Element name"
              value={labName}
              onChange={(e) => setLabName(e.target.value)}
              style={{ width: "100%", marginTop: "10px" }}
            />

            <input
              placeholder="Emoji"
              value={labEmoji}
              onChange={(e) => setLabEmoji(e.target.value)}
              style={{ width: "100%", marginTop: "10px" }}
            />

            <div
              style={{
                marginTop: "15px",
                display: "flex",
                gap: "10px",
              }}
            >
              <button
                onClick={() => {
                  if (!labName || !labEmoji) return;

                  const newId = labName.toLowerCase().replace(/\s+/g, "_");

                  const newElement: CustomElement = {
                    id: newId,
                    name: labName,
                    emoji: labEmoji,
                  };

                  setCustomElements((prev) => [...prev, newElement]);

                  setInventory((prev) =>
                    prev.includes(newId as ElementId)
                      ? prev
                      : [...prev, newId as ElementId]
                  );

                  setShowLab(false);
                  setPendingKey(null);
                  setLabName("");
                  setLabEmoji("");
                }}
              >
                Create
              </button>

              <button
                onClick={() => {
                  setShowLab(false);
                  setPendingKey(null);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
