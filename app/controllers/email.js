import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    deletePost(email){
      email.destroyRecord().then(()=>{
        this.transitionToRoute('index');
      });
    }
  }
});
