//import React, { FC } from 'react';

import Categories from "../routes/Categories"
import TheCrew from "../routes/TheCrew"
import JustOne from "../routes/JustOne"
import SmugOwl from "../routes/SmugOwl"

export interface IGameMetaData {
  name: string,
  description: string,
  path: string,
  bggUrl: string,
  element: any, //FC<{}>,
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
  ]
