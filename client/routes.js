Router.route('/',function() {
    this.render('layout');
  });
Router.route('/home',function() {
    this.render('home');
  });

Router.route('/sell', function () {
  this.render('sell');
});

Router.route('/buy', function () {
  this.render('buy');
});


