import { useEffect } from 'react';
import { getLatestUpdateChapter } from '../../utils/queries';

function Home() {
  useEffect(() => {
    getLatestUpdateChapter()
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Latest Updated Chapter</h1>
    </div>
  );
}

export default Home;
