import { Template } from 'meteor/templating';

import { Tasks } from '../api/tasks.js';

import './body.html';

Template.task.events({
  'click .toggle-checked'() {
    // Set the checked property to the opporsite of its current value
    Tasks.update(this._id, {
      $set: { checked: !this.checked },
    });
  },
  'click .delete'() {
    Tasks.remove(this._id);
  },
});