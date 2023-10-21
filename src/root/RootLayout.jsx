import Header from "../component/Header";
import Container from "../component/Container";
import { Outlet, useNavigate, useNavigation } from "react-router-dom";
import NewsBar from "../component/NewsBar";
import Footer from "../component/Footer";

function RootLayout() {
  return (
    <div>
      <NewsBar />
      <Container>
        <Header />
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
}

export default RootLayout;
