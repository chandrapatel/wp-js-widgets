<!-- DO NOT EDIT THIS FILE; it is auto-generated from readme.txt -->
# JS Widgets

The next generation of widgets in core, embracing JS for UI and powering the Widgets REST API.

**Contributors:** [xwp](https://profiles.wordpress.org/xwp), [westonruter](https://profiles.wordpress.org/westonruter)  
**Tags:** [customizer](https://wordpress.org/plugins/tags/customizer), [widgets](https://wordpress.org/plugins/tags/widgets), [rest-api](https://wordpress.org/plugins/tags/rest-api)  
**Requires at least:** 4.7.0  
**Tested up to:** 4.7.0  
**Stable tag:** 0.2.0  
**License:** [GPLv2 or later](http://www.gnu.org/licenses/gpl-2.0.html)  

[![Build Status](https://travis-ci.org/xwp/wp-js-widgets.svg?branch=master)](https://travis-ci.org/xwp/wp-js-widgets) [![Coverage Status](https://coveralls.io/repos/xwp/wp-js-widgets/badge.svg?branch=master)](https://coveralls.io/github/xwp/wp-js-widgets) [![Built with Grunt](https://cdn.gruntjs.com/builtwith.svg)](http://gruntjs.com) [![devDependency Status](https://david-dm.org/xwp/wp-js-widgets/dev-status.svg)](https://david-dm.org/xwp/wp-js-widgets#info=devDependencies) 

## Description ##

Also could be known as Widget Customizer 2.0, Widgets 3.0, or Widgets Next Generation.

This plugin implements:

* [WP-CORE#33507](https://core.trac.wordpress.org/ticket/33507): Allow widget controls to be JS-driven.
* [WP-CORE#35574](https://core.trac.wordpress.org/ticket/35574): Add REST API JSON schema information to WP_Widget.
* [WP-API#19](https://github.com/WP-API/WP-API/issues/19): Add widget endpoints to the WP REST API.

Plugin Dependencies:

* [WordPress REST API v2](https://wordpress.org/plugins/rest-api/)
* [Customize Setting Validation](https://github.com/xwp/wp-customize-setting-validation) (recommended)

Features:

* Widget instance settings in the Customizer are exported from PHP as regular JSON without any PHP-serialized base64-encoded `encoded_serialized_instance`.
* Customizer settings can be directly mutated via JavaScript instead of needing to do an `update-widget` Admin Ajax roundtrip; this greatly speeds up previewing.
* Widget have a technology-agnostic JS API for building their forms, allowing Backbone, React, or any other frontend technology to be used for managing the form.
* Compatible with widgets stored in a custom post type instead of options, via the Widget Posts module in the [Customize Widgets Plus](https://github.com/xwp/wp-customize-widgets-plus) plugin.
* Compatible with [Customize Snapshots](https://github.com/xwp/wp-customize-snapshots), allowing changes made in the Customizer to be applied to requests for widgets via the REST API.
* Compatible with [Customize Setting Validation](https://github.com/xwp/wp-customize-setting-validation).
* Includes (eventually) re-implementation of all core widgets using the new `WP_JS_Widget` API.

Limitations/Caveats:

* Widgets that extend `WP_JS_Widget` will not be editable from widgets admin page. A link to edit the widget in the Customizer will be displayed instead.
* Only widgets that extend `WP_JS_Widget` will be exposed via the REST API. The plugin includes a `WP_JS_Widget` proxy class which demonstrates how to adapt existing `WP_Widget` classes for the new widget functionality.

## Changelog ##

### 0.2.0 - 2016-12-??

* Important: Update minimum WordPress core version to 4.7.0.
* Eliminate `Form#embed` JS method in favor of just `Form#render`. Introduce `Form#destruct` to handle unmounting a rendered form.
* Implement ability for sanitize to return error/notification and display in control's notifications.
* Show warning when attempting to add HTML to widget titles and when adding illegal HTML to Text widget content. This is a UX improvement over silently failing.
* Add adapters for all of the core widgets (aside from Links). Include as much raw data as possible in the REST responses so that JS clients can construct widgets using client-side templates.
* Add integration between the Pages widget's `exclude` param and the [Customize Object Selector](https://wordpress.org/plugins/customize-object-selector/) plugin to provide a Select2 UI for selecting pages to exclude instead of listing out page IDs.
* Ensure old encoded instance data setting value format is supported (such as in starter content).
* Move Post Collection widget into separate embedded plugin so that it is not active by default.
* Inject rest_controller object dependency on `WP_JS_Widget` upon `rest_api_init`.
* Ensure that default instance values populate forms for newly-added widgets.
* Remove React/Redux for implementing the Recent Posts widget.
* Reorganize core adapter widgets and introduce `WP_Adapter_JS_Widget` class.
* Eliminate uglification and CSS minification.
* Use widget number as integer ID for widgets of a given type.
* Update integration with REST API to take advantage of sanitization callbacks being able to do validation.
* Replace Backbone implementation for Text widget with Customize `Element` implementation.
* Reduce duplication by moving methods to base classes.
* Add form field template generator helper methods.
* Implement [WP Core Trac #39389](https://core.trac.wordpress.org/ticket/39389): Scroll widget partial into view when control expanded.


= 0.1.1 - 2016-10-03 ###
* Add 100% width to object-selector.
* Fix typo in sanitizing Post Collection input.
* Fix PHP issue when attempting to assign an undefined array index to another undefined array index.
* Fix styling of post collection widget select2 component.
* Fix accounting for parse_widget_setting_id returning WP_Error not false.

### 0.1.0 - 2016-08-24 ###
Initial release.


