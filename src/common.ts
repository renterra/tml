export type ColumnType = "MEASURE" | "ATTRIBUTE";
export type DataType = "BOOL" | "VARCHAR" | "DOUBLE" | "FLOAT" | "INT" | "BIGINT" | "DATE" | "DATETIME" | "TIMESTAMP" | "TIME";
export type AggregationType = "SUM" | "COUNT" | "AVERAGE" | "MAX" | "MIN" | "COUNT_DISTINCT" | "NONE" | "STD_DEVIATION" | "VARIANCE";
type ColumnDataType = "INTEGER" | "FLOAT" | "STRING" | "BOOLEAN" | "DATE" | "DATETIME";

export interface Table {
  id: string;
  name: string;
  fqn?: string;
}

export interface FormulaProperties {
  column_type: ColumnType;
  data_type: DataType;
  aggregation: AggregationType;
}

export interface Formula {
  id: string;
  name: string;
  expr: string;
  properties: FormulaProperties;
}

export interface AnswerColumn {
  id?: string;
  name: string;
  custom_name?: string;
}

export interface TableColumn {
  column_id: string;
  show_headline?: boolean;
  headline_aggregation?: string;
}

export interface ChartColumn {
  column_id: string;
}

export interface AxisConfig {
  x?: ChartColumn[];
  y?: ChartColumn[];
  color?: ChartColumn[];
}

export interface Chart {
  type: string;
  chart_columns: ChartColumn[];
  axis_configs: AxisConfig[];
  locked: boolean;
  client_state: string;
}

export interface ParameterValue {
  key: string;
  value: string;
}

export interface ParameterOverride {
  key: string;
  value: {
    name: string;
    id: string;
    override_value: string;
  };
}
