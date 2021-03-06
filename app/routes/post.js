import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    // return Ember.RSVP.hash({
    //   post: this.store.findRecord('post', params.post_id),
    //   comments: this.store.findAll('comment')
    // });

    return this.store.findRecord('post', params.post_id);
  },

  actions: {
      update(post, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          post.set(key,params[key]);
        }
      });
      post.save();
      this.transitionTo('index');
      },

      saveComment(params) {
        var newComment = this.store.createRecord('comment', params);
        var post = params.post;
        post.get('comments').addObject(newComment);
        newComment.save().then(function() {
          return post.save();
        });
      },

      searchPrompt() {
        alert("Tony and Jason suck donkey dong");
      },

      destroyPost(post) {
        post.destroyRecord();
        this.transitionTo('index');
      }
    }});
