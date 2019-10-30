import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://i.pinimg.com/originals/b9/89/cb/b989cbeb375a21714d44d17ade934098.png"
              alt="avatar"
              className="avatar-image"
            />
            <div className="banner-text">
              <h1>Engineer/Aspiring localizer</h1>

              <hr />
              <p>HTML/CSS | Bootstrap | Javascript | React</p>
              <div className="social-links">
                {/* Facebook */}
                <a
                  href="http://facebook.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-facebook-square" aria-hidden="true" />
                </a>
                {/* ERAS */}
                <div className="company-link">
                  <a
                    href="https://eras.jp"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="company-logo"
                  >
                    <img
                      src="https://eras.jp/dist/images/eras_eye-catch.png"
                      alt="ERAS"
                      width="40%"
                    />
                  </a>
                </div>
                {/* Github */}
                <a
                  href="https://github.com/Iriscorpio3464"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Landing;
