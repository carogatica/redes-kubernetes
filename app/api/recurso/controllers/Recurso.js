'use strict';

/**
 * Recurso.js controller
 *
 * @description: A set of functions called "actions" for managing `Recurso`.
 */

module.exports = {

  /**
   * Retrieve recurso records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.recurso.search(ctx.query);
    } else {
      return strapi.services.recurso.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a recurso record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.recurso.fetch(ctx.params);
  },

  /**
   * Count recurso records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.recurso.count(ctx.query, populate);
  },

  /**
   * Create a/an recurso record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.recurso.add(ctx.request.body);
  },

  /**
   * Update a/an recurso record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.recurso.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an recurso record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.recurso.remove(ctx.params);
  }
};
