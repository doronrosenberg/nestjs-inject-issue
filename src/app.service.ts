import { Injectable } from '@nestjs/common';
import { SuperService } from "./SuperService";

@Injectable()
export class AppService extends SuperService {
  getHello(): string {
    return 'Hello World!';
  }

  getValue() {
    return this.getValueFromRequest();
  }
}
