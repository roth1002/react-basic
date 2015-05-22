var dispatcher = require('../dispatcher'),
    createEmitter = require('../utils/createEmitter'),
    assign = require('object-assign'),

    ArticleStore,

    // Article id --> Article instance.
    // "Single source of truth" for the Articles.
    articles = {},

    // Article ids for "all" list, in display order.
    //
    allArticleIds = [],

    // If allArticleIds is populated in store.
    // React components can check this before dispatching actions.
    //
    hasInitialized = false;

module.exports = ArticleStore = createEmitter({
  _setSingleArticle: function(article) {
    // Given a articleInstance {id: articleId, props...},
    // put it in the articleId -> articleInstance map.
    //

    if (articles[article.id]) {
      // article already exists, just update
      //
      assign(articles[article.id], article);
    } else {
      articles[article.id] = article;
    }
  },

  _setArticles: function(newArticle) {
    newArticle.forEach(function(article) {
      this._setSingleArticle(article);
    }.bind(this));
  },

  _onSetArticle: function(article) {
    this._setSingleArticle(article);
    this.emit('CHANGE');
  },

  _onSetArticles: function(newArticle) {
    if (newArticle) {

      this._setArticles(newArticle)
      // Update allArticleIds.
      allArticleIds = newArticle.map(function(article) {return article.id});
      hasInitialized = true;

      this.emit('CHANGE');
    }
  },

  _onSetCart: function(newArticle) {
    if (newArticle) {
      this._setArticles(newArticle);
      this.emit('CHANGE');
    }
  },

  all: function() {
    return allArticleIds.map(function(id) {
      return articles[id];
    });
  },
  get: function(id) {
    return articles[id];
  },

  hasInitialized: function() {
    return hasInitialized;
  }
});

ArticleStore.dispatchToken = dispatcher.register(function(payload) {
  switch (payload.actionType){

  case 'SET_ARTICLES':
    ArticleStore._onSetArticles(payload.data);
    break;

  case 'SET_ARTICLE':
    ArticleStore._onSetArticle(payload.data);
    break;

  case 'SET_CART':
    ArticleStore._onSetCart(payload.data);
    break;
  }
});
