import { Space, Spin } from "antd";
import "./App.css";
import { DistrictDescripton } from "./components/DistrictDescripton";
import { Selects } from "./components/Selects";
import { useAppSelector } from "./redux/store";

function App() {
  const loading = useAppSelector((state) => state.IBGE.loading);

  return (
    <div className="App">
      <h2>API Localidades - IBGE</h2>
      <h4>Descrição dos distritos por estado e município</h4>
      <Selects />
      {loading ? (
        <Space
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10%",
          }}
        >
          <Spin tip="Carregando..." />
        </Space>
      ) : (
        <DistrictDescripton />
      )}
    </div>
  );
}

export default App;
