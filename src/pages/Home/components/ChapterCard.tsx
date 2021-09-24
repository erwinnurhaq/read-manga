interface ChapterCardProps {
  mangaCover: string;
  mangaTitle: string;
  chapter: number;
  title: string;
  language: string;
  publishAt: string;
  scanlator: string;
}

function ChapterCard(props: ChapterCardProps) {
  const { mangaCover, mangaTitle, chapter, title, language, publishAt, scanlator } = props;
  return (
    <div>
      <img src={mangaCover || ''} alt={mangaCover || ''} />
      <h5>{mangaTitle}</h5>
      <p>
        Ch:${chapter}${title ? ` - ${title}` : ''}${language ? ` (${language})` : ''}
      </p>
      <p>{scanlator}</p>
      <p>{new Date(publishAt).toLocaleString()}</p>
    </div>
  );
}

export default ChapterCard;
