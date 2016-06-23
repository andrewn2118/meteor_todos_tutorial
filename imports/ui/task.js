import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Tasks } from '../api/tasks.js';

/*
  Before running `meteor remove insecure`

  import './body.html';
*/
import './task.html';

Template.task.events({
  'click .toggle-checked'() {
    // Set the checked property to the opporsite of its current value
    /*
      Before running `meteor remove insecure`

      Tasks.update(this._id, {
        $set: { checked: !this.checked },
      });
    */
    Meteor.call('tasks.setChecked', this._id, !this.checked);
  },
  'click .delete'() {
    /*
      Before running `meteor remove insecure`

      Tasks.remove(this._id);
    */
    Meteor.call('tasks.remove', this._id);
  },
});