import { Module } from '@nestjs/common';
import { ExampleController } from './example.controller';
import { DynamicServiceResolver } from './dynamic.services.resolver';
import { ServiceA } from './a.service';
import { ServiceB } from './b.service';

@Module({
  controllers: [ExampleController],
  providers: [
    {
      provide: 'ServiceA',
      useClass: ServiceA,
    },
    {
      provide: 'ServiceB',
      useClass: ServiceB,
    },
    DynamicServiceResolver,
  ],
})
export class ExampleModule {}
