import { Inject, Injectable, Scope } from "@nestjs/common";
import { REQUEST } from "@nestjs/core";

@Injectable({ scope: Scope.REQUEST })
export class SuperService {
  @Inject(REQUEST)
  protected readonly request: Request;

  getValueFromRequest() {
    return this.request.url;
  }
}