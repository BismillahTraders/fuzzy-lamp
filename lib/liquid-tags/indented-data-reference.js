import assert from 'assert'

// This class supports a tag that expects two parameters, a data reference and `spaces=NUMBER`:
//
// {% indented_data_reference foo.bar spaces=NUMBER %}
// Example: {% indented_data_reference reusables.pages.wildcard-dns-warning spaces=3 %}
//
// This tag renders the given data reference with the specified number of spaces
// prepended to each line. This results in correct formatting when the data
// reference is used inside a block element (like a list or nested list) without
// affecting the formatting when the reference is used elsewhere via {{ site.data.foo.bar }}.

export default {
  parse(tagToken) {
    this.markup = tagToken.args.trim()
  },

  async render(scope) {
    // obfuscate first legit space, remove all other spaces, then restore legit space
    // this way we can support spaces=NUMBER as well as spaces = NUMBER
    const input = this.markup
      .replace(/\s/, 'REALSPACE')
      .replace(/\s/g, '')
      .replace('REALSPACE', ' ')

    const [dataReference, spaces] = input.split(' ')

    // if no spaces are specified, default to 2
    const numSpaces = spaces ? spaces.replace(/spaces=/, '') : '2'

    assert(parseInt(numSpaces) || numSpaces === '0', '"spaces=NUMBER" must include a number')

    // Get the referenced value from the context
    const value = await this.liquid.evalValue(`site.data.${dataReference}`, scope)

    // If nothing is found in the context, exit with nothing; this may
    // feel weird and that we should throw an error, but this is "The Liquid Way TM"
    if (!value) return

    // add spaces to each line
    const renderedReferenceWithIndent = value.replace(/^/gm, ' '.repeat(numSpaces))

    return this.liquid.parseAndRender(renderedReferenceWithIndent, scope.environments)
  },
}
