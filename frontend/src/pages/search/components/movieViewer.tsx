import React from "react";
import { FlexBox, Title, Text, Icon, Button } from "@ui5/webcomponents-react";
import type { Movie } from "src/interfaces/movie";

interface MovieViewerInterface {
  movie: Movie;
}

const MovieViewer: React.FC<MovieViewerInterface> = ({ movie }) => {
  const rating = Math.round(parseFloat(movie.imdbRating) / 2);
  return (
    <FlexBox>
      <div style={{ flexGrow: 1, marginRight: 30 }}>
        <Title style={{ marginBottom: 30 }}>{movie.Title}</Title>
        <Text style={{ fontSize: 16, marginBottom: 30 }}>{movie.Plot}</Text>
        <FlexBox alignItems="Center" style={{ marginBottom: 10 }}>
          <Title style={{ fontSize: 18, marginRight: 20 }}>Actor</Title>
          <Text style={{ fontSize: 16 }}>{movie.Actors}</Text>
        </FlexBox>
        <FlexBox alignItems="Center" style={{ marginBottom: 30 }}>
          <Title style={{ fontSize: 18, marginRight: 20 }}>Review</Title>
          {Array.from({ length: 5 }).map((_, index) => (
            <Icon
              key={index}
              name={index + 1 > rating ? "unfavorite" : "favorite"}
              style={{ marginRight: 2 }}
            />
          ))}
        </FlexBox>
        <Button icon="heart-2" iconEnd>
          Favorite
        </Button>
      </div>
      <img
        src={movie.Poster}
        alt="Poster"
        style={{ maxWidth: 300, width: "100%" }}
      />
    </FlexBox>
  );
};

export default MovieViewer;
