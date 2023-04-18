import LoadingPage from "../components/LoadingPage";
import LotoFacil from "../components/LotoFacil";
import MegaSena from "../components/MegaSena";

function Principal() {
    return (
        <>
            <MegaSena />
            <LoadingPage />
            <LotoFacil />
        </>
    )
}
export default Principal;