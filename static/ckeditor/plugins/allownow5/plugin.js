/**
 * @license Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

/**
 * @fileOverview The Now plugin.
 */

( function() {
	var nowCmd = {
		readOnly: 1,

		exec: function( editor ) {
			if ( editor.fire( 'now' ) ) {

                var objToday = new Date();
                //var now = objToday.toDateString();

                var curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours());
                var curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes();
                var curAMPM = objToday.getHours() > 11 ? "p" : "a";

                var now = curHour + ":" + curMinute + curAMPM;

                editor.insertHtml("<h3>Log " + now + "</h3>");

                //alert(dt);
			}
		}
	};

	// Register a plugin named "allownow".
	CKEDITOR.plugins.add( 'allownow5', {
		icons: 'now', // %REMOVE_LINE_CORE%
		hidpi: true, // %REMOVE_LINE_CORE%
		init: function( editor ) {
			var command = editor.addCommand( 'now', nowCmd );
			command.modes = { wysiwyg: 1, source: 1 };
			editor.ui.addButton && editor.ui.addButton( 'Now', {
                command:'now',
				label: 'Now',
				toolbar: 'document,10'
			} );
		}
	} );
} )();

/**
 * Fired when the user clicks the Now button on the editor toolbar.
 * This event allows to overwrite the default Now button behavior.
 *
 * @since 4.2
 * @event now
 * @member CKEDITOR.editor
 * @param {CKEDITOR.editor} editor This editor instance.
 */
