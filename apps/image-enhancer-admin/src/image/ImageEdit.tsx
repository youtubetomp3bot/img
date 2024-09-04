import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const ImageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="name" source="name" />
        <div />
        <BooleanInput label="processed" source="processed" />
      </SimpleForm>
    </Edit>
  );
};
