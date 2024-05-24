import { Injectable } from '@nestjs/common';
import { ProductsService } from 'src/products/products.service';

@Injectable()
export class SeedService {
  constructor(private readonly productService: ProductsService) {}

  runSeed() {
    return 'seed executed';
  }
}
