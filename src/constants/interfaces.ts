export interface Collection {
  data: unknown[];
  limit: number;
  offset: number;
  response: string;
  result: string;
  total: number;
}

export interface DataRes {
  id: string;
  type: string;
  attributes?: unknown;
  relationships?: unknown[];
}

export interface Relationships {
  id: string;
  type: string;
  attributes?: unknown;
}

export interface Manga {
  id?:string;
}

export interface Chapter {
  id: string;
  mangaCover: string;
  mangaTitle: string;
  chapter: number;
  title: string;
  language: string;
  publishAt: string;
  scanlator: string;
}