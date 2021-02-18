let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}

const themeDots = document.querySelectorAll('.theme-dot');

for (var i=0; themeDots.length>i; i++){
    themeDots[i].addEventListener('click', function(e){
        let mode = e.currentTarget.dataset.mode
        // let mode = this.dataset.mode
        console.log('this is the',mode)
        setTheme(mode)

    })

}

function setTheme(mode){
    switch(mode) {
        case 'light':
            document.getElementById('theme-style').href = 'style.css'
            break;

	    case 'blue':
            document.getElementById('theme-style').href = 'blue.css'
            break;
        
	    case 'green':
            document.getElementById('theme-style').href = 'green.css'
            break;
        
	    case 'purple':
            document.getElementById('theme-style').href = 'purple.css'
            break;
    }
    localStorage.setItem('theme', mode)

}