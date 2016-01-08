#!/bin/bash
# Node.tech simple node launcher!
function help () {
    echo "Node.tech - a simple to deploy barebones app with angular"
    echo "install = install the packages"
    echo "run     = deploy the app"
}
if [ $1 ]
then
	case "$1" in
    install)
      echo "installing xcode"
      xcode-select –install
      echo "installing brew"
      ruby -e “$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)”
      brew doctor
      brew install caskroom/cask/brew-cask
      echo "installing git"
      brew intstall git
      echo "installing node"
      brew install node
      echo "installing packages and dependencies"
      npm install
      npm install -g bower
      bower install
      echo "running asset pipeline"
      gulp scripts
      gulp sass
      echo "deploying app to localhost:3000"
      forever app.js
    ;;
    run)
     echo "run!"
     forever app.js
    ;;
    *)
        help
    ;;
esac
else
    help
fi
