import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

function Project(props) {
    return (
    <div className="workbox">
       <img src={props.img}></img> 
      <p>{props.title}</p>
      <p>{props.role}</p>
     
  </div>
    );
  }
  var app = (
    <div>
      <a href="moonlight.html"><Project img="images/moonlight.png" title="Moonlight Website Concept" role="UI Designer"/></a>
      <a href="dailyui.html"><Project img="images/dailyui.png" title="DailyUI Challenge" role="UI Designer"/></a>
      <a href="aoty.html"><Project img="images/aoty.png" title="Album of the Year Site" role="UI Designer, Full-Stack Developer"/></a>
      <a href="positiveaffirmations.html"><Project img="images/posaffirm.png" title="Positive Affirmation Generator" role="UI Designer, Full-Stack developer, Researcher"/></a>
      <a href="blackaffairscouncil.html"><Project img="images/bac.png" title="Black Affairs Council Website" role="UI Designer, Full-Stack developer, Researcher"/></a>
      <a href="https://drive.google.com/file/d/1o64yfoMVySbPEyIuUcEcPFNdSE_01vkQ/view?usp=sharing"><Project img="images/weathersystem.png" title="Weather System" role="Programmer, Reporter"/></a>
      <a href="music.html"><Project img="images/talkingstage.png" title="Music" role="Singer, Songwriter, Producer"/></a>
      <a href="art.html"><Project img="images/naturegirl.png" title="Art" role="Graphic Design"/></a>
      <a href="poetry.html"><Project img="images/theartofchoice.png" title="Poetry" role="Writer"/></a>
    </div>
  );
  ReactDOM.render(app, document.querySelector('#app'));
