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
