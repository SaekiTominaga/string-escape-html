/**
 * Escapes the characters for HTML
 */
export default class {
	/**
	 * Escapes the characters in a string using character references.
	 *
	 * @param {string} input - String to be escaped
	 *
	 * @returns {string} Escaped string
	 */
	static escape(input: string): string {
		let escaped = input;
		for (const [key, value] of new Map<string, string>([
			['&', '&amp;'], // & の変換は最初に行う必要がある
			['<', '&lt;'],
			['>', '&gt;'],
			['"', '&quot;'],
			["'", '&#39;'],
		])) {
			escaped = escaped.replaceAll(key, value);
		}
		return escaped;
	}
}
