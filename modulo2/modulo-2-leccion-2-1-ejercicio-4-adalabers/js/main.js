'use strict';
const student = document.querySelector('.title');
const gloria = document.querySelector('.title1');
const sandra = document.querySelector('.title2');
student.innerHTML = student.innerHTML + gloria.innerHTML;
student.innerHTML = student.innerHTML + ' y ' + sandra.innerHTML;
