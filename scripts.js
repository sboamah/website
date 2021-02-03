import React from 'react';
import './styles.css'; 

function Project(props) {
    return React.createElement("div", {
      className: "workbox"
    }, React.createElement("img", {
      src: props.img
    }), React.createElement("p", null, props.title), React.createElement("p", null, props.role));
  }
  
  var app = React.createElement("div", null, React.createElement("a", {
    href: "moonlight.html"
  }, React.createElement(Project, {
    img: "images/moonlight.png",
    title: "Moonlight Website Concept",
    role: "UI Designer"
  })), React.createElement("a", {
    href: "dailyui.html"
  }, React.createElement(Project, {
    img: "images/dailyui.png",
    title: "DailyUI Challenge",
    role: "UI Designer"
  })), React.createElement("a", {
    href: "aoty.html"
  }, React.createElement(Project, {
    img: "images/aoty.png",
    title: "Album of the Year Site",
    role: "UI Designer, Full-Stack Developer"
  })), React.createElement("a", {
    href: "positiveaffirmations.html"
  }, React.createElement(Project, {
    img: "images/posaffirm.png",
    title: "Positive Affirmation Generator",
    role: "UI Designer, Full-Stack developer, Researcher"
  })), React.createElement("a", {
    href: "blackaffairscouncil.html"
  }, React.createElement(Project, {
    img: "images/bac.png",
    title: "Black Affairs Council Website",
    role: "UI Designer, Full-Stack developer, Researcher"
  })), React.createElement("a", {
    href: "https://drive.google.com/file/d/1o64yfoMVySbPEyIuUcEcPFNdSE_01vkQ/view?usp=sharing"
  }, React.createElement(Project, {
    img: "images/weathersystem.png",
    title: "Weather System",
    role: "Programmer, Reporter"
  })), React.createElement("a", {
    href: "music.html"
  }, React.createElement(Project, {
    img: "images/talkingstage.png",
    title: "Music",
    role: "Singer, Songwriter, Producer"
  })), React.createElement("a", {
    href: "art.html"
  }, React.createElement(Project, {
    img: "images/naturegirl.png",
    title: "Art",
    role: "Graphic Design"
  })), React.createElement("a", {
    href: "poetry.html"
  }, React.createElement(Project, {
    img: "images/theartofchoice.png",
    title: "Poetry",
    role: "Writer"
  })));
  ReactDOM.render(app, document.querySelector('#app'));