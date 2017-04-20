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
      "Stupeeendo!",
      "Bono bao",
      "E' grijo",
      "Un projetto"
    ];
  }

  connectedCallback(){
    console.log('<il-fonio> has been attached in the document! WATCH OUT!!!');
    this.innerHTML = `
      <p class="fonio-say">
        <strong>il Fonio</strong> says 
        <i>...</i>
      </p>
    `;
    this.content = this.querySelector('p.fonio-say i');
    this.saySomething();
  }

  _render(){
    this.content.innerHTML = `"${this.phrase}"`;
  }

  saySomething(){
    const n = Math.floor(Math.random() * this.collection.length);
    this.phrase = this.collection[n];
    this._render();
  }

}

customElements.define('il-fonio', IlFonio);
