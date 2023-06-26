import {Fact} from "../components/fact";
import {useGetFactQuery} from "../services/fact";

export function Home() {
    const {data, isLoading, refetch} = useGetFactQuery();

    return <main className="min-h-screen flex items-center justify-center bg-gray-900">
        <Fact
            loading={isLoading}
            onReload={refetch}
        >
            {data?.data[0]}
        </Fact>
    </main>
}
