import "./index.scss";

const AnimatedLetters = ({ letterClass, strArray, idx }: any) => {
  return (
    <span>
      {strArray.map((char: any, i: number) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetters;
