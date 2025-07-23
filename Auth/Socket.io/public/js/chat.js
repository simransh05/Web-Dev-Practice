const btn = document.querySelector('#btn');
const btn1 = document.querySelector('#btn1');
const chatbox = document.querySelector('#chatbox');
const username = document.querySelector('#username')
const msgList = document.querySelector('.msgList');
const chattingApp = document.querySelector('.chattingApp');
const userDetails = document.querySelector('.userDetails');
const activePeopleList = document.querySelector('.activePeopleList');
const socket = io();

socket.on('welcome', (msg) => {
    console.log(msg.msg);
})

socket.emit('thankYou', 'thank you for using app', (res) => {
    console.log(res.status);
})

socket.on('msg', (msg) => {
    let text = msg.text.msg;
    let senderName = msg.senderName;
    let li = document.createElement('li');
    li.innerHTML = `
        <span class="chatItem">
            <span class="senderName">${senderName}</span>
            <span class="textDetails">${text}</span>
        </span>
    `;
    msgList.appendChild(li);
})
btn.addEventListener('click', (e) => {
    socket.emit('chat', {
        msg: chatbox.value
    }, (res) => {
        console.log(res.status)
    })
    chatbox.value = '';
})

chattingApp.classList.add('hide');


function updateActiveUsers(activeUser){
    activePeopleList.innerHTML ='';
    activeUser.forEach(element => {
        let item = document.createElement('div');
        item.innerText=element;
        activePeopleList.appendChild(item);
    });
}
socket.on('disconnectUser', ({ username,activeUser }) => {
    console.log(`${username} left the Chat and active users are ${activeUser}`);
    updateActiveUsers(activeUser);
})

socket.on('joinedChat',({username,activeUser})=>{
    console.log(`${username} joined the Chat and active users are ${activeUser}`)
    updateActiveUsers(activeUser);
})
btn1.addEventListener('click', (e) => {
    console.log(username.value, socket.id);
    socket.emit('saveUser', {
        username: username.value
    })
    chattingApp.classList.remove('hide');
    userDetails.classList.add('hide');
    msgList.classList.remove('hide');
})