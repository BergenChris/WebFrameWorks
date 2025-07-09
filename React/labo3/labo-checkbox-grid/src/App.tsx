import { useState } from "react";

interface CheckBoxProps {
  size: number;
}

const Checkbox = ({ size }: CheckBoxProps) => {
  const [checked, setChecked] = useState<boolean[][]>(
    Array.from({ length: size }, () => Array(size).fill(false))
  );

  const handleChange = (row: number, col: number, newChecked: boolean) => {
    const newValues = checked.map((r) => [...r]); // deep copy
    newValues[row][col] = newChecked;
    setChecked(newValues);

    alert(
      `Checkbox rij ${row + 1}, kolom ${col + 1} is ${
        newChecked ? "aangevinkt (true)" : "uitgevinkt (false)"
      }`
    );
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${size}, 1fr)`,
        gap: "10px",
        width: "500px",
        aspectRatio: "1",
        margin: "0 auto",
      }}
    >
      {checked.map((row, i) =>
        row.map((value, j) => (
          <div
            key={`${i}-${j}`}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              aspectRatio: "1",
            }}
          >
            <input
              type="checkbox"
              checked={checked[i][j]}
              onChange={(e) => handleChange(i, j, e.target.checked)}
              style={{
                transform: "scale(1.2)",
                cursor: "pointer",
              }}
            />
          </div>
        ))
      )}
      {Array.from({ length: size }, (_, i) =>
        Array.from({ length: size }, (_, j) => (
          <div
            key={`${i}-${j}`}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              aspectRatio: "1",
              backgroundColor: "#d4f8d4", // lichtgroen
              boxShadow: "0 0 5px #a3d6a3",
              borderRadius: "6px",
            }}
          >
            <input
              type="checkbox"
              checked={checked[i][j]}
              onChange={(e) => handleChange(i, j, e.target.checked)}
              style={{
                transform: "scale(1.2)",
                cursor: "pointer",
              }}
            />
          </div>
        ))
      )}
    </div>
  );
};
function App() {
  return (
    <>
      <Checkbox size={10} />
    </>
  )
}

export default App;

