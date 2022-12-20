import { Descriptions } from "antd";
import { Fragment } from "react";
import { useAppSelector } from "../redux/store";

export const DistrictDescripton = () => {
  const allDistricts = useAppSelector((state) => state.IBGE.districts);

  return (
    <Fragment>
      {allDistricts.map((district, index) => (
        <Descriptions
          title={
            index === 0 &&
            `Descrição ${
              allDistricts.length > 1 ? "dos distritos" : "do distrito"
            }`
          }
          bordered
          style={{ margin: "5vh 0" }}
          labelStyle={{ fontWeight: "600" }}
          layout="vertical"
          key={index}
        >
          <>
            <Descriptions.Item label="Nome">{district.nome}</Descriptions.Item>
            <Descriptions.Item label="Município">
              {district.municipio?.nome}
            </Descriptions.Item>
            <Descriptions.Item label="Microregiao">
              {district.municipio?.microrregiao?.nome}
            </Descriptions.Item>
            <Descriptions.Item label="Mesorregiao">
              {district.municipio?.microrregiao?.mesorregiao?.nome}
            </Descriptions.Item>
            <Descriptions.Item label="Unidade Federativa">
              {district.municipio?.microrregiao?.mesorregiao?.UF.nome} -{" "}
              {district.municipio?.microrregiao?.mesorregiao?.UF.sigla}
            </Descriptions.Item>
            <Descriptions.Item label="Região" style={{ marginBottom: "40px" }}>
              {district.municipio?.microrregiao?.mesorregiao?.UF.regiao?.nome}
            </Descriptions.Item>
          </>
        </Descriptions>
      ))}
    </Fragment>
  );
};
