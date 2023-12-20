import {
  Controller,
  Get,
  Query,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { MovieService } from 'src/services/movie.service';
import { Movie, MovieResponse } from 'src/interfaces/movie';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  async searchMovie(@Query('search') search): Promise<MovieResponse> {
    if (!search) {
      throw new HttpException(
        { message: 'Search query cannot be empty' },
        HttpStatus.BAD_REQUEST,
      );
    }
    const response = await this.movieService.searchMovie(search);
    if (response.Response === 'False') {
      throw new HttpException({ message: 'Not Found' }, HttpStatus.NOT_FOUND);
    }
    const result = response as Movie;
    return {
      Title: result.Title,
      Actors: result.Actors,
      Plot: result.Plot,
      Poster: result.Poster,
      imdbRating: result.imdbRating,
      imdbID: result.imdbID,
    };
  }
}
