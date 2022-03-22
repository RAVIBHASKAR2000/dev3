import React from 'react';
import { Global, css } from '@emotion/core';

export default function StylesBase() {
  return (
    <Global
      styles={css`
        ${normalize};
        $@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap');
        body {
          max-width: 100%;
          overflow-x: hidden;
          font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, Helvetica, sans-serif;
          line-height: 1.5;

          text-decoration-skip: ink;
          text-rendering: optimizeLegibility;
          -ms-overflow-style: -ms-autohiding-scrollbar;
          -moz-font-feature-settings: 'liga on';
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
        }
      `}
    />
  );
}

const normalize = css`
  /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }
  body {
    margin: 0;
  }
  main {
    display: block;
  }
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }
  pre {
    font-family: monospace, monospace;
    font-size: 1em;
  }
  a {
    background-color: transparent;
  }
  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }
  b,
  strong {
    font-weight: bolder;
  }
  code,
  kbd,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }
  small {
    font-size: 80%;
  }
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  img {
    border-style: none;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }
  button,
  input {
    overflow: visible;
  }
  button,
  select {
    text-transform: none;
  }
  [type='button'],
  [type='reset'],
  [type='submit'],
  button {
    -webkit-appearance: button;
  }
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner,
  button::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring,
  button:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }
  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }
  progress {
    vertical-align: baseline;
  }
  textarea {
    overflow: auto;
  }
  [type='checkbox'],
  [type='radio'] {
    box-sizing: border-box;
    padding: 0;
  }
  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }
  [type='search'] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }
  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }
  details {
    display: block;
  }
  summary {
    display: list-item;
  }
  template {
    display: none;
  }
  [hidden] {
    display: none;
  }
  .social-button {
    position: fixed;
    right: 5%;
    bottom: 5%;
    z-index: 1;
    width: 70px;
    height: 70px;
    font-size: 2em;
    color: #fff;
    background: #686868;
    border: none;
    border-radius: 7%;
    outline: none;
}
.social-button-toggle {
    z-index: 3;
    width: 77px;
    height: 75px;
    margin: 0 auto;
    border: 1px solid #686868;
}
.social-button-toggle span {
    -webkit-transform: none;
    transform: none;
    -webkit-transition: -webkit-transform .175s cubic-bazier(.175,.67,.83,.67);
    transition: transform .175s cubic-bazier(.175,.67,.83,.67);
    font-size: 25px;
    padding: 10px;
}
.social-button-toggle.open {
    border-radius: 0% 0% 7% 7%;
    border-top: 1px solid #fff;
}
.social-button-toggle.open span {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-transition: -webkit-transform .175s cubic-bazier(.175,.67,.83,.67);
    transition: transform .175s cubic-bazier(.175,.67,.83,.67);
}
#options {
  height: 70px;
}
.option {
    position: relative;
}
.option .option1,.option .option2,.option .option3,.option .option4{
    filter: blur(5px);
    -webkit-filter: blur(5px);
    -webkit-transition: all .175s;
    transition: all .175s;
}
.option .option1 {
    -webkit-transform: translate3d(-6px,-5px,0) scale(.8,.8);
    transform:         translate3d(-6px,-5px,0) scale(.8,.8);
}
.option .option2 {
    -webkit-transform: translate3d(-3px,-3px,0) scale(.8,.8);
    transform:         translate3d(-3px,-3px,0) scale(.8,.8);
}
.option .option3 {
    -webkit-transform: translate3d(-7px,0px,0) scale(.8,.8);
    transform:         translate3d(-7px,0px,0) scale(.8,.8);
}
.option .option4 {
    -webkit-transform: translate3d(-9px,0px,0) scale(.8,.8);
    transform:         translate3d(-9px,0px,0) scale(.8,.8);
}
.option.scale-on .option1, .option.scale-on .option2,.option.scale-on .option3,.option.scale-on .option4{
    filter: blur(0);
    -webkit-filter: blur(0);
    -webkit-transform: none;
    transform: none;
    -webkit-transition: all 0.350s;
    transition: all 0.350s;
    border:none;
    color: #fff;
    -webkit-transition: all 0.350s;
    transition:         all 0.350s;
    -webkit-transition: all 0.350s;
    transition:         all 0.350s;
    -webkit-transition: all 0.350s;
    transition:         all 0.350s;
    -webkit-transition: all 0.350s;
    transition:         all 0.350s;
    border-radius: 0px;
}
.option.scale-on .option1:hover, .option.scale-on .option2:hover,.option.scale-on .option3:hover,.option.scale-on .option4:hover{
    background-color: #686868;
}
.option.scale-on .option1 {
    -webkit-transform: translateX(-3.5px) translateY(-156px) scale(1.1,1.1);
    transform:         translateX(-3.5px) translateY(-156px) scale(1.1,1.1);
    background: #3b5998;
}
.option.scale-on .option2 {
    -webkit-transform: translateX(-3.5px) translateY(-79px) scale(1.1,1.1);
    transform:         translateX(-3.5px) translateY(-79px) scale(1.1,1.1);
    background: #00bdf5;
}
.option.scale-on .option3 {
    -webkit-transform: translateX(-3.5px) translateY(-233px) scale(1.1,1.1);
    transform:         translateX(-3.5px) translateY(-233px) scale(1.1,1.1);
    background: #a72db2;
}
.option.scale-on .option4 {
    -webkit-transform: translateX(-3.5px) translateY(-310px) scale(1.1,1.1);
    transform:         translateX(-3.5px) translateY(-310px) scale(1.1,1.1);
    border-radius: 7% 7% 0% 0%;
    background: #109d58;
}
`;
