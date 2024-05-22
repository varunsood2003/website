import './Line.css';
  
const Line = () =>{
  return (
    <div className="marquee">
    <ul className="marquee__content">
      <li><p className="texxt"> Crafting Code <span> , Creating Solutions </span></p></li>
      <li><p className="texxt"> Crafting Code <span> , Creating Solutions </span></p></li>
      <li><p className="texxt"> Crafting Code <span> , Creating Solutions </span></p></li>
      <li><p className="texxt"> Crafting Code <span> , Creating Solutions </span></p></li>
      <li><p className="texxt"> Crafting Code <span> , Creating Solutions </span></p></li>
      <li><p className="texxt"> Crafting Code <span> , Creating Solutions </span></p></li>
    </ul>

    <ul aria-hidden="true" className="marquee__content">
      <li><p className="texxt"> Crafting Code <span> , Creating Solutions </span></p></li>
      <li><p className="texxt"> Crafting Code <span> , Creating Solutions </span></p></li>
      <li><p className="texxt"> Crafting Code <span> , Creating Solutions </span></p></li>
      <li><p className="texxt"> Crafting Code <span> , Creating Solutions </span></p></li>
      <li><p className="texxt"> Crafting Code <span> , Creating Solutions </span></p></li>
      <li><p className="texxt"> Crafting Code <span> , Creating Solutions </span></p></li>
    </ul>
  </div>
  );
}
export default Line