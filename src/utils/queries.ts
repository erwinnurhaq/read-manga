import axios from 'axios';
import { BASE_URL } from '../constants/baseURL';
import toQueryString from './toQueryString';
import { Collection, DataRes, Relationships } from '../constants/interfaces';

export interface ChapterData extends DataRes {
  relationships: Relationships[];
}

export interface ChapterCollection extends Collection {
  data: ChapterData[];
}

const getChapter = (params: string) =>
  axios.get(`${BASE_URL}/chapter${params}`).then((res) => res.data);

const getManga = (params: string) =>
  axios.get(`${BASE_URL}/manga${params}`).then((res) => res.data);

const getLatestUpdateChapter = async () => {
  try {
    const chapters: ChapterCollection = await getChapter(
      toQueryString({
        includes: ['manga', 'scanlation_group'],
        limit: 20,
        order: { createdAt: 'desc' },
      })
    );
    const mangaIds: string[] = chapters.data.map((chapter: ChapterData) => {
      const relManga = chapter.relationships.find((rel) => rel.type === 'manga');
      return relManga?.id || '';
    });
    const mangas = await getManga(
      toQueryString({ ids: [...new Set(mangaIds)], includes: ['cover_art'], limit: 20 })
    );
    console.log({ mangas });
    return chapters.data;
  } catch (err) {
    throw err;
  }
};

export { getLatestUpdateChapter };
