import whereIsDrug from "./where_is_drug";
import DxLab from "./dxlab";
import MediX from "./medi_x";
import MergeBank from "./merge_bank";
import Portfolio from "./portfolio";
import YenaNow from "./yena_now";
import OnWear from "./on_wear";
import Namuh from "./namuh";

export interface Project {
  id: string;
  title: string;
  description: string;
  summary?: string;
  detailContent?: string;
  tags: string[];
  image: string;
  github?: string;
  workPeriod: {
    start: string;
    end?: string;
  };
}

export const projects: Project[] = [
  MediX,
  Namuh,
  YenaNow,
  OnWear,
  Portfolio,
  MergeBank,
  DxLab,
  whereIsDrug,
];
