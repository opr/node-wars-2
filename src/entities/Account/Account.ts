import Guild from '../Guild/Guild';
import {Moment} from 'moment';
import mapResponseToProperties from '../../util/mapResponseToProperties';

export default class Account {
  id: string;
  age: number;
  name: string;
  world: number;
  guilds: string[];
  guild_leader: string[];
  created: Moment;
  access: string[];
  commander: boolean;
  fractal_level: number;
  daily_ap: number;
  monthly_ap: number;
  wvw_rank: number;

  constructor(serverResponse: {
    id: string,
    age: number,
    name: string,
    world: number,
    guilds: string[],
    guild_leader: string[],
    created: number,
    access: string[],
    commander: boolean,
    fractal_level: number,
    daily_ap: number,
    monthly_ap: number,
    wvw_rank: number
  }) {
    mapResponseToProperties(serverResponse, this);
  }
}
