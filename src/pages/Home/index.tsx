import { useContext } from 'react';
import { GlobalContext } from '../../context';
import ChapterCard from './components/ChapterCard';

const mockData = new Array(10).fill({}).map((i, idx) => ({
  id: `${idx + 1}`,
  mangaCover: `some-mangaCover-${idx + 1}`,
  mangaTitle: `some-mangaTitle-${idx + 1}`,
  chapter: idx + 1,
  title: `some-title-${idx + 1}`,
  language: `some-language-${idx + 1}`,
  publishAt: new Date().toISOString(),
  scanlator: `some-scanlator-${idx + 1}`,
}));

function Home() {
  const { selectedChapter, setSelectedChapter } = useContext(GlobalContext);

  console.log(selectedChapter)

  return (
    <div>
      <h1>Latest Updated Chapter</h1>
      {mockData.map(chapter => (
        <ChapterCard key={chapter.id} chapter={chapter} onClick={setSelectedChapter} />
      ))}
    </div>
  );
}

export default Home;
