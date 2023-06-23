import {useQuery} from "react-query";
import {fetchFact} from "../../api";

export function useFact() {
    return useQuery('fact', fetchFact);
}
