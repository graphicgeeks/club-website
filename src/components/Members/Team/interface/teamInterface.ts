export interface Team {
  id: string;
  name: string;
}

export interface Member {
  name: string;
  position: string;
  description: string;
  image: string;
  team?: Team[];
}
