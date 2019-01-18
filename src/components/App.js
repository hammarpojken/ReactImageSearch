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

  renderImages() {
    const a = this.state.images;
    const b = [];
    for (let i = 0; i < a.length; i++) {
      b[i] = <ImageDisplayer key={i} imgUrl={a[i].urls.small} />;
    }
    return b;
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div>{this.renderImages()}</div>
      </div>
    );
  }
}
export default App;
