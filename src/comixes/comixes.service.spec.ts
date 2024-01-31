import { Test, TestingModule } from '@nestjs/testing';
import { ComixesService } from './comixes.service';

describe('ComixesService', () => {
  let service: ComixesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComixesService],
    }).compile();

    service = module.get<ComixesService>(ComixesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
