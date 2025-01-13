import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Navbar from "./components/common/Navbar";
import PageNavigator from "./components/PageNavigator";
import styled from "@emotion/styled";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <header>
          <Navbar />
        </header>
        <MainCotainer>
          <PageNavigator />
        </MainCotainer>
      </div>
    </QueryClientProvider>
  );
}

export default App;

const MainCotainer = styled.main`
  height: 100vh;
  background-color: #fff;
`;
