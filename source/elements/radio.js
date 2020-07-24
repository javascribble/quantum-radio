import html from '../templates/radio.js';

export class Radio extends quantum.Component {
    constructor() {
        super();
    }

    static template = quantum.template(html);
}

quantum.define('quantum-radio', Radio);