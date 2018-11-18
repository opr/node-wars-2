export default class Guild {
  level: number;
  motd: string;
  influence: number;
  aetherium: string;
  favor: number;
  id: string;
  name: string;
  tag: string;
  emblem: {
    background: {
      id: number,
      colors: number[]
    },
    foreground: {
      id: number,
      colors: number[]
    },
    flags: string[]
  };

}
