import Head from "next/head";
import { useEffect, useState } from "react";
import { Background, Button } from "../component";

const Home = () => {
  const [selected, modificaSelected] = useState(0);

  useEffect(() => {
    setTimeout(
      () => {
        console.group();
        console.log("eu ma chem la 3 secunde");
        if (selected < 2) {
          console.log("inca e mai mic ca 2");
          modificaSelected(selected + 1);
        } else {
          console.log("e 2, reset la 0");
          modificaSelected(0);
        }
        console.groupEnd();
      },

      3000
    );
  }, [selected]);

  const dddddd = (n) => {
    console.log("fa ceva", n);
    modificaSelected(n);
  };
  return (
    <>
      <Head>
        <title>parallax</title>
      </Head>
      <div>selected: {selected + ""}</div>
      <Background numar={selected} />
      <Button onClick={dddddd} number={0}>
        about me
      </Button>
      <Button onClick={dddddd} number={1}>
        portfolio
      </Button>
      <Button onClick={dddddd} number={2}>
        contact
      </Button>
      <h1>Swiper</h1>
    </>
  );
};

export default Home;
