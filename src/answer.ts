import type { Table, Formula, TableColumn, Chart, ParameterOverride, ParameterValue, AnswerColumn } from "./common";
import { parse, stringify } from 'yaml'

export interface Answer {
    
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
    
  }

export interface WrappedAnswer {
    guid: string;
    answer: Answer
  }
  
  
export const parseAnswer = (raw: string): WrappedAnswer => { 
    return parse(raw) as WrappedAnswer
}

export const renderAnswer = (answer: WrappedAnswer): string => { 
    return stringify(answer, {
        lineWidth: 0,
        indent: 2,
        indentSeq: false,
    })
}
