const Here = ({ email }) => {
  return (
    <span className="font-semibold underline hover:text-green-700">
      <a href={email} target="_blank" rel="noreferrer">
        here
      </a>
    </span>
  );
};

export default Here;
