import React, { Component } from "react";
import "../css/Home.css";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Nav, NavItem, NavLink } from "reactstrap";

import { Link } from "react-router-dom";

import WorkeExperience from "./WorkExperience";
import FirstIMG from "./FirstIMG";
import AboutMe from "./AboutMe";
import Knowledge from "./Knowledge";

import Projects from "./Projects";
import Footer from "./Footer";
import Courses from "./Courses";

export class Home extends Component {
  static displayName = Home.name;
  constructor() {
    super();
    this.state = {
      amountState: 0,
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/Sebbbbe/repos")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          amountRepos: json.length,
        });
      });
  }

  render() {
    return (
      <div>
        <FirstIMG />
        <AboutMe />
        <Knowledge />
        <Courses/>
      
        <Projects />

        <WorkeExperience />
      

        <div>
      <hr className="footer" />

      <div className="links">
        <a
          href="https://www.linkedin.com/in/sebastian-tiger-2917571ba/"
          target="_blank"
        >
          <FaLinkedin size={35} style={{ margin: 30 }} />
        </a>

        <a
          href="https://github.com/Sebbbbe?tab=repositories"
          target="_blank"
          className="github-logo"
        >
          <FaGithub size={35} />
        </a>

        <p>Antal repos i mitt github: {this.state.amountRepos}</p>
      </div>
    </div>
      </div>
    );
  }
}
