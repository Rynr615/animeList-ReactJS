
export function scrollFunction() {
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById('navbar').style.padding = "32px 32px";
        document.getElementById('navbar').style.boxShadow = "1px 2px 4px rgba(0, 0, 0, 0.1)";
    } else {
        document.getElementById('navbar').style.padding = "48px 48px";
        document.getElementById('navbar').style.boxShadow = "none";
    }
}




