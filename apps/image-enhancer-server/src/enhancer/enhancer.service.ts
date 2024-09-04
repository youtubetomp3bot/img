import { Injectable } from "@nestjs/common";
import { ImageDto } from "./ImageDto";

@Injectable()
export class EnhancerService {
  constructor() {}
  async EnhanceImage(args: ImageDto): Promise<ImageDto> {
    throw new Error("Not implemented");
  }
}
