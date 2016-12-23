/* global wp, module, jQuery */
/* eslint consistent-this: [ "error", "form" ] */
/* eslint-disable strict */
/* eslint-disable complexity */

wp.customize.Widgets.formConstructor['recent-posts'] = (function( api, $ ) {
	'use strict';

	var RecentPostsWidgetForm;

	/**
	 * Text Widget Form.
	 *
	 * @constructor
	 */
	RecentPostsWidgetForm = api.Widgets.Form.extend({

		/**
		 * Initialize.
		 *
		 * @param {object}                             properties         Properties.
		 * @param {wp.customize.Widgets.WidgetControl} properties.control Customize control.
		 * @param {object}                             properties.config  Form config.
		 * @return {void}
		 */
		initialize: function( properties ) {
			var form = this;

			api.Widgets.Form.prototype.initialize.call( form, properties );

			form.embed();
		},

		/**
		 * Embed the form from the template and set up event handlers.
		 *
		 * @return {void}
		 */
		embed: function() {
			var form = this, elementIdBase = 'el' + String( Math.random() ), initialInstanceData;

			form.template = wp.template( 'customize-widget-form-recent-posts' );
			form.container.html( form.template( {
				element_id_base: elementIdBase
			} ) );

			initialInstanceData = form.getValue();
			form.propertyValues = {};
			form.elements = {};
			form.container.find( ':input[name]' ).each( function() {
				var input = $( this ), name = input.prop( 'name' ), propertyValue, propertyElement;
				if ( _.isUndefined( initialInstanceData[ name ] ) ) {
					return;
				}
				propertyValue = form.createSyncedPropertyValue( form.setting, name );
				propertyElement = new wp.customize.Element( input );
				propertyElement.set( initialInstanceData[ name ] );
				propertyElement.sync( propertyValue );

				form.propertyValues[ name ] = propertyValue;
				form.elements[ name ] = propertyElement;
			} );
		},

		/**
		 * Sanitize the instance data.
		 *
		 * @param {object} oldInstance Unsanitized instance.
		 * @returns {object} Sanitized instance.
		 */
		sanitize: function( oldInstance ) {
			var form = this, newInstance;
			newInstance = _.extend( {}, oldInstance );

			if ( ! newInstance.title ) {
				newInstance.title = '';
			}

			// Warn about markup in title.
			if ( /<\/?\w+[^>]*>/.test( newInstance.title ) ) {
				form.setValidationMessage( form.config.l10n.title_tags_invalid );
			}

			if ( ! newInstance.number || newInstance.number < form.config.minimum_number ) {
				newInstance.number = form.config.minimum_number;
			}
			return newInstance;
		}
	});

	if ( 'undefined' !== typeof module ) {
		module.exports = RecentPostsWidgetForm;
	}
	return RecentPostsWidgetForm;

})( wp.customize, jQuery );
