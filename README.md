# ProtractDemo
对应我博客中关于搭建Protractor的文章所使用的demo。博客地址：www.cnblogs.com/sallyzhang/p/4980729.html

Setup Steps:
1. Install nodejs;

2. run command: npm install -g protractor;

3. download chromedriver: http://npm.taobao.org/mirrors/chromedriver

4. download selenium server
   运行webdriver-manager update可以下载chromedriver和selenium server，由于种种原因总是下载不成功
5. copy chromedriver and selenium server to: /Users/yinzhang/Apps/node-v0.10.32-darwin-x64/lib/node_modules/protractor/selenium

6. add directConnect:true to conf.js  //因为是手动下载的chromedriver和seleniumserver，所以需要这项设置
exports.config = {
    directConnect:true,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js']
}

7. run protractor conf.js

8. involve Cucumber
--npm install -g cucumber
  npm install --save-dev protractor-cucumber-framework --会报错，须将这个库考到指定位置：工程目录下面，不是node_modules下面。
--修改config文件
  exports.config = {

      directConnect:true,
      seleniumAddress: 'http://localhost:4444/wd/hub',

      framework: 'custom',  //以前用的是framework: 'cucumber'，现在cucumber被分离出来了：https://angular.github.io/protractor/#/frameworks
      frameworkPath: 'protractor-cucumber-framework', //cucumber分离出来之前不需要这一项
      specs: ['feature/*.feature'],

      capabilities:{
          browserName: 'chrome'
      },

      cucumberOpts: {
          format: 'pretty',
          //        require: ['feature/**/*.js','support/world.js']  //不需要指定也可以找到
      }
