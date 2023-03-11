"use strict"

// Get DOM Elements
const markAllAsReadElement = document.querySelector(".header__link")

const unreadCountElement = document.querySelector(".unread-count")

const redBubbleElement = document.querySelector(".unread-bubble")

// Listen for click

markAllAsReadElement.addEventListener("click", ()=>{
    markAllAsRead()
    resetUnreadCount()
    quitRedBubble()
})

// Mark as notifications as read
function markAllAsRead() {
    // Get all unread notifications
    const unreadNotifications = document.querySelectorAll (".notification--unread")
    unreadNotifications.forEach(notification=>notification.classList.remove("notification--unread")) 
}

// Put container to 0
function resetUnreadCount() {
    unreadCountElement.textContent = "0"
}

//Quit red bubble
function quitRedBubble(){
    const unreadBubble = document.querySelectorAll (".unread-bubble")
    unreadBubble.forEach(notification=>notification.classList.remove("unread-bubble")) 
}