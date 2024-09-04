import * as graphql from "@nestjs/graphql";
import { ImageDto } from "./ImageDto";
import { EnhancerService } from "./enhancer.service";

export class EnhancerResolver {
  constructor(protected readonly service: EnhancerService) {}

  @graphql.Mutation(() => ImageDto)
  async EnhanceImage(
    @graphql.Args()
    args: ImageDto
  ): Promise<ImageDto> {
    return this.service.EnhanceImage(args);
  }
}
