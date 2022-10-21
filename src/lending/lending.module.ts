import { Module } from '@nestjs/common';
import { PersistanceJsonFileModule } from 'src/persistance/json-file/persistance-json-file.module';
import { LendingController } from './lending.controller';
import { CancelingHold } from './use-cases/canceling-hold';
import { PlacingOnHold } from './use-cases/placing-on-hold';

@Module({
  imports: [PersistanceJsonFileModule],
  controllers: [LendingController],
  providers: [CancelingHold, PlacingOnHold],
})
export class LendingModule {}
