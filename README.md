# TikTok-Tools

Tools for TikTok

## TikTok Auto Poster

Automatically clicks **Post Video** and **Confirm/Post Now** buttons on TikTok.

Inspired by [tristedo](https://www.youtube.com/@tristefr)'s video [*I Built a TikTok Bot That Posts Every Minute*](https://www.youtube.com/watch?v=KlyAWXeGIl4) that failed at the very last step. I fixed the missing functionality.

### Installation

1. Install Violentmonkey (or another userscript manager) from your favorite browser extension store. (On Chromium browsers you must enable "Allow User Scripts" in the extensions settings)
2. Click [install](https://github.com/NikoboiNFTB/TikTok-Tools/raw/refs/heads/main/auto-poster.user.js) and install when prompted.

### Usage

Once installed the script will automatically click **Post Video** and/or **Post Now** buttons when they appear.

### Notes

Use responsibly, automated posting may violate TikTok’s terms of service.

## TikTok Auto Scoller

Automatically scrolls the TikTok feed every second.

Inspired by [triste](https://www.youtube.com/@tristefr)'s video "[*I Watched 1M TikToks in 24 Hours*](https://www.youtube.com/watch?v=JsAKnQrYAgA)". I think I could do better.

### Installation

Same as above but click [here](https://github.com/NikoboiNFTB/TikTok-Tools/raw/refs/heads/main/auto-scoller.user.js) and install when prompted by Violentmonkey/Tampermonkey.

### Usage

Once installed the script will automatically scroll on the [TikTok feed page](https://www.tiktok.com/).

### Notes

The auto-scroller is currently hardware/network limited. It's fast.

### Blocklist

Blocks some shit that overlays with the dashboard in the top-right. Here's the source link:

```text
https://github.com/NikoboiNFTB/TikTok-Tools/raw/refs/heads/main/auto-scroller/blocklist.txt
```

#### uBlock Origin add tutorial

1. Select extension in the top-right.

2. Click the three gears to open the settings.

3. Under "Filter lists" at the top, scroll down to the bottom.

4. Select "Import..."

5. Paste the URL linked above.

6. Hit "Apply changes" at the top.

## Contributing

Feel free to fork this repository and submit issues or pull requests if you have any suggestions or improvements. If you encounter any bugs or have feature requests, please open an issue.

## Credits

Ideas from [*triste*](https://www.youtube.com/@tristefr)'s videos

Created by **[Nikoboi](https://github.com/NikoboiNFTB/)**

Script logic fine-tuned with [**ChatGPT**](https://chatgpt.com/)

## License
