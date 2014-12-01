MDM Login / Lock screen
=========

## Overview

To customize my own computer a bit more, I created a login screen for my Linux system. It's coded in HTML, jQuery and CSS3 and uses mdm as screen manager.
It has support for multi language, multi sessions, and multi users. Default system functions like shutting down or restarting are also implemented.

In the middle of the screen are the images of the users. If a user is clicked it will slide to the left revealing the password input. If the user doesn't have a password set it will log in immediately on the click.
Animations are done with CSS3 transitions.

Make sure you have the .face files for the users otherwise it might be hard to spot the correct user

## Features

Currently supports the following:

- login with or without password
- user profile picture
- change session
- change language
- shutdown/suspend/restart
- show time and date
- show error messages


## Screenshots

![](http://chmeleon.nl/mdm/roundlogin/screen.png)
![](http://chmeleon.nl/mdm/roundlogin/screen2.png)

## Installation

It depends on your system, but here's how to install for Linux Mint:

1. Assuming that you have MDM installed, make sure to set it as default by running the following:

    ```bash
    $ sudo dpkg-reconfigure mdm
    ```
3. Clone into the MDM themes directory:

    ```bash
    $ sudo git clone https://github.com/koenhendriks/mdm-login.git \
      /usr/share/mdm/html-themes/Round
    ```
4. Open up the preferences panel and select the theme from the HTML list:

    ```bash
    $ sudo mdmsetup
    ```
    or 

    System Settings --> Administration --> Login Screen  

## User Profile Picture

To set your profile picture use the Users and Groups settings under  System Settings --> Administration --> Users and Groups.

or 

put a `jpg` file named `.face` in your home directory,
that is, a hidden file named `face`. 

## Uninstallation

First, change your theme via the preferences panel, then simply remove the theme
from MDM's html-themes directory:

```bash
$ sudo rm -rf /usr/share/mdm/html-themes/mdm-login
```

## Credits

Created from scratch using Bootstrap 3 and jQuery

## License

GPL v2 -- See License file
