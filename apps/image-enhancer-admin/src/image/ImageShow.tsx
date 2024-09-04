import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";

export const ImageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="enhancedImage" source="enhancedImage" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="originalImage" source="originalImage" />
        <BooleanField label="processed" source="processed" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
