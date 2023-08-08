import style from './Heading.module.css';
const Heading = () => {
  return (
    <div>
      <h3 className={style.heading}>Sample css module</h3>
      <div className="d-grid">
        <div>Sample display grid 1</div>
        <div>Sample display grid 2</div>
      </div>
    </div>
  );
};

export default Heading;
