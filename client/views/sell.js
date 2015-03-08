
Session.setDefault('img',null);

var getPicture = function(options){
  MeteorCamera.getPicture(options, function(err,data){
    if(err){
      console.log('Error',err);
    }
    if(data){
      Session.set('img',data)
    }
  })
};

Template.sell.events({
  'click .click':function(){
    getPicture({
      width:350,
      height:350,
      quality:75
    });
  },
  
  'submit .camera':function(event){
    var thindi = event.target.thindi;
    var desc = event.target.description;
    console.log(thindi);
  },

  'click .gallery':function(){
    if(Meteor.isCordova){
      getPicture({
            width: 350,
            height: 350,
            quality: 75,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY
          });
    }else{
      alert("Supported only in phone");
    }

  }
});

Template.sell.helpers({
img: function() {
  return Session.get('img');
}
});


Meteor.methods({
  addThindi: function (thindi,desc) {
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Tasks.insert({
      thindi: thindi,
      description: desc,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username
    });
  },
  deleteTask: function (taskId) {
    Tasks.remove(taskId);
  }
});
