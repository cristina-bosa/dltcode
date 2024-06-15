const Legend = ({ title, percentage, color}) => {
  return (
    <section className="legend">
      <span className="legend__color" style={{backgroundColor: color, width: 10, height: 'auto'}}></span>
      <div className="legend__content">
        <h3>{title}</h3>
        <p>{percentage}%</p>
      </div>
    </section>
  );
}
export default Legend;