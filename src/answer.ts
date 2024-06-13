import type { Table, Formula, TableColumn, Chart, ParameterOverride, ParameterValue, AnswerColumn } from "./common";
import { parse, stringify } from 'yaml'

export interface Answer {
    guid: string;
    answer: {
      name: string;
      description: string;
      tables: Table[];
      formulas: Formula[];
      search_query: string;
      answer_columns: AnswerColumn[];
      table: {
        table_columns: TableColumn[];
        ordered_column_ids: string[];
        client_state: string;
      };
      chart: Chart;
      display_mode: string;
      parameter_values: ParameterValue[];
      parameter_overrides: ParameterOverride[];
    };
  }
  
  
export const parseAnswer = (raw: string): Answer => { 
    return parse(raw) as Answer
}

export const renderAnswer = (answer: Answer): string => { 
    return stringify(answer, {
        lineWidth: 0,
        indent: 2,
        indentSeq: false,
    })
}
