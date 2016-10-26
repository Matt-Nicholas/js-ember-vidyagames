
import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    savePost() {
        var params = {
          title: this.get('title'),
          author: this.get('author'),
          article: this.get('article'),
          image: this.get('image'),
          date: this.get('date'),
        };
        this.sendAction('savePost', params);
    },
    closeModal() {
      this.sendAction('closeModal');
    }
  }
});
