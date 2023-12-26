// component //
export class Component {
	constructor(payload = {}) {
		const { tagName = 'div' } = payload;
		this.el = document.createElement(tagName);
	}
	redner() {
		// ...
	}
}
