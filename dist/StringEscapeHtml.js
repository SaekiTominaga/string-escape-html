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
    static escape(input) {
        let escaped = input;
        for (const [key, value] of new Map([
            ['&', '&amp;'],
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
//# sourceMappingURL=StringEscapeHtml.js.map