import { useRouter } from "next/router"
import { useEffect } from "react";
import _ from 'lodash-es'

export default function Post({ data }) {

  return <div>
    <div>name:{data.name}</div>
    <div>weight:{data.weight}</div>
    <div>
      <img src={data.sprites.other['official-artwork'].front_default} alt="" />
    </div>
  </div>
}

/* export async function getServerSideProps(context) {
  const { id } = context.query;
  const data = await fetch('https://pokeapi.co/api/v2/pokemon/' + id + '/').then(res => res.json());
  console.log(id);
  return {
    props: {
      data: data
    }
  }
} */

export async function getStaticProps(context) {
  const { id } = context.params;
  console.log(context);
  const data = await fetch('https://pokeapi.co/api/v2/pokemon/' + id + '/').then(res => res.json());
  // console.log(id);
  return {
    props: {
      data: data
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: _.range(1, 20).map(id => ({ params: { id: id + '' } })),
    fallback: 'blocking'
  }
}