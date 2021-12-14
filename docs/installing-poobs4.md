---
lang: en-US
title: Installing pOOBs4
---

## What you need

- A computer
- A USB storage device
- The exfathax `.img` exploit file <a href="https://github.com/ChendoChap/pOOBs4/raw/main/exfathax.img" target="_blank"><i class="fas fa-download" style="margin-left: .3em;"></i></a>
- The latest version of [Rufus](https://rufus.ie/en/)

## Instructions

### Section I - Flashing the exploit

1. Plug your USB storage device into your PC
1. Open the Rufus application on your PC
1. Select your USB storage device under "Device"
1. Click the "SELECT" button and open the `exfathax.img` file
1. Click "START"

When this is complete, unmount and unplug your USB storage device from your computer. Do not plug it into your PS4 console yet.

### Section II - Finding your IP address

1. Open the Settings application on your PS4
1. Ensure you are connected to the same network as your computer
1. Open "View Connection Status"
1. Note down the value after "IP Address"
    - You will need this address later in the guide
1. Exit the Settings application

### Section III - Launching the exploit

1. Open the Internet Browser application on your PS4
1. Navigate to [https://ps4.emiyl.com/900](/900)
    - If you get an error, simply reload the page and try again
1. A prompt should appear, saying: **"Insert USB now. do not close the dialog until the notification pops, remove usb after closing it."**
    - Do not click "OK" yet
1. Insert your USB storage device into your PS4
1. A notification should appear saying **"This USB storage device's file system is unsupported"**
1. Click "OK"
    - The webpage should now display "Awaiting Payload..."
1. Unplug the USB from your PS4

::: danger

You must <u>**not**</u> have your flashed USB storage device plugged in when (re)booting your PS4. Doing so can cause corruption.

:::