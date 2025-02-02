import { Header, Social, Galleries } from "../types";

export const header: Header = {
  title: "The Professor's Cards",
  description: "Gallary of my personal collection of cards and paper.",
  image: require("./profile.png"),
  disabled: false,
};

export const social: Social = {
  github: "https://github.com/BenjaminDHorne",
  disabled: false,
};

export const galleries: Galleries = [
  {
    category: "Category name",
    images: [
      {
        name: "test.jpg", // Important: specify the extension
        description: "Description of image 1",
      }, // duplicate image object for more
    ],
  }, // duplicate gallery object for more
];
