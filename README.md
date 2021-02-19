# Escapes the characters for HTML

[![npm version](https://badge.fury.io/js/%40saekitominaga%2Fstring-escape-html.svg)](https://badge.fury.io/js/%40saekitominaga%2Fstring-escape-html)

## Examples

```JavaScript
import StringEscapeHtml from '@saekitominaga/string-escape-html';

StringEscapeHtml.escape('hoge'); // hoge
StringEscapeHtml.escape('<x-hoge data-piyo1="fuga&fuga" data-piyo2=\'fuga&fuga\'>'); // &lt;x-hoge data-piyo1=&quot;fuga&amp;fuga&quot; data-piyo2=&#39;fuga&amp;fuga&#39;&gt;
```

## Browser compatibility

This program using `String.prototype.replaceAll()`.

- Chrome 85+
- Edge 85+
- Firefox 77+
- Safari 13.1+
- Node.js 15+

@see [MDN ― Browser compatibility](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll#browser_compatibility), [Can I use...](https://caniuse.com/mdn-javascript_builtins_string_replaceall)

## Methods

<dl>
<dt>static escape(input: string): string</dt>
<dd>Escapes the characters in a string using character references.</dd>
</dl>
