import { readyFN } from './userCard.js'
export const fillUsers = () => {
    users.innerHTML = '';
    jQuery.getJSON("http://127.0.0.1:8080/users.json", function(data) {
        for (let i in data) {
            jQuery('#users').append('<li id="li' + i + '">' + data[i].name + '</li>');
        }
        console.log(data);
    });
    setTimeout(readyFN, 500);
}

export const fillUsersFilter = (fild, subStr) => {
    users.innerHTML = '';
    jQuery.getJSON("http://127.0.0.1:8080/users.json", function(data) {

        let substrArr = subStr.split('');
        if (subStr) {
            (substrArr[0] === substrArr[0].toLowerCase()) ? substrArr[0] = substrArr[0].toUpperCase(): substrArr[0];
        }
        subStr = substrArr.join('');

        for (let i in data) {
            switch (fild) {
                case 'name':
                    if (data[i].name.indexOf(subStr) > -1) {
                        jQuery('#users').append('<li id="li' + i + '">' + data[i].name + '</li>');
                    }
                    break;
                case 'phone':
                    if (data[i].phone.indexOf(subStr) > -1) {
                        jQuery('#users').append('<li id="li' + i + '">' + data[i].phone + '</li>');
                    }
                    break;
                case 'email':
                    if (data[i].email.indexOf(subStr) > -1) {
                        jQuery('#users').append('<li id="li' + i + '">' + data[i].email + '</li>');
                    }
                    break;
            }

        }
    });
    setTimeout(readyFN, 500);
}