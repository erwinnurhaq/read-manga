import { Chapter } from '../../../constants/interfaces';

interface ChapterCardProps {
  chapter: Chapter;
  onClick: (data: Chapter) => void;
}

function ChapterCard({ chapter, onClick }: ChapterCardProps) {
  return (
    <div role="button" onClick={() => onClick(chapter)}>
      <img src={chapter.mangaCover || ''} alt={chapter.mangaCover || ''} />
      <h5>{chapter.mangaTitle}</h5>
      <p>
        Ch:{chapter.chapter}
        {chapter.title ? ` - ${chapter.title}` : ''}
        {chapter.language ? ` (${chapter.language})` : ''}
      </p>
      <p>{chapter.scanlator}</p>
      <p>{new Date(chapter.publishAt).toLocaleString()}</p>
    </div>
  );
}

export default ChapterCard;
