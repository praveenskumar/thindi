App.info({
  name: 'thindi',
  description: 'A BUY/SELL app for traditional food items and snacks made in Meteor.',
  author: 'Shravanthi',
  email: 'shravanthium111@gmail.com',
  website: 'http://shravanthium.com',
  version: '0.0.1'
});

App.icons({
  // Android
  'android_mdpi': 'resources/icons/mdpi.png',
  'android_hdpi': 'resources/icons/hdpi.png',
  'android_xhdpi': 'resources/icons/xhdpi.png'
});

App.launchScreens({
  // Android
  'android_ldpi_portrait': 'resources/splash/ldpi.png',
  'android_mdpi_portrait': 'resources/splash/mdpi.png',
  'android_hdpi_portrait': 'resources/splash/hdpi.png',
  'android_xhdpi_portrait': 'resources/splash/xhdpi.png',
});

App.setPreference('StatusBarOverlaysWebView', 'false');
App.setPreference('StatusBarBackgroundColor', '#000000');

