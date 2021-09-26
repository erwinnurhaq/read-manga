import { IAction, InitialState } from "./types";

export const SET_SELECTED_MANGA = 'global.set.selected.manga';
export const SET_SELECTED_CHAPTER = 'global.set.selected.chapter';

export const initialState = {
  selectedManga: {},
  selectedChapter: {},
};

const reducer: React.Reducer<InitialState, IAction> = (state, action) => {
  switch (action.type) {
    case SET_SELECTED_MANGA:
      return { ...state, selectedManga: action.payload };
    case SET_SELECTED_CHAPTER:
      return { ...state, selectedChapter: action.payload };
    default:
      return state;
  }
};

export default reducer