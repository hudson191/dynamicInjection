import { Controller, Get, Param } from '@nestjs/common';
import { DynamicServiceResolver } from './dynamic.services.resolver';
import { ServiceType } from './enum/service.type';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('example')
@Controller('example')
export class ExampleController {
  constructor(
    private readonly dynamicServiceResolver: DynamicServiceResolver,
  ) {}

  @Get(':serviceName')
  @ApiParam({
    name: 'serviceName',
    enum: ServiceType,
    description: 'Nome do serviço a ser instanciado',
  }) // Define o parâmetro com enum no Swagger
  @ApiResponse({
    status: 200,
    description: 'Retorna a saudação do serviço instanciado.',
  }) // Define a resposta bem-sucedida
  @ApiResponse({ status: 404, description: 'Serviço não encontrado.' }) // Define uma resposta para erro
  getHello(@Param('serviceName') serviceName: ServiceType): string {
    const service = this.dynamicServiceResolver.getService(serviceName);
    return service.getHello();
  }
}
