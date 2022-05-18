import assets from '../assets';
export const listItems = [
  {
    id: 0,
    nameProject: 'Animations Properties',
    icon: assets.iconRocket,
    navigation: 'AnimationsProperties',
  },
  {
    id: 1,
    nameProject: 'Pokemon ',
    icon: assets.iconPokeBall,
    navigation: 'PokemonScreen',
  },
  {
    id: 2,
    nameProject: 'DayNight\nTransition',
    icon: assets.iconSun,
    navigation: 'DayNightTransition',
  },
  {
    id: 3,
    nameProject: 'PaperPlane',
    icon: assets.iconPlane,
    navigation: 'PaperPlane',
  },
  {
    id: 4,
    nameProject: 'ScaleScrollList',
    icon: assets.iconScroll,
    navigation: 'ScaleScrollList',
  },
  {
    id: 5,
    nameProject: 'GalleryView',
    icon: assets.iconGallery,
    navigation: 'GalleryView',
  },
  // {
  //   id: 4,
  //   nameProject: 'ButtonScreen',
  //   icon: assets.iconPokeBall,
  //   navigation: 'ButtonScreen',
  // },
  // {
  //   id: 5,
  //   nameProject: 'Gesture\nHandler',
  //   icon: assets.iconRocket,
  //   navigation: 'GestureHandler',
  // },
];
export let listAvatar = new Array(20).fill( {
  name: 'Mr Hung',
  jobTitle: 'Mobile Developer',
  email: 'hungk.dev@gmail.com',
  avatar: require("../assets/pokemon/pikachu.png"),
})
