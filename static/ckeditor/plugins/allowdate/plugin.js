/**
 * @license Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

/**
 * @fileOverview The Date plugin.
 */

( function() {
	var dateCmd = {
		readOnly: 1,

		exec: function( editor ) {
			if ( editor.fire( 'date' ) ) {

                var weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
                var months = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec');

                var objToday = new Date();
                var dayOfWeek = weekday[objToday.getDay()];
                var dayOfMonth = objToday.getDate();                
                var curMonth = months[objToday.getMonth()];
                var curYear = objToday.getFullYear();


                var date = dayOfWeek + ", " + curMonth + " " + dayOfMonth + ", " + curYear;

                editor.insertHtml("<h2>" + date + "</h2>");

                //alert(dt);
			}
		}
	};

	// Register a plugin named "allowdate".
	CKEDITOR.plugins.add( 'allowdate', {
		icons: 'date', // %REMOVE_LINE_CORE%
		hidpi: true, // %REMOVE_LINE_CORE%
		init: function( editor ) {
			var command = editor.addCommand( 'date', dateCmd );
			command.modes = { wysiwyg: 1, source: 1 };
			editor.ui.addButton && editor.ui.addButton( 'Date', {
                command:'date',
				label: 'Date',
				toolbar: 'document,10'
			} );
		}
	} );
} )();

/**
 * Fired when the user clicks the Date button on the editor toolbar.
 * This event allows to overwrite the default Date button behavior.
 *
 * @since 4.2
 * @event date
 * @member CKEDITOR.editor
 * @param {CKEDITOR.editor} editor This editor instance.
 */
