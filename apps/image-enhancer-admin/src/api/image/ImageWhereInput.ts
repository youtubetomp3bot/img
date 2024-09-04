import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type ImageWhereInput = {
  enhancedImage?: JsonFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  originalImage?: JsonFilter;
  processed?: BooleanNullableFilter;
};
