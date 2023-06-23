import {Home} from "./pages/home";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: 1,
        }
    }
})

export function App() {
    return <QueryClientProvider client={queryClient}>
        <Home/>
    </QueryClientProvider>
}
