export interface Slider {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  buttonName: string;
  link: string;
}
export interface MySliderProps {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

export interface ProjectCardDetils {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  label: string[];
  gitUrl: string;
}
export interface CardDetails {
  title: string;
  imageUrl: string;
  description: string;
  day: number;
  month: number;
  year: number;
  issued: string;
}
