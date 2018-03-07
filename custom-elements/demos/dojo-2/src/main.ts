import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { w } from '@dojo/widget-core/d';
import { ProjectorMixin } from '@dojo/widget-core/mixins/Projector';
import { CopyableText } from './widgets/CopyableText/CopyableText';

class Example extends WidgetBase {
	protected render() {
		return w(CopyableText, {
			label: 'Copy Me',
			text: 'Copied'
		});
	}
}

const element = document.getElementById('widget') as Element;
const Projector = ProjectorMixin(Example);
const projector = new Projector();

projector.append(element);
