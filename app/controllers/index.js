import Controller from '@ember/controller';

export default Controller.extend({
  actions: {

  star(email){
    email.set('starred', !email.starred);
    email.save();
  }
}
});
