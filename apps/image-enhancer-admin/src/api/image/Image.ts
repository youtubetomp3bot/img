import { JsonValue } from "type-fest";

export type Image = {
  createdAt: Date;
  enhancedImage: JsonValue;
  id: string;
  name: string | null;
  originalImage: JsonValue;
  processed: boolean | null;
  updatedAt: Date;
};
