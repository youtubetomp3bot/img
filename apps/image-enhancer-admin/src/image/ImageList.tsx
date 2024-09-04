import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const ImageList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Images"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="enhancedImage" source="enhancedImage" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="originalImage" source="originalImage" />
        <BooleanField label="processed" source="processed" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
