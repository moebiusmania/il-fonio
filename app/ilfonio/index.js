'use strict';

class IlFonio extends HTMLElement {

  constructor(){
    super();

    this.phrase = new String();
    this.collection = [
      "Favolooosoooooo",
      "I scesci!",
      "Scio' una riunione...",
      "Kasciukko",
      "A modino!",
      "Nun si può dire più niente...",
      "Stupeeendo!"
    ];
  }

  connectedCallback(){
    console.log('<il-fonio> has been attached in the document! WATCH OUT!!!');
    this.saySomething();
  }

  _render(){
    this.innerHTML = `
      <p><strong>il Fonio</strong> says <i>"${this.phrase}"</i></p>
    `;
  }

  saySomething(){
    const n = Math.floor(Math.random() * this.collection.length);
    this.phrase = this.collection[n];
    this._render();
  }

}

customElements.define('il-fonio', IlFonio);