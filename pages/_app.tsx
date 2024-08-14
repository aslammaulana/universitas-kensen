import { AppProps } from "next/app";
import "../styles/globals.css";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { motion, AnimatePresence } from "framer-motion";
import '../styles/globals.css'
import { useRouter } from "next/router";

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div key={router.pathname}>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools />
            <Component {...pageProps} />
          </QueryClientProvider>

          <motion.div
            className="slide-in"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: .3, ease: [0.22, 1, 0.3, 1] }}
          ></motion.div>
          <motion.div

            className="slide-out"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: .3, ease: [0.22, 1, 0.3, 1] }}>

          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default App;
