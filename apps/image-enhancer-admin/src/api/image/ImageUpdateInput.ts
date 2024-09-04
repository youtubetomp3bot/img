import { InputJsonValue } from "../../types";

export type ImageUpdateInput = {
  enhancedImage?: InputJsonValue;
  name?: string | null;
  originalImage?: InputJsonValue;
  processed?: boolean | null;
};
