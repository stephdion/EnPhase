Router.configure({
  layoutTemplate: 'mainLayout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.subscribe('posts'); }
});

Router.route('/', {name: 'postsList'});

Router.route('/posts/:_id', {
  name: 'postPage',
  data: function() { return Posts.findOne(this.params._id); }
});

Router.route('/submit', {name: 'postSubmit'});


Router.route('/login', function () {
    this.render('pagelogin');
    //this.layout('blankLayout')
});

Router.onBeforeAction('dataNotFound', {only: 'postPage'});
