import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePostForm() {
      this.set('updatePostForm', true);
    },
    update(post) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        article: this.get('article'),
        image: this.get('image'),
        date: this.get('date'),
      };
      this.set('updatePostForm', false);
      this.sendAction('update', post, params);
    },
    delete(post) {
     if(confirm('Are you sure you want to delete this post?')) {
       this.sendAction('destroyPost',post);
     }
   }
  }
});
