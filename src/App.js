import React from "react";
import SearchBar from "./components/Search";
import youtube from "./apis/youtube";
import VideoList from "./components/VideoList";
import VidoeDetail from "./components/VideoDetail";
class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  componentDidMount() {
    this.handleSubmit("What is Youtube");
  }

  handleSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  handleClick = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar handleSubmit={this.handleSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VidoeDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                handleClick={this.handleClick}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
