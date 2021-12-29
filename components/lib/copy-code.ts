export default function copyCode() {
  const buttons = Array.from(document.querySelectorAll('button.js-btn-copy'))

  if (!buttons) return

  buttons.forEach((button) =>
    button.addEventListener('click', async () => {
      const text = (button as HTMLElement).dataset.clipboardText
      if (!text) return
      await navigator.clipboard.writeText(text)

      const beforeTooltip = button.getAttribute('aria-label') || ''
      button.setAttribute('aria-label', 'Copied!')

      setTimeout(() => {
        button.setAttribute('aria-label', beforeTooltip)
      }, 2000)
    })
  )
}
