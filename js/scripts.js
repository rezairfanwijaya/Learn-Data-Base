if (localStorage.getItem('theme') == 'dark') {

    darkmode(true)
} else {
    darkmode(false)
}



function darkmode(isdark) {
    if (isdark) {
        document.body.setAttribute('id', 'dark')
        localStorage.setItem('theme', 'dark')
    } else {
        document.body.setAttribute('id', ' ')
        localStorage.removeItem('theme')
    }
}