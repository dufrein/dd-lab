'use strict';
(function(){
var token = '4178197519.0137215.a33fcdf8d3674c358a434371c8ec5f01';
var count = 5;
var scr1 = document.createElement('script');
var profile = document.getElementById('profile');
window.get_profile = function(response) {
    profile.innerHTML = '<div><p><img src="' + response.data.profile_picture + '" alt="фото профиля" style="border-radius:25px"></p></div>' + '<div class="head"><div><i class="fab fa-instagram"></i><div class="h1">' + response.data.username + '</div></div>' + '<p><h2>' + response.data.counts.media + ' фото </h2></p></div>';
    console.log(response);
}
scr1.src = 'https://api.instagram.com/v1/users/self?access_token=' + token + '&callback=get_profile';
// scr1.setAttribute( 'src', 'https://api.instagram.com/v1/users/self?access_token=' + token + '&callback=get_profile' );
document.body.appendChild(scr1);
var scr2 = document.createElement('script');
var photo = document.getElementById('ull');
window.get_photo = function(response) {
    var i;
    for (i = 0; i < count; i++) {
        var text = '-';
        if (response.data[i].caption) {
            text = response.data[i].caption.text;
        }
        var tags = response.data[i].tags.join(' ');
        var date = parseInt(response.data[i].created_time, 10);
        date = tempus(date).format('%d.%m.%Y');
        photo.innerHTML += '<li><div class="head"><div class="imgi"><img src="' + response.data[i].images.low_resolution.url + '" alt="" ></div><p>' + text + '</p><p><i class="fas fa-heart"></i> ' + response.data[i].likes.count + '</p><p>Комментариев: ' + response.data[i].comments.count + '</p><p>Теги: ' + tags + '</p><p>Дата:' + date + ' </p></div></li>';
    }
    if (!!console) {
        console.log(response);
    }
}

scr2.src = 'https://api.instagram.com/v1/users/self/media/recent?access_token=' + token + '&count=' + count + '&callback=get_photo';
document.body.appendChild(scr2);

but.addEventListener("click",gogo);

function gogo() {
    count = count + 5;
    var scr2 = document.createElement('script');
    var photo = document.getElementById('ull');
    window.get_photo = function(response) {
        photo.innerHTML = '';
        var i;
        for (i in response.data) {
            var text = '-';
            if (response.data[i].caption) {
                text = response.data[i].caption.text;
            }
            var tags = response.data[i].tags.join(' ');
            var date = parseInt(response.data[i].created_time, 10);
            date = tempus(date).format('%d.%m.%Y');
            photo.innerHTML += '<li><div class="head"><div class="imgi"><img src="' + response.data[i].images.low_resolution.url + '" alt="" ></div><p>' + text + '</p><p><i class="fas fa-heart"></i> ' + response.data[i].likes.count + '</p><p>Комментариев: ' + response.data[i].comments.count + '</p><p>Теги: ' + tags + '</p><p>Дата:' + date + ' </p></div></li>';
        }

        if (!!console) {
            console.log(response);
        }
        if (count > 20) {
        	aalert.classList.add('aalert');
        	but.classList.add('but');
        }
        if (!!console) {
            console.log(count);
        }
    }
    scr2.src = 'https://api.instagram.com/v1/users/self/media/recent?access_token=' + token + '&count=' + count + '&callback=get_photo';
    document.body.appendChild(scr2);
}
})();