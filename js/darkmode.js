export function switchingDarkMode() {
    const globalBody = document.querySelector('[data-js="body"]')
    const mainGlobal = document.querySelector('[data-js="main-global"]')

    const darkmodeSection = document.querySelector('[data-js="darkmode-section"]')
    const darkModeButton = document.querySelector('[data-js="darkmode-button"]')
    const onOrOffText = document.createElement("p")
    darkmodeSection.append(onOrOffText)


    darkModeButton.addEventListener("click", () => {
        console.log("clicked darkmode button")
        globalBody.classList.toggle("dark")
        if (globalBody.classList.contains("dark")) {
            onOrOffText.textContent = "Dark Mode"
        } else {
            onOrOffText.textContent = "Light Mode"
        }

        mainGlobal.classList.toggle("dark")
        if (mainGlobal.classList.contains("dark")) {
            onOrOffText.textContent = "Dark Mode"
        } else { onOrOffText.textContent = "Light Mode" }
    })
}
switchingDarkMode();