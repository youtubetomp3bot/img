import { InputJsonValue } from "../../types";

export type ImageCreateInput = {
  enhancedImage?: InputJsonValue;
  name?: string | null;
  originalImage?: InputJsonValue;
  processed?: boolean | null;
};
