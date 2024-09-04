import { SortOrder } from "../../util/SortOrder";

export type ImageOrderByInput = {
  createdAt?: SortOrder;
  enhancedImage?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  originalImage?: SortOrder;
  processed?: SortOrder;
  updatedAt?: SortOrder;
};
