import { Dispatch } from 'react'
import { Chapter, Manga } from '../constants/interfaces';

export interface InitialState {
  selectedManga: { id?: number };
  selectedChapter: { id?: number };
}

export interface IAction {
  type: string,
  payload?: any
}

export interface IGlobalProvider {
  children: React.ReactNode;
}

export interface IGlobalContext extends InitialState {
  dispatch?: Dispatch<IAction>;
  setSelectedManga: (data: Manga) => void;
  setSelectedChapter: (data: Chapter) => void;
}