document.addEventListener('DOMContentLoaded', function(){
    const moreBtn = document.getElementById("more");
    const leftSide = document.getElementById("left");
    const rightSide = document.getElementById("right");

    const homeBtn = document.getElementById("home");
    const homePage = document.getElementById("homeDiv");

    const shopBtn = document.getElementById("shop");
    const shopPage = document.getElementById("shopDiv");

    const lctBtn = document.getElementById("location");
    const lctPage = document.getElementById("lctDiv");

    const aboutUsBtn = document.getElementById("aboutUs");
    const aboutUsPage = document.getElementById("aboutUsDiv");

    const notifBtn = document.getElementById("notification")
    const notifPage = document.getElementById("notifDiv");

    const contactBtn = document.getElementById("contacts");
    const contactPage = document.getElementById("contactDiv");

    const feedbackBtn = document.getElementById("feedback");
    const feedbackPage = document.getElementById("feedbackDiv");

    const donationBtn = document.getElementById("donation");
    const donationPage = document.getElementById("donationDiv");

    const partnershipBtn = document.getElementById("partnership");
    const partnershipPage = document.getElementById("partnershipDiv");

    const visionBtn = document.getElementById("vision");
    const visionPage = document.getElementById("visionDiv");
    
    const notifDivOne = document.getElementById("notifDivOne");
    
    notifDivOne.onclick = function(){
        alert("There is no notification here, please check again when there is one")
    }

    moreBtn.onclick = function() {
        if (leftSide.style.display === "none") {
            leftSide.style.display = "block";
            rightSide.style.width = "85%";
        } else {
            leftSide.style.display = "none";
            rightSide.style.width = "100%";
        }
    }
    homeBtn.onclick = function() {
        homePage.style.display = "block";
        shopPage.style.display = "none";
        lctPage.style.display = "none";
        aboutUsPage.style.display = "none";
        notifPage.style.display = "none";
        contactPage.style.display = "none";
        feedbackPage.style.display = "none";
        donationPage.style.display = "none";
        partnershipPage.style.display = "none";
        visionPage.style.display = "none";
    }
    shopBtn.onclick = function() {
        homePage.style.display = "none";
        shopPage.style.display = "block";
        lctPage.style.display = "none";
        aboutUsPage.style.display = "none";
        notifPage.style.display = "none";
        contactPage.style.display = "none";
        feedbackPage.style.display = "none";
        donationPage.style.display = "none";
        partnershipPage.style.display = "none";
        visionPage.style.display = "none";
    }
    lctBtn.onclick = function() {
        homePage.style.display = "none";
        shopPage.style.display = "none";
        lctPage.style.display = "block";
        aboutUsPage.style.display = "none";
        notifPage.style.display = "none";
        contactPage.style.display = "none";
        feedbackPage.style.display = "none";
        donationPage.style.display = "none";
        partnershipPage.style.display = "none";
        visionPage.style.display = "none";
    }
    aboutUsBtn.onclick = function() {
        homePage.style.display = "none";
        shopPage.style.display = "none";
        lctPage.style.display = "none";
        aboutUsPage.style.display = "block";
        notifPage.style.display = "none";
        contactPage.style.display = "none";
        feedbackPage.style.display = "none";
        donationPage.style.display = "none";
        partnershipPage.style.display = "none";
        visionPage.style.display = "none";
    }
    notifBtn.onclick = function() {
        homePage.style.display = "none";
        shopPage.style.display = "none";
        lctPage.style.display = "none";
        aboutUsPage.style.display = "none";
        notifPage.style.display = "block";
        contactPage.style.display = "none";
        feedbackPage.style.display = "none";
        donationPage.style.display = "none";
        partnershipPage.style.display = "none";
        visionPage.style.display = "none";
    }
    contactBtn.onclick = function() {
        homePage.style.display = "none";
        shopPage.style.display = "none";
        lctPage.style.display = "none";
        aboutUsPage.style.display = "none";
        notifPage.style.display = "none";
        contactPage.style.display = "block";
        feedbackPage.style.display = "none";
        donationPage.style.display = "none";
        partnershipPage.style.display = "none";
        visionPage.style.display = "none";
    }
    feedbackBtn.onclick = function() {
        homePage.style.display = "none";
        shopPage.style.display = "none";
        lctPage.style.display = "none";
        aboutUsPage.style.display = "none";
        notifPage.style.display = "none";
        contactPage.style.display = "none";
        feedbackPage.style.display = "block";
        donationPage.style.display = "none";
        partnershipPage.style.display = "none";
        visionPage.style.display = "none";
    }
    donationBtn.onclick = function() {
        homePage.style.display = "none";
        shopPage.style.display = "none";
        lctPage.style.display = "none";
        aboutUsPage.style.display = "none";
        notifPage.style.display = "none";
        contactPage.style.display = "none";
        feedbackPage.style.display = "none";
        donationPage.style.display = "block";
        partnershipPage.style.display = "none";
        visionPage.style.display = "none";
    }
    partnershipBtn.onclick = function() {
        homePage.style.display = "none";
        shopPage.style.display = "none";
        lctPage.style.display = "none";
        aboutUsPage.style.display = "none";
        notifPage.style.display = "none";
        contactPage.style.display = "none";
        feedbackPage.style.display = "none";
        donationPage.style.display = "none";
        partnershipPage.style.display = "block";
        visionPage.style.display = "none";
    }
    visionBtn.onclick = function() {
        homePage.style.display = "none";
        shopPage.style.display = "none";
        lctPage.style.display = "none";
        aboutUsPage.style.display = "none";
        notifPage.style.display = "none";
        contactPage.style.display = "none";
        feedbackPage.style.display = "none";
        donationPage.style.display = "none";
        partnershipPage.style.display = "none";
        visionPage.style.display = "block";
    }
})