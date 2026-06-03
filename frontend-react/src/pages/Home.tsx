import { Button, Typography } from "antd";
import { Link } from "react-router-dom";

const { Title } = Typography;

export default function Home() {
  return (
    <>
      <Title>
        Sistema de Gestión de Tareas
      </Title>

      <p>Bienvenido al sistema.</p>

      <Link to="/tasks">
        <Button type="primary">
          Ir a tareas
        </Button>
      </Link>

      <Link to="/stats">
        <Button>
          Ir a estadísticas
        </Button>
      </Link>
    </>
  );
}