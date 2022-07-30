import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./style/genaral/GlobalStyle";
import theme from "./style/genaral/theme";
import Mastercraft from "./component/Mastercraft";
import { BackedProvider } from "./component/BackedContext";
import Header from "./component/Header";

function App() {
  return (
    <main>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <BackedProvider>
          <Header />
          <Mastercraft />
        </BackedProvider>
      </ThemeProvider>
    </main>
  );
}

export default App;
