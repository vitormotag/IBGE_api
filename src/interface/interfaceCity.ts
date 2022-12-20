import { IState } from "./interfaceState";
export interface ICity {
  id?: number;
  nome?: string | null;
  microrregiao?: {
    id?: number;
    nome?: string | null;
    mesorregiao?: { id?: number; nome?: string | null; UF: IState } | null;
  };
  "regiao-imediata"?: {
    id?: number;
    nome?: string | null;
    "regiao-intermediaria"?: {
      id?: number;
      nome?: string | null;
      UF: IState;
    } | null;
  };
}

export const defaultCityValues: Readonly<ICity[]> = [];
