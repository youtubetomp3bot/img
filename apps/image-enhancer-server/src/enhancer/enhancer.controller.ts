import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { EnhancerService } from "./enhancer.service";
import { ImageDto } from "./ImageDto";

@swagger.ApiTags("enhancers")
@common.Controller("enhancers")
export class EnhancerController {
  constructor(protected readonly service: EnhancerService) {}

  @common.Post("/enhance")
  @swagger.ApiOkResponse({
    type: ImageDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async EnhanceImage(
    @common.Body()
    body: ImageDto
  ): Promise<ImageDto> {
        return this.service.EnhanceImage(body);
      }
}
