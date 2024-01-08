export interface IAudioSrc {
  src: string;
}

export interface ISpeaker {
  [duration: string]: IAudioSrc;
}

export interface ICategory {
  [speaker: string]: ISpeaker;
}

export interface IAudioFileRoutes {
  [category: string]: ICategory;
}
