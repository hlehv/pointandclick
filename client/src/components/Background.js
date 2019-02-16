import React from "react";
import "./Background.css";

import Image from '../../images/testbg.jpg'; // Import using relative path

const styles = {
    bg: {
        backgroundImage: `url(${Image})`
    }
};

class Background extends React.Component {

  render() {
    return (
      <div class="Background" style={styles.bg}>
      </div>
    );
  }
}
export default Background;