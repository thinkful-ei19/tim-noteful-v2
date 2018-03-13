'use strict';

const knex = require('../knex');

knex.select(1).then(res => console.log(res));

knex.select(id)
  .from('notes')
  .where(function () {
    if (noteId) {
      this.where('id', 'like', `%${noteId}%`);
    }
  })
  .then(item => {
    res.json(item);
  })
  .catch(err => next(err));


knex.select()
  .from('notes')
  .where(function () {
    if (noteId) {
      this.where('id', noteId);
    }
    else {
      next();
    }

  })
  .update(updateObj)
  .then(item =>
    res.json(item))
  .catch(err => next(err));


knex.insert(newItem)
  .into('notes')
  .returning('id')
  .then(item => {
    res.location(`http://${req.headers.host}/notes/${item.id}`)
      .status(201).json(item);
  })
  .catch(err=> next(err));


  knex.del()
  .from('notes')
  .where('id', req.params.id)
  .then(count => {
    if (count) {
      res.status(204).end();
    } else {
      next();
    }
  })
  .catch(err => next(err));
