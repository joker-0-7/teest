import { GetServerSideProps } from 'next';
import Router from 'next/router';
import Layout from '../../components/Layout';
import { useSession } from 'next-auth/react';
import prisma from '../../lib/prisma';

export const getStaticProps = async ({ params }) => {
  const id = params.id
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => res.json())
  const post = res.json()
  return {
    props: post,
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
    fallback: false,
  }
}


const Post = (props) => {
  return (
    <h1>{}</h1>
  );
};

export default Post;