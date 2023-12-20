import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MovieController } from 'src/controllers/movie.controller';
import { MovieService } from 'src/services/movie.service';

@Module({
  imports: [ConfigModule.forRoot({ envFilePath: '.env' })],
  controllers: [MovieController],
  providers: [MovieService],
})
export class AppModule {}
