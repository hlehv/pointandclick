import React from "react";
import "./WebBrowser.css";
import { Window } from "../../GuiElements";
import { FBIPage, Gmail, NameChange, NewsSite } from "./Websites";

class WebBrowser extends React.Component {
  state = {
    bookmarks: {
      "news": <NewsSite/>,
      "fbi": <FBIPage/>,
      "email": <Gmail/>,
      "name change": <NameChange />
    },
    currentPage: "news"
  };
  render() {
    return (
      <div className="web-browser">
        <Window title="Web Browser" contents={
          <div>
            <div className="Bookmarks">
              Bookmarks:
              {
                Object.keys(this.state.bookmarks).map((bookmark, index) => (
                  <button className="bookmark" key={index}
                    onClick={() => this.handleBookmarksClick(bookmark)}>
                    {bookmark}
                  </button>
                ))
              }
            </div>

            { this.state.bookmarks[this.state.currentPage] }
          </div>
        } close={this.props.close}/>
      </div>
    );
  }
  handleBookmarksClick = bookmark => {
    this.setState({
      currentPage: bookmark
    });
  }
}

export default WebBrowser;