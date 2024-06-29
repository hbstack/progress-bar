import Progress from "./progress";

(() => {
    const progress = new Progress()

    window.addEventListener('pagehide', () => {
        progress.hide()
    })

    window.addEventListener('beforeunload', () => {
        progress.show()
    })
})()
