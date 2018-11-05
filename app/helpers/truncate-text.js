import { helper } from '@ember/component/helper';

export function truncateText(params) {
	let [text, length] = params;
	text = text.substring(0, length);
	text += "...";

  	return text;
}

export default helper(truncateText);
