import { services } from "../data";

import React from "react";
import { GetServerSidePropsContext, GetStaticPropsContext } from "next";

const Home = (_services) => {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default Home;

// export const getServerSideProps = async (
//   context: GetServerSidePropsContext
// ) => {
//   const res = await fetch("http://localhost:3000/api/services");
//   const data = await res.json();

//   return {
//     props: {
//       services: data.services,
//     },
//   };
// };
export const getStaticProps = async (_context: GetStaticPropsContext) => {
  const res = await fetch("http://localhost:3000/api/services");
  const data = await res.json();

  return {
    props: {
      services: data.services,
    },
  };
};
