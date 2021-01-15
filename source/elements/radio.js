import html from '../templates/radio.js';

export class Radio extends Component {
    constructor() {
        super();
    }

    static template = template(html);
}

define('quantum-radio', Radio);