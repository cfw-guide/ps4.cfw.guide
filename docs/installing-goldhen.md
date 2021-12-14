---
lang: en-US
title: Installing GoldHEN
---

## What you need

- A computer
- A USB storage device
- The v1.2 release of [NetCat GUI](/assets/files/NetCat%20GUI%20v1.2.exe)
- The latest release of [GoldHEN](https://github.com/GoldHEN/GoldHEN/releases/latest)

## Instructions

### Section I - Extracting the payload

1. Open the GoldHEN `.7z` file in [7-Zip](https://www.7-zip.org/) or another archive extracter
1. Select the `.bin` file corresponding to your firmware version
    - `goldhen_2.0b_900.bin` is for firmware version 9.00, `goldhen_2.0b_755` is for firmware version 7.55
1. Copy the `.bin` file to your Desktop

### Section II - Injecting the payload

1. Open NetCat GUI on your computer
1. In the first field, enter the IP address of your PS4
    - This can be found in the Settings application under `Network` -> `View Connection Status`
    - This should have been noted down in the previous page
1. Press the `...` button
1. Select the GoldHEN `.bin` payload file you extracted to your Desktop
1. Click "Inject Payload"

You should receive a notification on your PS4 to show that GoldHEN has been installed. In the Settings application, you should be able to see GoldHEN at the top. If you can't see this, try running the exploit again.

![A screenshot of GoldHEN at the top of the Settings application](/assets/images/goldhen.jpg)