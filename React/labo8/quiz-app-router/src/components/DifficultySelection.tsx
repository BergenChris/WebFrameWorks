import { useNavigate } from "react-router-dom"

const DifficultySelection = () => {
  const navigate = useNavigate();

  const difficulties = ["easy", "medium", "hard"];

  return (
    <div>
      <h2>Select difficulty:</h2>
      <ul>
        {difficulties.map((diff) => (
          <li key={diff}>
            <button onClick={() => navigate(`/quiz/${diff}`)}>{diff}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DifficultySelection;
