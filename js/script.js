
 let ToggleTheme = document.getElementById('ToggleTheme')



 ToggleTheme.onclick = () => {
    if(document.documentElement.hasAttribute('theme')) {
        document.documentElement.removeAttribute('theme')
        ToggleTheme.value = "Темна тема"
    }
    else {
        document.documentElement.setAttribute('theme', 'dark')
        ToggleTheme.value = "Світла тема"
    }
 }