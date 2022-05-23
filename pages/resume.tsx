import React from "react";
import Bar from "../components/Bar";
import { languages, tools } from "../data";

function resume() {
  return (
    <div className="p-6 py-2">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h5 className="my-3 text-2xl font-bold">Educations</h5>
          <div>
            <h5 className="my-2 text-xl  font-bold">CFA SUP DE VINCI</h5>
            <p className="font-semibold">
              Ecole d'igéniérie informatique (2021-2022)
            </p>
            <p className="my-3">
              Poursuit actuellement un cursus d'ingeniérie informatique
            </p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Expérience</h5>
          <div>
            <h5 className="my-2 text-xl  font-bold">CFA SUP DE VINCI</h5>
            <p className="font-semibold">
              Ecole d'igéniérie informatique (2021-2022)
            </p>
            <p className="my-3">
              Poursuit actuellement un cursus d'ingeniérie informatique
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default resume;
