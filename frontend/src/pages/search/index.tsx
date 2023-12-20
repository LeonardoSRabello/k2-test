import React from "react";
import { useSelector } from "react-redux";
import { FlexBox, Title, Text, Loader } from "@ui5/webcomponents-react";
import SearchBox from "./components/searchBox";
import MovieViewer from "./components/movieViewer";
import type { RootState } from "src/store";

const Search: React.FC = () => {
  const { isInitial, isLoading, movie, err } = useSelector(
    (state: RootState) => state.movie
  );

  return (
    <div>
      <FlexBox
        alignItems="Center"
        direction="Column"
        style={{ marginBottom: 20 }}
      >
        <Title style={{ padding: 20 }}>Search Movie with Title</Title>
        <Text style={{ fontSize: 16, maxWidth: 500, textAlign: "center" }}>
          Here, you can find movies with the title.
        </Text>
        <Text style={{ fontSize: 16, maxWidth: 500, textAlign: "center" }}>
          Type title keyword and then, you can see the result.
        </Text>
      </FlexBox>
      <SearchBox />
      {isInitial && (
        <FlexBox justifyContent="Center">
          <Text>Type search keyword!</Text>
        </FlexBox>
      )}
      {isLoading ? (
        <Loader />
      ) : movie ? (
        <MovieViewer movie={movie} />
      ) : isInitial ? null : (
        <FlexBox justifyContent="Center">
          <Text>There's no Movie with the title</Text>
        </FlexBox>
      )}
      {!!err && (
        <FlexBox justifyContent="Center">
          <Text>{err}</Text>
        </FlexBox>
      )}
    </div>
  );
};

export default Search;
