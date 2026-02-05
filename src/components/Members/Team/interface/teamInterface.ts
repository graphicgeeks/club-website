export interface Team {
  id: string;
  name: string;
}

export interface Member {
  name: string;
  position: string;
  course: string;
  description: string;
  image: string;
  linkedin: string;
  team?: Team[];
}
