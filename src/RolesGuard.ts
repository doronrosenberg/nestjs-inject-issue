import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { ContextIdFactory, ModuleRef, Reflector } from "@nestjs/core";
import { AppService } from "./app.service";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector, private moduleRef: ModuleRef) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    const contextId = ContextIdFactory.getByRequest(request);

    const appService = await this.moduleRef.resolve(
      AppService,
      contextId
    );

    console.log("Roles guard", appService.getValue())

    return true;
  }
}
