const CheckMarkIcon = (props) => {
  const { color = "#FF2C91", width = "20", height = "20" } = props;

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none">
      <rect
        width={width}
        height={height}
        rx={Math.min(width, height) / 2}
        fill={color}
      />

      <path
        d={`M${width * 0.2} ${height * 0.5} L${width * 0.35} ${height * 0.7} L${width * 0.8} ${height * 0.3}`}
        stroke="white"
        strokeWidth={Math.min(width, height) * 0.1} // Adjust the strokeWidth as needed
        strokeLinecap="round"
      />
    </svg>
  );
};

export default CheckMarkIcon;
