// Utiliza SVG en vez de un enfoque con canvas o similares por rendimiento
export const generateLogo = (
  text: string,
  bgColor?: string,
  textColor: string = '#ffffff',
  size: number = 128
): string => {
  // Generar color consistente
  if (!bgColor) {
    bgColor = getConsistentColor(text)
  }

  // Crear un SVG con el texto inicial
  const fontSize = size / 2

  const svgContent = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
      <rect width="100%" height="100%" fill="${bgColor}" />
      <text x="50%" y="50%" fill="${textColor}" font-size="${fontSize}" 
            font-family="Arial, sans-serif" text-anchor="middle" dominant-baseline="middle">
        ${text.charAt(0).toUpperCase()}
      </text>
    </svg>
  `

  // Convertir el SVG a un data URL y devolverlo
  return `data:image/svg+xml;base64,${btoa(
    decodeURIComponent(encodeURIComponent(svgContent))
  )}`
}

// Generar un hash numérico a partir de una cadena
const hashStringToNumber = (text: string): number => {
  let hash = 0
  for (let i = 0; i < text.length; i++) {
    hash = text.charCodeAt(i) + ((hash << 5) - hash)
  }
  return Math.abs(hash)
}

// Convertir el hash en un color HSL consistente
const getConsistentColor = (text: string): string => {
  const hash = hashStringToNumber(text)
  const hue = hash % 360 // Tono entre 0 y 360
  const saturation = 70 // Saturación fija para colores vivos
  const lightness = 50 // Luminosidad fija para buen contraste
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`
}
