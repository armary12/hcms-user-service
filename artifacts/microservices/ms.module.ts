import { Module } from '@nestjs/common';
import { TCPModule } from './tcp/tcp.module';

@Module({
  imports: [TCPModule],
  controllers: [],
  providers: [],
  exports: [TCPModule],
})
export class MicroservicesModule {}
