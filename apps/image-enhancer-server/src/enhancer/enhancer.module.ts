import { Module } from "@nestjs/common";
import { EnhancerService } from "./enhancer.service";
import { EnhancerController } from "./enhancer.controller";
import { EnhancerResolver } from "./enhancer.resolver";

@Module({
  controllers: [EnhancerController],
  providers: [EnhancerService, EnhancerResolver],
  exports: [EnhancerService],
})
export class EnhancerModule {}
