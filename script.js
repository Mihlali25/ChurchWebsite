
(function() {
    emailjs.init("FZJvJrmyJ6PvJUtRHnbyH"); 
})();


function initMap() {

    const churchLocation = { lat: -33.8308, lng: 18.6284 };
    

    const map = new google.maps.Map(document.getElementById("churchMap"), {
        zoom: 15,
        center: churchLocation,
    });
    

    new google.maps.Marker({
        position: churchLocation,
        map: map,
        title: "Holiness Union Church Cape Town",
    });
}



document.getElementById('prayerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const form = e.target;
    const messageDiv = document.getElementById('formMessage');
    

    const formData = {
        name: form.name.value || 'Anonymous',
        email: form.email.value || 'Not provided',
        request: form.request.value,
        anonymous: form.anonymous.checked ? 'Yes' : 'No',
        date: new Date().toLocaleString()
    };
    

    emailjs.send("service_9bc6dz5", "template_hxu53ym", formData)
        .then(function(response) {
            messageDiv.textContent = "Thank you! Your prayer request has been submitted.";
            messageDiv.className = "form-message success";
            form.reset();
        }, function(error) {
            messageDiv.textContent = "Sorry, there was an error. Please try again later.";
            messageDiv.className = "form-message error";
        });
});


document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.getElementById("currentYear").textContent = new Date().getFullYear();


function updateCountdown() {
    const eventDate = new Date("October 15, 2023 09:00:00").getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    
    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m`;
}

setInterval(updateCountdown, 60000);
updateCountdown();