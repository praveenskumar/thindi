Router.route('/',function() {
    this.render('layout');
  });

Router.route('/sell', function () {
  this.render('sell');
});

Router.route('/buy', function () {
  this.render('buy');
});


