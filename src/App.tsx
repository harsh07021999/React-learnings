import { Sections } from "./components/headersNSections/sections";
import { Head } from "./components/headersNSections/heading";
import { SearchBox } from "./components/autoCompleteBox/searchbox";

function App() {
  return (
    <>
      Hello!
      <Sections level={1}>
        <Head>Heading 1</Head>
        <Sections level={2}>
          <Head>Heading 2</Head>
          <Sections level={3}>
            <Head>Heading 3</Head>
            <Sections level={4}>
              <Head>Heading 4</Head>
            </Sections>
          </Sections>
        </Sections>
      </Sections>
      <SearchBox></SearchBox>
    </>
  );
}

export default App;
