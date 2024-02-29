document.querySelector("#btn-copy").addEventListener("click", () => {
    document.querySelector("#result-field").select();
    document.execCommand('copy')
    // location.reload()
})