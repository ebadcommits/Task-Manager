function Card({ children, className = "" }) {
  return (
    <div className={`bg-gray-100 p-3 rounded ${className}`}>
      {children}
    </div>
  );
}

export default Card;