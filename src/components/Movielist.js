import Moviecard from "./MovieCard";

const Movielist = ({Movie}) => {
  
  return (
<div >

{Movie.map((el)=> <Moviecard Movie={el} key={el.id}/>) }


</div>



  )
}
export default Movielist;
