"use strict";
import './style.css';
import $ from 'jquery';
import { fillUsers } from './usersFill.js';
import { fillUsersFilter } from './usersFill.js';

(function() {

    $(document).ready(load());
    let rightSideP = document.getElementById("right-side-p");
    let rightSideImg = document.getElementById("right-side-img");
    let filds = { name: '', phone: '', email: '' };

    function load() {

        fillUsers();
        search.addEventListener('input', function() {
            let subStr = search.value;
            let pos = subStr.indexOf(':');
            let fild = subStr.substr(0, pos);
            let fildValue;
            if (subStr == "") {
                fillUsers();
                rightSideP.innerHTML = '<p>Пользователь не выбран</p>';
                rightSideImg.innerHTML = '';
            } else if (pos && fild && (fild in filds) && subStr.startsWith(fild)) {
                fildValue = subStr.substr(pos + 1);
                fillUsersFilter(fild, fildValue);
            } else {
                fillUsersFilter(fild = 'name', subStr);
            }
        });

    }






})();