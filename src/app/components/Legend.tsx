const Legend = ({ title, percentage, color}) => {
  return (
    <section className="legend">
      <div className="legend__color" style={{backgroundColor: color, height: 10}}></div>
      <div className="legend__content">
        <h3>{title}</h3>
        <p>{percentage}%</p>
      </div>
    </section>
  );
}
export default Legend;