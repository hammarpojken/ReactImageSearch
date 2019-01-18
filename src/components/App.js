import React from "react";
import SearchBar from "./SearchBar";
import ImageDisplayer from "./ImageDisplayer";
import unsplash from "../api/unsplash";

class App extends React.Component {
  state = {
    images: []
  };

  onSearchSubmit = async input => {
    const response = await unsplash.get("/search/photos", {
      params: { query: input }
    });

    this.setState({
      images: response.data.results
    });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageDisplayer images={this.state.images} />
      </div>
    );
  }
}
export default App;
