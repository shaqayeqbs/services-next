import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { appWithTranslation } from "next-i18next";
import Layout from "../src/components/layouts";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools"; // Import devtools
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import "../styles/globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import SplashScreen from "../src/components/ui/splash-screen";
import "../i18";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const { i18n } = useTranslation();

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");

    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
  }, [i18n]);

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer />
      </Layout>
      <ReactQueryDevtools initialIsOpen={false} /> {/* Include devtools */}
    </QueryClientProvider>
  );
}

export default appWithTranslation(MyApp);
