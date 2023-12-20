import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@ui5/webcomponents-react";
import { Provider } from "react-redux";
import { store } from "src/store";
import Layout from "src/components/layout";
import Search from "src/pages/search";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Search />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
