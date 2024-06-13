import { Answer } from "../index";

// Example usage of the Answer type
const exampleAnswer: Answer = {
    guid: "answer_guid",
    answer: {
      name: "answer_name",
      description: "This is a multi-line description of the answer\nDescription line 2",
      tables: [
        { id: "table_id", name: "table_name_1", fqn: "optional_GUID_of_table_name" }
      ],
      formulas: [
        { id: "formula_id_1", name: "formula_name_1", expr: "formula_definition_1", properties: { column_type: "MEASURE", data_type: "DOUBLE", aggregation: "SUM" } },
        { id: "formula_id_2", name: "formula_name_2", expr: "formula_definition_2", properties: { column_type: "ATTRIBUTE", data_type: "VARCHAR", aggregation: "NONE" } },
        { id: "formula_id_3", name: "formula_name_3", expr: "formula_definition_3", properties: { column_type: "MEASURE", data_type: "INT", aggregation: "COUNT" } }
      ],
      search_query: "search_query_string",
      answer_columns: [
        { id: "column_id_1", name: "column_name_1", custom_name: "custom_name_1" },
        { name: "column_name_2" }
      ],
      table: {
        table_columns: [
          { column_id: "column_id_1", show_headline: true, headline_aggregation: "headline_aggregation_string" },
          { column_id: "column_id_2" }
        ],
        ordered_column_ids: ["column_id_1", "column_id_2"],
        client_state: "client_state_string"
      },
      chart: {
        type: "chart_type",
        chart_columns: [
          { column_id: "column_id_1" },
          { column_id: "column_id_2" }
        ],
        axis_configs: [
          { x: [{ column_id: "column_id_x_axis" }], y: [{ column_id: "column_id_y_axis" }], color: [{ column_id: "column_id_color" }] },
        ],
        locked: true,
        client_state: "client_state_string"
      },
      display_mode: "display_mode_string",
      parameter_values: [
        { key: "parameter_1_key", value: "parameter_1_value" },
        { key: "parameter_2_key", value: "parameter_2_value" },
        { key: "parameter_n_key", value: "parameter_n_value" }
      ],
      parameter_overrides: [
        { key: "parameter_guid", value: { name: "parameter_name", id: "parameter_guid", override_value: "parameter_override_value" } }
      ]
    }
  };
