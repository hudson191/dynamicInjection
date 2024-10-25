import { Injectable, Scope } from '@nestjs/common';
import { IService } from './interfaces/service';

@Injectable({ scope: Scope.DEFAULT })
export class ServiceA implements IService {
  getHello(): string {
    return 'Hello from Service A';
  }
}
