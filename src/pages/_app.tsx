import "../styles/globals.css";
import { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import DefaultLayout from "@/components/layout/DefaultLayout";
import UseScrollToTop from "@/hooks/useScrollToTop";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
      <UseScrollToTop />
    </AnimatePresence>
  );
}

export default MyApp;
