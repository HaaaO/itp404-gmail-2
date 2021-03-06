import { Factory } from 'ember-cli-mirage';

export default Factory.extend({

  from(){
    return faker.internet.email();
  },
  to(){
    return faker.internet.email();
  },
  subject(){
    return faker.lorem.sentence();
  },
  message(){
    return faker.lorem.paragraphs();
  },
  starred() {return false;}
});
