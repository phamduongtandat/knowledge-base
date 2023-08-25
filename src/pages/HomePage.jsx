import ContentPage from "../components/container/ContentPage";
import EmptyPage from "../components/noData/EmptyPage";
import { AddPopupProvider } from "../context/AddPopupContext";

function HomePage() {

    return (

        <AddPopupProvider>
            <ContentPage titlePage="Home" />
            {/* <EmptyPage titlePage="Home" /> */}
        </AddPopupProvider>
    );
}

export default HomePage;
