import Moviecard from "./MovieCard";

const Movielist = ({ Movie }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        paddingTop: "10",
        margin: "10",
        border:"3",
        borderColor:"black",
        borderRadius:"10",
       
      }}
    >
      {Movie.map((el) => (
        <Moviecard Movie={el} key={el.id} />
      ))}
    </div>
  );
};
export default Movielist;
