// ==UserScript==
// @name         TikTok Auto Scroll Clicker + Dashboard
// @namespace    https://github.com/NikoboiNFTB/TikTok-Tweaks
// @version      1.0
// @description  Automatically clicks the DOWN button on TikTok and shows total clicks in a floating dashboard
// @author       Nikoboi
// @match        https://www.tiktok.com/*
// @icon         https://www.tiktok.com/favicon.ico
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const channel = new BroadcastChannel('tiktok_click_counter');
    const myId = 'window_' + Math.floor(Math.random() * 1e9);

    // Initialize counter for this window
    if (!localStorage[myId]) localStorage[myId] = '0';

    // Create floating dashboard
    const dashboard = document.createElement('div');
    dashboard.style.position = 'fixed';
    dashboard.style.top = '20px';
    dashboard.style.right = '20px';
    dashboard.style.zIndex = '9999';
    dashboard.style.padding = '10px 15px';
    dashboard.style.backgroundColor = 'rgba(0,0,0,0.7)';
    dashboard.style.color = '#fff';
    dashboard.style.fontSize = '16px';
    dashboard.style.fontFamily = 'Arial, sans-serif';
    dashboard.style.borderRadius = '8px';
    dashboard.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
    document.body.appendChild(dashboard);

    // Separate element for total clicks
    const totalDisplay = document.createElement('span');
    totalDisplay.textContent = 'Total Clicks: 0';
    dashboard.appendChild(totalDisplay);

    // Reset button
    const resetBtn = document.createElement('button');
    resetBtn.textContent = 'Reset';
    resetBtn.style.marginLeft = '10px';
    resetBtn.style.padding = '2px 6px';
    resetBtn.style.fontSize = '14px';
    resetBtn.style.cursor = 'pointer';
    resetBtn.onclick = () => {
        Object.keys(localStorage)
            .filter(k => k.startsWith('window_'))
            .forEach(k => localStorage.removeItem(k));
        updateTotal();
    };
    dashboard.appendChild(resetBtn);

    // Compute total clicks across all windows
    function updateTotal() {
        let total = 0;
        for (let key in localStorage) {
            if (key.startsWith('window_')) total += parseInt(localStorage[key] || '0', 10);
        }
        totalDisplay.textContent = `Total Clicks: ${total}`;
    }

    // Add a click in this window
    function addClick() {
        let current = parseInt(localStorage[myId] || '0', 10);
        localStorage[myId] = current + 1;
        channel.postMessage({ id: myId, value: current + 1 });
        updateTotal();
    }

    // Listen for updates from other windows
    channel.onmessage = () => updateTotal();

    // Stable selector for the down button
    const selector = "button.TUXButton.TUXButton--capsule.TUXButton--medium.TUXButton--secondary.action-item.css-16m89jc";

    function waitForButtons() {
        const buttons = document.querySelectorAll(selector);
        if (!buttons || buttons.length < 2) {
            requestAnimationFrame(waitForButtons);
            return;
        }

        setInterval(() => {
            const btns = document.querySelectorAll(selector);
            const downBtn = btns[1]; // second button is DOWN
            if (downBtn && !downBtn.disabled) {
                downBtn.click();
                addClick();
            }
        }, 1000); // click every 1s
    }

    waitForButtons();

    // Persist counter every 10s
    setInterval(() => { localStorage[myId] = localStorage[myId]; }, 10000);

    // Initial update
    updateTotal();

})();
