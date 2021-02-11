# Escapes the characters for HTML

[![npm version](https://badge.fury.io/js/%40saekitominaga%2Fstring-escape-html.svg)](https://badge.fury.io/js/%40saekitominaga%2Fstring-escape-html)

## Examples

```JavaScript
import StringEscapeHtml from '@saekitominaga/string-escape-html';

StringEscapeHtml.escape('hoge'); // hoge
StringEscapeHtml.escape('<x-hoge data-piyo1="fuga&fuga" data-piyo2=\'fuga&fuga\'>'); // &lt;x-hoge data-piyo1=&quot;fuga&amp;fuga&quot; data-piyo2=&#39;fuga&amp;fuga&#39;&gt;
```

## Methods

<dl>
<dt>static escape(input: string): string</dt>
<dd>Escapes the characters in a string using character references.</dd>
</dl>
