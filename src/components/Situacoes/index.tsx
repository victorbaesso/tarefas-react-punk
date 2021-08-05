import React, { useEffect, useMemo, useState } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toolbar } from 'primereact/toolbar';
import { selectTarefasState } from "../../slices/tarefasSlice";
import { useSelector } from "react-redux";
import { countBy } from "lodash";

type SituacoesCountType = {
  analise: number,
  andamento: number,
  finalizada: number,
}

const Situacoes = () => {
  const { tarefas } = useSelector(selectTarefasState)
  const [situacoesCount, setSituacoesCount] = useState<SituacoesCountType[]>();
  const totais = useMemo(() => countBy(tarefas, 'situacao'), [tarefas]);

  useEffect(() => {
    setSituacoesCount([{
      analise: totais['Análise'] || 0,
      andamento: totais['Andamento'] || 0,
      finalizada: totais['Finalizada'] || 0,
    }])
  }, [totais]);

  return (
    <div id="situacoes" className="grid mx-0 justify-content-center">
    <div className="col-12">
      <Toolbar
        className="py-0 px-2 border-none bg-white"
        left={<p className="font-light text-3xl my-3">Situações</p>}
      />
      <DataTable value={situacoesCount} className="border-1 border-300">
        <Column field="analise" header="Análise" className="text-center" />
        <Column field="andamento" header="Andamento" className="text-center" />
        <Column field="finalizada" header="Finalizada" className="text-center" />
      </DataTable>
    </div>
  </div>
  )
};

export default Situacoes;
