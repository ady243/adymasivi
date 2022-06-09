import { services } from "../data";

import React from "react";
import { GetServerSidePropsContext } from "next";
import ServiceCard from "../components/ServiceCard";

const Home = () => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h5 className="my-3 font-medium">
        Le Lorem Ipsum est simplement du faux texte employé dans la composition
        et la mise en page avant impression. Le Lorem Ipsum est le faux texte
        standard de limprimerie depuis les année 2022
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 "
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide">
          Ce que je vous offres
        </h6>
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((services) => (
            // eslint-disable-next-line react/jsx-key
            <div
              className="col-span-2 bg-gray-200 rounded-lg dark:bg-dark-300 dark:bg-dark-500 md:col-span-1"
              key={services.title}
            >
              <ServiceCard service={services} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const res = await fetch("http://localhost:3000/api/services");
  const data = await res.json();

  return {
    props: {
      services: data.services,
    },
  };
};
// export const getStaticProps = async (_context: GetStaticPropsContext) => {
//   const res = await fetch("http://localhost:3000/api/services");
//   const data = await res.json();

//   return {
//     props: {
//       services: data.services,
//     },
//   };
// };
