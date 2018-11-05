import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    compose(event){
      event.preventDefault();
      let email = this.store.createRecord('email', {
        from: this.from,
        to: this.to,
        subject: this.subject,
        message: this.message

      });

      email.save().then(()=>{
        this.transitionToRoute('index');
      });
    }
  }

});
