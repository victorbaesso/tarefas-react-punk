import React, { useEffect, useMemo, useState } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toolbar } from 'primereact/toolbar';
import { selectTarefasState } from "../../slices/tarefasSlice";
import { useSelector } from "react-redux";
import { countBy } from "lodash";

type PrioridadesCountType = {
  alta: number,
  media: number,
  baixa: number,
}

const Prioridades = () => {
  const { tarefas } = useSelector(selectTarefasState)
  const [prioridadesCount, setPrioridadesCount] = useState<PrioridadesCountType[]>();
  const totais = useMemo(() => countBy(tarefas, 'prioridade'), [tarefas]);

  useEffect(() => {
    setPrioridadesCount([{
      alta: totais['Alta'] || 0,
      media: totais['Média'] || 0,
      baixa: totais['Baixa'] || 0,
    }])
  }, [totais]);

  return (
    <div id="prioridades" className="grid mx-0 justify-content-center">
    <div className="col-12">
      <Toolbar
        className="py-0 px-2 border-none bg-white"
        left={<p className="font-light text-3xl my-3">Prioridades</p>}
      />
      <DataTable value={prioridadesCount} className="border-1 border-300">
        <Column field="baixa" header="Baixa" className="text-center" />
        <Column field="media" header="Média" className="text-center" />
        <Column field="alta" header="Alta" className="text-center" />
      </DataTable>
    </div>
  </div>
  )
};

export default Prioridades;
