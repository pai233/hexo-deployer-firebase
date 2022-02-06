# hexo-deployer-firebase
Google Firebase Deployer for Hexo.

# Usage

## Installation
```bash
npm i hexo-deployer-firebase --save
```

## Initialize Your Project
Go to [Firebase Console](https://console.firebase.google.com/) and add a project.

![](https://img1.imgtp.com/2022/02/06/fMi7EhxQ.png)

Then, install [Firebase CLI](https://firebase.google.com/docs/cli) by your favorite ways.

![](https://img1.imgtp.com/2022/02/06/ADzfV8Z1.png)

Finally, Login to your Firebase CLI. Run this command in your terminal.
```bash
firebase login
```
If you don't have the access to `localhost`, run this command below:
```bash
firebase login --no-localhost
```
Now you can configure this plugin!

## Options
You can configure this plugin in Hexo's `_config.yml`:
```yaml
deploy:
    - type: firebase
      id: <Your project's unique identifier>
      debug: <Debug Mode> # Default is true
```
The identifier usually at your project's name below. For an example:
![](https://img1.imgtp.com/2022/02/06/ROx9Ztlw.png)

`pai233-blog` is this project's identifier.

# LICENSE
MIT