import {useEffect, useState} from "react";
import {Fact} from "../components/fact";
import {fetchFact} from "../api";

export function Home() {
    const [fact, setFact] = useState<string | null>();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadFact();
    }, [])

    async function loadFact() {
        setLoading(true);
        setFact(await fetchFact());
        setLoading(false);
    }

    return <main className="min-h-screen flex items-center justify-center bg-gray-900">
        <Fact
            loading={loading}
            onReload={loadFact}
        >
            {fact}
        </Fact>
    </main>
}
