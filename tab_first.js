
let new_page = true;
document.addEventListener('keydown', (event) => {
    if(event.key == "Tab" && new_page){
        let focusabeElements = document.body.querySelectorAll(
            'a[href]:not([disabled])'
            );
        focusabeElements[26]?.focus();
        event.preventDefault();
        new_page = false;
    }
}, false)