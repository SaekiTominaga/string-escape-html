import StringEscapeHtml from '../dist/StringEscapeHtml.js';

describe('正常系', () => {
	test('空文字', () => {
		expect(StringEscapeHtml.escape('')).toBe('');
	});
	test('普通の文字', () => {
		expect(StringEscapeHtml.escape('hoge')).toBe('hoge');
	});
	test('エスケープ対象文字', () => {
		expect(StringEscapeHtml.escape('<x-hoge data-piyo1="fuga&fuga" data-piyo2=\'fuga&fuga\'>')).toBe(
			'&lt;x-hoge data-piyo1=&quot;fuga&amp;fuga&quot; data-piyo2=&#39;fuga&amp;fuga&#39;&gt;'
		);
	});
	test('null', () => {
		expect(() => {
			StringEscapeHtml.escape(null);
		}).toThrow();
	});
});
