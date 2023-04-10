const htmlEscapes = {
    '&': '&amp',
    '<': '&lt',
    '>': '&gt',
    '"': '&quot',
    "'": '&#39'
}

const reUnescapedHtml = /[&<>"']/g
const reHasUnescapedHtml = RegExp(reUnescapedHtml.source)

export function escapeHtml(str) {
    return (str && reHasUnescapedHtml.test(str))
        ? str.replace(reUnescapedHtml, (chr) => htmlEscapes[chr])
        : str
}
