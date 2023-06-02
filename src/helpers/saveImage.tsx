import html2canvas from 'html2canvas'

const downloadImage = (
    blob: HTMLCanvasElement,
    fileName: string,
    link: string
) => {
    const fakeLink: HTMLAnchorElement = window.document.createElement('a')
    fakeLink.style.display = 'none;'
    fakeLink.download = fileName

    fakeLink.href = link

    document.body.appendChild(fakeLink)
    fakeLink.click()
    document.body.removeChild(fakeLink)

    fakeLink.remove()
}

const exportAsImage = async (
    el: HTMLDivElement,
    imageFileName: string
): Promise<void> => {
    const canvas = await html2canvas(el)
    const link = canvas.toDataURL('image/png', 1.0)
    downloadImage(canvas, imageFileName, link)
}

export default exportAsImage
