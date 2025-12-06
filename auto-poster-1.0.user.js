// ==UserScript==
// @name         TikTok - Auto Poster
// @namespace    https://github.com/NikoboiNFTB/TikTok-Auto-Poster/
// @version      1.0
// @description  Clicks post video and confirm buttons.
// @author       Nikoboi
// @match        *://*.tiktok.com/*
// @grant        none
// @icon         https://www.tiktok.com/favicon.ico
// ==/UserScript==

(function() {
    'use strict';

    setInterval(() => {
        // Type 1: React-style button
        const reactButton = document.querySelector('button[data-e2e="post_video_button"]');

        if (reactButton) {
            try {
                reactButton.click();
                console.log('Clicked React-style post video button!');
            } catch (e) {
                console.warn('React button click failed, retrying...');
            }
        }

        // Type 2: TUX-style button with label "Post now"
        const tuxButton = Array.from(document.querySelectorAll('button.TUXButton')).find(
            btn => btn.textContent.trim() === 'Post now'
        );

        if (tuxButton) {
            try {
                tuxButton.click();
                console.log('Clicked TUX-style Post now button!');
            } catch (e) {
                console.warn('TUX button click failed, retrying...');
            }
        }

    }, 1000); // try every second
})();
