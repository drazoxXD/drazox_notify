// ez nem tudom hogy működik 
//Annyit tudok hogy sikerült
$(document).ready(function() {
    const notificationQueue = [];
    window.addEventListener('message', function(event) {
        var data = event.data;

        if (data.type === 'notification') {
            const message = data.message;
            const iconClass = data.iconClass || 'fa-bell';
            const bgColor = data.bgColor || '#007BFF';
            const notificationDuration = data.time || 5000;
            const notificationContainer = document.getElementById('notification-container');
            const notification = document.createElement('div');
            notification.className = 'notification';
            let darkerColor = darkenColor(bgColor, 0.5);
            notification.style.backgroundColor = data.bgColor || '#007BFF';
            notification.style.border = `2px solid ${darkerColor}`;           

            const icon = document.createElement('i');
            icon.className = iconClass;

            const messageText = document.createElement('span');
            messageText.innerText = message;

            notification.appendChild(icon);
            notification.appendChild(messageText);
            messageText.style.position = 'relative';
            messageText.style.verticalAlign = 'middle';
            messageText.style.textShadow = '0 0 4px #000';
            icon.style.position = 'relative';
            icon.style.color = '#ffffff';
            icon.style.fontSize = '1.2em';
            icon.style.width = 'calc(auto + 0.5vh)';
            icon.style.textShadow = '0 0 4px #000';
            icon.style.lineHeight = '1em';
            icon.style.verticalAlign = 'middle';

            notificationQueue.push(notification);
            notificationContainer.appendChild(notification);

            //Ez le viszi a többi notify-t
            for (let i = 0; i < notificationQueue.length; i++) {
                notificationQueue[i].style.transform = `translateY(${i * 40}px)`;
            }

            setTimeout(() => {
                //Ez az ami mutatni fogja a notify-t
                notification.classList.add('show');
            }, 100);

            setTimeout(() => {
                //notify animáció
                notification.classList.add('slide-out-left');
            
                setTimeout(() => {
                    // Törlés elkezdése
                    notification.classList.remove('show');
                    setTimeout(() => {
                        notificationQueue.shift();
                        //notify törlése
                        notificationContainer.removeChild(notification);
                        // ez fel tolja az összeset 40 pixellel
                        for (let j = 0; j < notificationQueue.length; j++) {
                            //anim és csúsztatjuk fel a többit
                            notification.classList.remove('slide-out-left');
                            notificationQueue[j].style.transform = `translateY(${j * 40}px)`;
                        }
                    }, 300);
                }, 300);
            }, notificationDuration);
            
        }
    });
});


function darkenColor(color, percent) {
    function hexToRgb(hex) {
        let bigint = parseInt(hex.slice(1), 16);
        let r = (bigint >> 16) & 255;
        let g = (bigint >> 8) & 255;
        let b = bigint & 255;
        return [r, g, b];
    }

    function rgbToHex(r, g, b) {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    let rgb;
    if (color.startsWith("#")) {
        rgb = hexToRgb(color);
    } else if (color.startsWith("rgb")) {
        rgb = color.match(/\d+/g).map(Number);
    } else {
        throw new Error("Unsupported color format");
    }

    let [r, g, b] = rgb;

    r = Math.max(0, r - Math.floor(r * percent));
    g = Math.max(0, g - Math.floor(g * percent));
    b = Math.max(0, b - Math.floor(b * percent));

    if (color.startsWith("#")) {
        return rgbToHex(r, g, b);
    } else {
        return `rgb(${r}, ${g}, ${b})`;
    }
}
