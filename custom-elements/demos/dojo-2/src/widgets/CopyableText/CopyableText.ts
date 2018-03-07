import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { v } from '@dojo/widget-core/d';
import { customElement } from '@dojo/widget-core/decorators/customElement';

import * as css from './CopyableText.m.css';

export interface CopyableTextProperties {
	label?: string;
	text?: string;
	onCopy?: () => void;
}

@customElement<CopyableTextProperties>({
	tag: 'dojo-2-copyable-text',
	events: ['onCopy'],
	attributes: ['label', 'text']
})
export class CopyableText extends WidgetBase<CopyableTextProperties> {

	private _onClick() {
		const copyTarget = document.createElement('input');
		copyTarget.value = this.properties.text || '';
		document.body.appendChild(copyTarget);

		try {
			copyTarget.select();
			document.execCommand('copy');
		} finally {
			document.body.removeChild(copyTarget);
		}

		this.properties.onCopy && this.properties.onCopy();
	}

	protected render() {
		const { label, text } = this.properties;

		return v('div', { classes: css.root }, [
			v('input', {
				classes: css.input,
				value: text
			}),
			v('button', {
				classes: css.button,
				onclick: this._onClick
			}, [label])
		]);
	}
}

export default CopyableText;
