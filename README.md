# shiftsync
synchronise your configuration (bash, iTerm, Chrome etc.) files across multiple workstations

:warning: UNDER DEV, COME BACK LATER OR WATCH :warning:

## How it Works
- Tell it the config file you want to sync (`~/.bashrc`)
- Tell it where it should be restored to (`~/.bashrc`)

The app will save these to a git repository you configure.
The app will automatically pull/push changes to your configurations when tracked.
The app will automatically try to fix any merge conflicts that might happen.

This should all result in an application that seemlessly allows you synchronise multiple confiration files accross multiple hosts.

