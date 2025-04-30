//import React, { FC } from 'react';

import Categories from "../routes/Categories"
import TheCrew from "../routes/TheCrew"
import JustOne from "../routes/JustOne"
import SmugOwl from "../routes/SmugOwl"
import Wavelength from "../routes/Wavelength"
import ChangeMyMind from "../routes/ChangeMyMind"
import MadGab from "../routes/MadGab"
import TheGang from "../routes/TheGang"

export interface IGameMetaData {
  name: string,
  description: string,
  path: string,
  bggUrl: string,
  element: any, //FIXME FC<{}>,
}

export const games: IGameMetaData[] = [
  {
    name: "Categories",
    description: "",
    path: "categories",
    element: <Categories />, 
    bggUrl: "https://boardgamegeek.com/boardgame/2381/scattergories",
  },
  {
    name: "The Crew: Mission Deep Sea",
    description: "",
    path: "the-crew",
    element: <TheCrew />,
    bggUrl: "https://boardgamegeek.com/boardgame/324856/the-crew-mission-deep-sea",
  },
  {
    name: "Just One",
    description: "",
    path: "just-one",
    element: <JustOne />,
    bggUrl: "https://boardgamegeek.com/boardgame/254640/just-one",
  },
  {
    name: "Smug Owl",
    description: "",
    path: "smug-owl",
    element: <SmugOwl />,
    bggUrl: "https://boardgamegeek.com/boardgame/393343/smug-owls",
  },
  {
    name: "Wavelength",
    description: "",
    path: "wavelength",
    element: <Wavelength />,
    bggUrl: "https://boardgamegeek.com/boardgame/262543/wavelength",
  },
  {
    name: "ChangeMyMind",
    description: "",
    path: "change-my-mind",
    element: <ChangeMyMind />,
    bggUrl: "https://boardgamegeek.com/boardgame/386961/change-my-mind",
  },
  {
    name: "Mad Gab",
    description: "",
    path: "mad-gab",
    element: <MadGab />,
    bggUrl: "https://boardgamegeek.com/boardgame/764/mad-gab",
  },
  {
    name: "The Gang (2024)",
    description: "",
    path: "the-gang",
    element: <TheGang />,
    bggUrl: "https://boardgamegeek.com/boardgame/411567/the-gang",
  },
  ]
