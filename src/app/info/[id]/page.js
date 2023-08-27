// import { getStaticProps, getStaticPath } from 'next';


export const getStaticProps = async ({ params }) => {
  const id = params.id
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => res.json())
  const post = res.json()
  return {
    props: {
      post
    },
    revalidate: 10,
  };
};
export const getStaticPath = async ({ params }) => {
  return{
    paths:[
      {params:{id:"1"}},
      {params:{id:"2"}},
      {params:{id:"3"}},
      {params:{id:"4"}},
      {params:{id:"5"}},
      {params:{id:"6"}},
      {params:{id:"7"}},
      {params:{id:"8"}},
      {params:{id:"9"}},
      {params:{id:"10"}},
    ],
    fallback: true,
  }
}


const Post = ({params}) => {
    const id = params.id
    console.log(params.id);
    return (
      <h1>{id}</h1>
    );
  };
  
  export default Post;