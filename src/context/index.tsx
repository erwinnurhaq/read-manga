import React from 'react';
import globalReducer, { initialState, SET_SELECTED_CHAPTER, SET_SELECTED_MANGA } from './reducer';
import { IGlobalContext, IGlobalProvider } from './types';
import { Chapter, Manga } from '../constants/interfaces';

const GlobalContext = React.createContext<IGlobalContext>({
  ...initialState,
  dispatch: () => {},
  setSelectedManga: () => {},
  setSelectedChapter: () => {},
});

const GlobalContextProvider: React.FC<IGlobalProvider> = ({ children }) => {
  const [state, dispatch] = React.useReducer(globalReducer, initialState);

  const setSelectedManga = (data: Manga) => {
    dispatch({ type: SET_SELECTED_MANGA, payload: data });
  };

  const setSelectedChapter = (data: Chapter) => {
    dispatch({ type: SET_SELECTED_CHAPTER, payload: data });
  };

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        dispatch,
        setSelectedManga,
        setSelectedChapter
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContextProvider, GlobalContext };
