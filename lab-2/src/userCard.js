export const readyFN = () => {
    let list = document.querySelectorAll('#users li');
    list.forEach(function(item, i, arr) {
        let rightSideP = document.getElementById("right-side-p");
        let rightSideImg = document.getElementById("right-side-img");
        let index = item.id.substr(2);
        item.addEventListener('click', function() {
            if (!!console) {
                console.log(item.id);
            }
            jQuery.getJSON("http://127.0.0.1:8080/users.json", function(data) {
                rightSideImg.style.margin = '15px';
                rightSideImg.innerHTML = '<img src="' + data[index].avatar + '">';
            });
            jQuery.getJSON("http://127.0.0.1:8080/users.json", function(data) {
                rightSideP.innerHTML = '<p>' + data[index].name + '</p>' + '<p>' + data[index].email + '</p>' + '<p>' + data[index].phone + '</p>';
            });
        });
    });
}