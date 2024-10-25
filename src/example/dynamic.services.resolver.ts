import { Injectable } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { IService } from './interfaces/service';
import { ServiceType } from './enum/service.type';

@Injectable()
export class DynamicServiceResolver {
  constructor(
    private readonly moduleRef: ModuleRef, // Injeta o ModuleRef para resolver dinamicamente os serviços
  ) {}

  getService(serviceName: ServiceType): IService {
    return this.moduleRef.get(serviceName, { strict: false });
  }
}
