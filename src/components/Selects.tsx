import { Select } from "antd";
import { Content } from "antd/es/layout/layout";
import {
  getAllCities,
  getAllStates,
  getDistrict,
} from "../redux/reducers/IBGEReducer";
import { useAppDispatch, useAppSelector } from "../redux/store";

export const Selects = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.IBGE.loading);
  const allStates = useAppSelector((state) => state.IBGE.allStates);
  const allCities = useAppSelector((state) => state.IBGE.allCities);

  return (
    <Content
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "4vw 0",
      }}
    >
      <Select
        style={{ width: "200px", maxWidth: '80vw', margin: '0 1vw' }}
        defaultValue="Selecione o estado"
        allowClear
        loading={loading}
        onClick={() => !allStates.length && dispatch(getAllStates())}
        onChange={(UF) => dispatch(getAllCities(UF))}
        options={allStates.map((item) => ({
          value: item.id,
          label: item.nome,
        }))}
      />

      <Select
        style={{ width: "200px", maxWidth: '80vw', margin: '0 1vw' }}
        defaultValue="Selecione a cidade"
        allowClear
        loading={loading}
        onChange={(city) => dispatch(getDistrict(+city))}
        options={allCities.map((item) => ({
          value: item.id,
          label: item.nome,
        }))}
      />
    </Content>
  );
};
