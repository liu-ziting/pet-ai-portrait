/**
 * Copy text to clipboard with fallback methods
 */
export async function copyToClipboard(text: string): Promise<void> {
  // Try modern clipboard API first
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text)
      return
    } catch (error) {
      console.warn('Clipboard API failed, falling back to legacy method:', error)
    }
  }

  // Fallback to legacy method
  return copyToClipboardLegacy(text)
}

/**
 * Legacy clipboard copy method using document.execCommand
 */
function copyToClipboardLegacy(text: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const textArea = document.createElement('textarea')
    textArea.value = text
    textArea.style.position = 'fixed'
    textArea.style.left = '-999999px'
    textArea.style.top = '-999999px'
    
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()
    
    try {
      const successful = document.execCommand('copy')
      if (successful) {
        resolve()
      } else {
        reject(new Error('Copy command failed'))
      }
    } catch (error) {
      reject(error)
    } finally {
      document.body.removeChild(textArea)
    }
  })
}