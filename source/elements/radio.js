import { Component, template } from '../../references/quantum.js';
import html from '../templates/radio.js';

export class Radio extends Component {
    constructor() {
        super();
    }

    static template = template(html);

    static attributes = [];
}

customElements.define('quantum-radio', Radio);