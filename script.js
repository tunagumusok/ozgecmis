document.addEventListener('DOMContentLoaded', function() {
    // En üste dön butonu
    const topButton = document.createElement('button');
    topButton.textContent = 'En Üste Dön';
    
    // CSS stillerini ayarlama
    topButton.style.position = 'fixed';
    topButton.style.bottom = '20px';
    topButton.style.left = '50%';
    topButton.style.transform = 'translateX(-50%)';
    topButton.style.fontSize = '18px';
    topButton.style.padding = '10px 20px';
    topButton.style.backgroundColor = '#2c3e50'; // Arka plan rengi
    topButton.style.color = '#ecf0f1'; // Yazı rengi
    topButton.style.border = 'none';
    topButton.style.borderRadius = '5px';
    topButton.style.cursor = 'pointer';

    document.body.appendChild(topButton);
    topButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Yumuşak geçiş
        });
    });
});
