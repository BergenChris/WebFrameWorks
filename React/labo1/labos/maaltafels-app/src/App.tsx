

const MultiplicationTable = () => {
  const size = 10;

  return (
    <table border={1} cellPadding={5} style={{ borderCollapse: 'collapse', textAlign: 'center' }}>
      <tbody>
        {Array.from({ length: size }, (_, rowIndex) => (
          <tr key={rowIndex}>
            {Array.from({ length: size }, (_, colIndex) => (
              <td key={colIndex}>
                {(rowIndex + 1) * (colIndex + 1)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MultiplicationTable;
