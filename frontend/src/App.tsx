import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Navbar from "./components/common/Navbar";
import PageNavigator from "./components/PageNavigator";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Navbar />
        <main>
          <PageNavigator />
        </main>
      </div>
    </QueryClientProvider>
  );
}

export default App;
