export interface IState {
  id?: number;
  nome?: string | null;
  sigla?: string | null;
  regiao?: {
    id?: number;
    nome?: string | null;
    sigla?: string | null;
  };
}

export const defaultStateValues: Readonly<IState[]> = [];
