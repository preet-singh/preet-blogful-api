'use strict';

function makeArticlesArray() {
  return [
    {
      id: 1,
      title: 'First test post!',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?',
      date_published: ('2029-01-22T16:28:32.615Z'),
      style: 'How-to',
      author: 1
    },
    {
      id: 2,
      title: 'Second test post!',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, exercitationem cupiditate dignissimos est perspiciatis, nobis commodi alias saepe atque facilis labore sequi deleniti. Sint, adipisci facere! Velit temporibus debitis rerum.',
      date_published: ('2100-05-22T16:28:32.615Z'),
      style: 'News',
      author: 2
    },
    {
      id: 3,
      title: 'Third test post!',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, voluptate? Necessitatibus, reiciendis? Cupiditate totam laborum esse animi ratione ipsa dignissimos laboriosam eos similique cumque. Est nostrum esse porro id quaerat.',
      date_published: ('1029-01-22T16:28:32.615Z'),
      style: 'Story',
      author: 3
    },
  ];
}
module.exports = {
  makeArticlesArray
};