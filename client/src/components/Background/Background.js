import React from "react";
import "./Background.css";

import Image from '../../images/FamilyPortrait.png'; // Import using relative path

const styles = {
    bg: {
        backgroundImage: `url(${Image})`
    }
};

class Background extends React.Component {

  render() {
    return (
      <div className="Background" style={styles.bg}>
      </div>
    );
  }
}
export default Background;