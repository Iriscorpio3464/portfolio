import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <Card shadow={5} style={{ minwidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background:
                "url(https://every-rating.com/img/dammy_html-css-js01.jpg) bottom right 15% no-repeat #46B6AC"
            }}
          >
            HTML/CSS Project #1
          </CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan
            convallis.
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>Github</Button>
            <Button colored>Github</Button>
          </CardActions>
        </Card>
      );
    } else if (this.state.activeTab === 0) {
      return (
        <div>
          <h1>This is HTML/CSS</h1>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>This is Bootstrap</h1>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>This is React</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="demo-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>HTML/CSS</Tab>
          <Tab>Bootstrap</Tab>
          <Tab>React</Tab>
        </Tabs>
        <section>
          <Grid className="projects-grid">
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}

export default Projects;
