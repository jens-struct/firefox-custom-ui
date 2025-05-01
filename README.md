# firefox-custom-ui

## install userChrome overrides

- clone or download the files in this github repo into the firefox user `PROFILE_FOLDER`
- find `PROFILE_FOLDER` on `about:support` page
- make sure to clone the repo to `.../PROFILE_FOLDER/chrome` not `.../PROFILE_FOLDER/firefox-custom-ui`

## install core config override (optional)

Needed for new UI element CSS overrides (i.e. sidebar) that use web components and shadow dom (lit), which makes CSS overrides impossible from the `userChrome.css`. It replaces the corresponding core css files completely with custom ones.

- Install custom config: `./install-config.sh` (paths might need to be adjusted, depending on the firefox installation)
- Clear startup cache: on `about:support` page, click "clear the startup-cache" button (so firefox loads the config override)
