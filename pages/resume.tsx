/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Bar from "../components/Bar";
import { languages, tools } from "../data";

function resume() {
  return (
    <div className="p-6 py-2">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Educations</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">CFA SUP DE VINCI</h5>
            <p className="font-semibold">Bachelor 3</p>
            <p className="font-semibold">
              Ecole de spécialisation en dévéloppement web - 2022
            </p>
            <p className="my-3"></p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Expérience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">CFA SUP DE VINCI</h5>
            <p className="font-semibold">
              Ecole d'igéniérie informatique (2021-2022)
            </p>
          </div>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Educations</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">COURS DIDEROT</h5>
            <p className="font-semibold">
              BTS service informatique aux organisations - 2019
            </p>
            <p className="my-3"></p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Expérience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">CFA SUP DE VINCI</h5>
            <p className="font-semibold">
              Ecole d'igéniérie informatique (2022)
            </p>
            <p className="my-3">
              Poursuit actuellement un cursus de spécialisation informatique
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 ">
          <div>
            <h5 className="my-3 text-2xl fonr-bold">outils et logiciels</h5>
            <div className="my-2">
              {languages.map((languages, i) => (
                <Bar data={languages} key={i} />
              ))}
            </div>
          </div>

          <div>
            <h5 className="my-3 text-2xl fonr-bold">outils et logiciels</h5>
            <div className="my-2">
              {tools.map((tool, i) => (
                <Bar data={tool} key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default resume;
