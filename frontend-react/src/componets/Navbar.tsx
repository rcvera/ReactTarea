import { Menu } from "antd";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="1">
        <Link to="/">Inicio</Link>
      </Menu.Item>

      <Menu.Item key="2">
        <Link to="/tasks">Tareas</Link>
      </Menu.Item>

      <Menu.Item key="3">
        <Link to="/stats">Estadísticas</Link>
      </Menu.Item>
    </Menu>
  );
}