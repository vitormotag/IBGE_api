import { IState } from "./interfaceState";
export interface IDistrict {
  id?: number;
  nome?: string | null;
  municipio?: {
    id?: number;
    nome?: string | null;
    microrregiao?: {
      id?: number;
      nome?: string | null;
      mesorregiao?: { id?: number; nome?: string | null; UF: IState } | null;
    } | null;
    "regiao-imediata"?: {
      id?: number;
      nome?: string | null;
      "regiao-intermediaria"?: {
        id?: number;
        nome?: string | null;
        UF: IState;
      } | null;
    } | null;
  };
}

export const defaultDistrictValue: Readonly<IDistrict[]> = [];
