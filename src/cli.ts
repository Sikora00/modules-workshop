import { Logger } from '@nestjs/common';
import { CommandFactory } from 'nest-commander';
import { CatalogueCliModule } from './catalogue/cli/catalogue-cli.module';

async function bootstrap(): Promise<void> {
  await CommandFactory.run(CatalogueCliModule, { logger: new Logger() });
}

bootstrap();
