
const LoadingDots = ({ color = "#000" }: { color?: string }) => {
  return (
    <span className="flex justify-center mr-0.5">
      <span style={{ backgroundColor: color }} />
      <span style={{ backgroundColor: color }} />
      <span style={{ backgroundColor: color }} />
    </span>
  );
};

export default LoadingDots;