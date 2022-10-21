import { Controller, Get, Param } from '@nestjs/common';
import { CancelingHold } from 'src/lending/use-cases/canceling-hold';
import { PlacingOnHold } from 'src/lending/use-cases/placing-on-hold';

@Controller()
export class LendingController {
  constructor(
    private readonly cancelingHold: CancelingHold,
    private readonly placingOnHold: PlacingOnHold,
  ) {}

  @Get('cancel-hold/:bookId')
  async cancelHold(@Param('bookId') bookId: string): Promise<string> {
    await this.cancelingHold.execute({ bookId, patronId: 'zyx' });
    return `Hold is canceled`;
  }

  @Get('place-on-hold/:bookId')
  async placeOnHold(@Param('bookId') bookId: string): Promise<string> {
    await this.placingOnHold.execute({ bookId, patronId: 'zyx' });
    return `You placed the book on hold`;
  }
}
