import { Test, TestingModule } from '@nestjs/testing';
import { ComixController } from './comix.controller';

describe('ComixController', () => {
  let controller: ComixController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComixController],
    }).compile();

    controller = module.get<ComixController>(ComixController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
