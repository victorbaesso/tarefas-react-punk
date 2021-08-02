import { Categoria } from "./categoria";
import { Prioridade } from "./prioridade";
import { Situacao } from "./situacao";


export interface Tarefa {
  id: number,
  descricao: string,
  categoria: Categoria,
  prioridade: Prioridade,
  situacao: Situacao,
}
