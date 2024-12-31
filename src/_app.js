import { Provider } from "react-redux";
import { store } from "../app/store";
import ScrollToTop from "../components/common/ScrollTop";
import Seo from "../components/common/seo";
import "../index.scss";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Seo
        font={
          "https://fonts.googleapis.com/css2?family=Outfit:wght@500&display=swap"
        }
      />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>

      <ScrollToTop />
    </>
  );
}

export default MyApp;
