---
lang: en-US
title: Updating to 9.00 (Offline)
sidebar: auto
---

## Required Reading

The [pOOBs4](/installing-poobs4) jailbreak is only compatible with firmware version 9.00. As a result, older firmware versions must update manually in order to use the exploit.

While this guide focuses on updating to 9.00, this method will work for any firmware, as long as the target firmware version is above your current firmware version.

Note that you can only update to 9.00 if you are on firmware version 8.50 or below. If you are on firmware version 9.03 or above, this will not work.

We will ensure that the PS4 uses the update file we want by disabling network connectivity and deleting any pre-downloaded updates. It is also recommend to disable automatic updates to stop your PS4 from updating in the future without your permission.

## What you need

- An exFAT or FAT32 formatted USB drive with ~500MB of free space
- The `PS4UPDATE.PUP` file corresponding to the firmware version you are trying to update to
  - [<i class="fas fa-download"></i> PS4UPDATE.PUP](https://archive.org/download/PS4-System-Firmwares/Firmware%209.00/PS4UPDATE.PUP) (9.00)

## Instructions

### Section I - Drive Preparation

1. Plug your USB device into your computer
1. Create a folder named `PS4` on the root of your USB drive
1. Create a folder named `UPDATE` in the `PS4` folder on your USB drive
1. Rename your downloaded update file to `PS4UPDATE.PUP` if it is not already named that
    - If you downloaded the update from the link above, you won't need to do this
1. Move `PS4UPDATE.PUP` to the newly created `UPDATE` folder

### Section II - Console preparation

1. Check your notifications to ensure you have no updates downloaded
    - If you do, delete the updates
1. Open the Settings application
1. Navigate to the "Network" section and open it
1. Ensure that "Connect to the Internet" is disabled
1. Go back to return to the main Settings menu
1. Navigate to the "System" section and open it
1. Navigate to the "Automatic Downloads" section and open it
1. Ensure that all options in this section are disabled
1. Go back to return to the main Settings menu

### Section III - Updating to 9.00

1. Plug your USB device into your PS4
1. Navigate to the "System Software Update" section in the Settings application
1. **Ensure that the text says "Version 9.00"**
    - If it does not, go back and repeat these instructions again
    - If you are trying to update to a different firmware version, this text should say the firmware that you want instead
1. Press "Next"
1. Press "Update"

Your PS4 should restart to complete the update. Once finished, you should boot back into firmware 9.00.