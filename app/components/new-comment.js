import Ember from 'ember';

export default Ember.Component.extend({
   actions: {
     saveComment() {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        post: this.get('post')
      };
      this.sendAction('saveComment', params);
    }
   }
});
