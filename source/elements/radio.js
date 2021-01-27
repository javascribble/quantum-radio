import html from '../templates/radio.js';

const { Component, template, define } = quantum;

export class Radio extends Component {
    constructor() {
        super();
    }

    static template = template(html);
}

define('quantum-radio', Radio);