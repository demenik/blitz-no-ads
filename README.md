
# Blitz.gg Adblocker

Blocks ads in the Blitz.gg Desktop Application.

This is a simple electron injector that uses the electron remote debugger to inject JavaScript into all Blitz.gg windows.

## How to use

1.  Clone this repository to your computer

     ```bash
     git clone https://github.com/demenik/blitz-no-ads.git blitz-no-ads
     ```

2. Install dependencies

    ```bash
    npm install
    # or
    yarn install
    ```

3. Edit your Blitz Shortcut to open a remote-debugger-port on startup

    - (Normally the Shortcut is located at `%APPDATA%\Microsoft\Windows\Start Menu\Programs\Blitz.lnk`)

    - Right Click and hit Properties

    - In the target textbox append `--remote-debugging-port=31235` to the target path

    <img src="https://i.imgur.com/0XnysEc.png" alt="shortcut example" width="200"/>

4. Start Blitz.gg using this shortcut

5. Run the Inject Script
    ```bash
    npm run inject 31235
    # or
    yarn inject 31235
    ```

## Current Issues

- [ ] The script needs to be run every time you open Blitz.gg
- [ ] The script needs to be run every time Blitz.gg opens a new window (e.g. post game stats)
- [ ] Some ads might still get shown because the injected script is not tested

## Contribution

Is always welcome. If you have any questions, please open an issue or open a pull request.