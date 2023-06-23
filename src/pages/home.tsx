import {Fact} from "../components/fact";
import {useFact} from "../components/queries/use-fact";

export function Home() {
    const fact = useFact();

    return <main className="min-h-screen flex items-center justify-center bg-gray-900">
        <Fact
            loading={fact.isFetching}
            onReload={() => fact.refetch()}
        >
            {fact.data}
        </Fact>
    </main>
}
