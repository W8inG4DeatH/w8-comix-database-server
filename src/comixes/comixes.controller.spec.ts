import { Test, TestingModule } from '@nestjs/testing';
import { ComixesController } from './comixes.controller';

describe('ComixesController', () => {
  let controller: ComixesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComixesController],
    }).compile();

    controller = module.get<ComixesController>(ComixesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
