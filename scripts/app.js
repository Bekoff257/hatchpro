'use strict';

const nameId = document.querySelector('#name')
const phone = document.querySelector('#phone')
const formSubmit = document.querySelector('#form')
const selectId = document.querySelector('#select')
const sendId = document.querySelector('#send')
const menuId = document.querySelector('#menu')
const menuList = document.querySelector('.nav-list')
const closeId = document.querySelector('#close')
const sectionLinks = document.querySelectorAll('.nav-list a')

const BOT_TOKEN = '6783679917:AAEVZfndNZJKf1r4hh5GjMcDA6bfwfWBhqk';

formSubmit.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = nameId.value;
    const phoneValue = phone.value;

    const botUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`
    const data = {
        chat_id: -1002014150670,
        text: `Имя: ${name}\nТелефон: ${phoneValue}\nРазмерь: ${selectId.value}`,
    }

    fetch(botUrl, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(
        response => {
            response.json()
            nameId.value = ''
            phone.value = ''
            sendId.classList.add('act')

            setTimeout(() => {
                sendId.classList.add('none')
            }, 2000)
        }
    ).then(data => {
        console.log(data)
    }).catch((err) => console.log(err))
})

menuId.addEventListener('click', () => {
    menuList.classList.add('active')
})

closeId.addEventListener('click', () => {
    menuList.classList.remove('active')
})

sectionLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuList.classList.remove('active')
    })
})
