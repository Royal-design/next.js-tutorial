import { StaticImageData } from "next/image";
import photo1 from "./photos/1.jpg";
import photo2 from "./photos/2.jpg";
import photo3 from "./photos/3.jpg";
import photo4 from "./photos/4.jpg";
import photo5 from "./photos/5.jpg";
import photo6 from "./photos/6.jpg";
import photo7 from "./photos/7.jpg";

export type WonderImage = {
  id: string;
  name: string;
  src: string;
  photographer: string;
  location: string;
};

const wondersImages: WonderImage[] = [
  {
    id: "1",
    name: "Great Wall of China",
    src: "https://images.unsplash.com/photo-1749288752497-5fb00d855426?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
    photographer: "Photo by Max van den Oetelaar on Unsplash",
    location: "China"
  },
  {
    id: "2",
    name: "Petra",
    src: "https://images.unsplash.com/photo-1749137598868-94bde1951944?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
    photographer: "Photo by Reiseuhu on Unsplash",
    location: "Jordan"
  },
  {
    id: "3",
    name: "Christ the Redeemer",
    src: "https://images.unsplash.com/photo-1749221836725-494abefcd2a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
    photographer: "Photo by Andrea Leopardi on Unsplash",
    location: "Brazil"
  },
  {
    id: "4",
    name: "Machu Picchu",
    src: "https://images.unsplash.com/photo-1749230950849-f3f93591f905?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
    photographer: "Photo by Jared Schwitzke on Unsplash",
    location: "Peru"
  },
  {
    id: "5",
    name: "Chichen Itza",
    src: "https://images.unsplash.com/photo-1749254995381-802fcc8a2aab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
    photographer: "Photo by E Mens on Unsplash",
    location: "Mexico"
  },
  {
    id: "6",
    name: "Roman Colosseum",
    src: "https://images.unsplash.com/photo-1749254995381-802fcc8a2aab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
    photographer: "Photo by Andrea Cipriano on Unsplash",
    location: "Italy"
  },
  {
    id: "7",
    name: "Taj Mahal",
    src: "https://images.unsplash.com/photo-1749137315928-bc96451fa4c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D",
    photographer: "Photo by Su San Lee on Unsplash",
    location: "India"
  }
];

export default wondersImages;
