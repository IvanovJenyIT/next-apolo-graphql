interface Options {
  label: string;
  value: string;
}

interface TextField {
  type: "text";
  name: string;
  title: string;
}

interface SelectField {
  type: "select";
  name: string;
  title: string;
  options: Options[];
}

export type AdminBuilderField = TextField | SelectField;

export type AdminBuilderConfig = {
  name: string;
  title: string;
  fields: AdminBuilderField[];
};
