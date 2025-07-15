document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("form")
    const colorInput = document.getElementById("color")
    const modeSelect = document.getElementById("mode")

    form.addEventListener('submit', handleFormSubmit)

    async function handleFormSubmit(e) {
        e.preventDefault()
        
        const hexColor = colorInput.value.replace('#', '')
        const mode = modeSelect.value
        
        try {
            const response = await fetch(`https://www.thecolorapi.com/scheme?hex=${hexColor}&mode=${mode}&count=5`)
            const data = await response.json()
            displayColorScheme(data)
        } catch (error) {
            console.error('Error fetching color scheme:', error)
        }
    }

    function displayColorScheme(data) {
        const main = getOrCreateMain()
        main.innerHTML = ''
        
        const container = createElement('div', 'color-scheme-container')
        
        data.colors.forEach(color => {
            const colorCard = createColorCard(color)
            container.appendChild(colorCard)
        })
        
        main.appendChild(container)
    }

    function createColorCard(color) {
        const colorCard = createElement('div', 'color-card')
        colorCard.style.backgroundColor = color.hex.value
        
        const colorInfo = createElement('div', 'color-info')
        colorInfo.innerHTML = `<p class="hex-value">${color.hex.value}</p>`
        
        // Add click to copy functionality
        colorCard.addEventListener('click', () => {
            navigator.clipboard.writeText(color.hex.value).then(() => {
                showCopyFeedback(colorCard, color.hex.value)
            }).catch(err => {
                console.error('Failed to copy:', err)
            })
        })
        
        colorCard.appendChild(colorInfo)
        return colorCard
    }

    function showCopyFeedback(element, hexValue) {
        const feedback = createElement('div', 'copy-feedback')
        feedback.textContent = `Copied ${hexValue}!`
        element.appendChild(feedback)
        
        setTimeout(() => {
            feedback.remove()
        }, 2000)
    }

    function createElement(tag, className) {
        const element = document.createElement(tag)
        element.className = className
        return element
    }

    function getOrCreateMain() {
        let main = document.querySelector('main')
        if (!main) {
            main = document.createElement('main')
            document.body.appendChild(main)
        }
        return main
    }
})
