import {
 BrowserRouter,
 Routes,
 Route
} from "react-router-dom";

import Navbar from "./componets/Navbar";

import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Stats from "./pages/Stats";
import { Layout } from "antd";

function App() {
 return (
  <BrowserRouter>

   <Navbar />

   <Routes>

    <Route
      path="/"
      element={<Home />}
    />

    <Route
      path="/tasks"
      element={<Tasks />}
    />

    <Route
      path="/stats"
      element={<Stats tasks={[]} />}
    />

   </Routes>

  </BrowserRouter>
 );
}
const { Header, Content, Footer } = Layout;

<Layout>
  <Header>
    <Navbar />
  </Header>

  <Content className="page-container">
    <Routes />
  </Content>

  <Footer style={{ textAlign: "center" }}>
    Sistema de Gestión de Tareas © 2026
  </Footer>
</Layout>
export default App;