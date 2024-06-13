import { Answer } from "./answer";
import type { ParameterOverride } from "./common";
import { parse, stringify } from 'yaml'

export interface LiveboardVisualization {
  id: string;
  answer: Answer;
  viz_guid: string;
  display_headline_column?: string;
}

export interface Filter {
  column: string | string[];
  oper: string;
  values: string[];
  excluded_visualizations: string[];
}

export interface Tile {
  visualization_id: string;
  x?: number;
  y?: number;
  height?: number;
  width?: number;
  size?: string;
}

export interface Tab {
  name: string;
  description: string;
  tiles: Tile[];
}

export interface Layout {
  tabs: Tab[];
}

export interface Liveboard {
  guid: string;
  liveboard: {
    name: string;
    description: string;
    visualizations: LiveboardVisualization[];
    filters: Filter[];
    layout: Layout;
    parameter_overrides: ParameterOverride[];
  };
}
  
  
export const parseLiveboard = (raw: string): Liveboard => { 
    return parse(raw) as Liveboard
}

export const renderLiveboard = (lv: Liveboard): string => { 
    return stringify(lv, {
        lineWidth: 0,
        indent: 2,
        indentSeq: false,
    })
}
