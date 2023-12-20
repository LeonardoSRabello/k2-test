import React, { useState } from "react";
import { FlexBox, Input, Button } from "@ui5/webcomponents-react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "src/store";
import { getMovie, resetMovie } from "src/store/actions/movie";

const SearchBox: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { isLoading } = useSelector((state: RootState) => state.movie);
  const [keyword, setKeyword] = useState<string>("");

  const onSearch = () => {
    if (!isLoading && !!keyword) {
      dispatch(getMovie(keyword));
    }
  };

  const onReset = () => {
    dispatch(resetMovie());
  };

  return (
    <FlexBox
      justifyContent="Center"
      alignItems="Center"
      style={{ marginBottom: 30 }}
    >
      <Input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value || "")}
        style={{ margin: "0 10px 0 0" }}
      />
      <Button
        icon="search"
        iconEnd
        disabled={isLoading}
        onClick={onSearch}
        style={{ margin: "0 10px 0 0" }}
      >
        Search
      </Button>
      <Button
        icon="reset"
        iconEnd
        disabled={isLoading}
        onClick={onReset}
        style={{ margin: "0 10px 0 0" }}
      >
        Reset
      </Button>
    </FlexBox>
  );
};

export default SearchBox;
