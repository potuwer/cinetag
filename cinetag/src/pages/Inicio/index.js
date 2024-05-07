import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";
import styles from "./Inicio.module.css";
import { useEffect, useState } from "react";

function Inicio() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/potuwer/cinetag/videos")
      .then((resposta) => resposta.json())
      .then((dados) => setVideos(dados))
  }, []);


  return (
    <>
      <Banner imagem="home" />
      <Titulo>Um lugar para guardar seus vídeos e filmes!</Titulo>
      <section className={styles.container}>
        {videos.map((video) => (
          <Card {...video} key={video.id}></Card>
        ))}
      </section>
    </>
  );
}

export default Inicio;
