import "./App.css";
import styled from "@emotion/styled";
import Header from "./components/common/Header";
import Navbar from "./components/common/Navbar";
import PageNavigator from "./components/PageNavigator";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <HeaderContainer>
          <Header />
          <Navbar />
        </HeaderContainer>
        <MainCotainer>
          <PageNavigator />
        </MainCotainer>
      </div>
    </QueryClientProvider>
  );
}

export default App;

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #000;
`;

const MainCotainer = styled.main`
  height: 100vh;
  background-color: #fff;
`;
