import { useParams } from 'react-router';

function Manga() {
  const params = useParams();

  console.log({ params });
  return <div>Manga</div>;
}

export default Manga;
