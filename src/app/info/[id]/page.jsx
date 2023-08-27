
const post = ({params}) => {
    const id = params.id
    console.log(params.id);
    return (
      <h1>{id}</h1>
    );
  };
  
  export default post;