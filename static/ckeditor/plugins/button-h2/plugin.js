
/**
 * @license Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

/**
 * @fileOverview The Save plugin.
 */

( function() {
  var buttonh2Cmd = {
    readOnly: 1,

    exec: function( editor ) {
      if ( editor.fire( 'button-h2' ) ) {
        //alert("H2")
        var format = {
          element : 'h2',
          attributes : { 'class' : 'item_body_heading_2' }
        };
        var style = new CKEDITOR.style(format);
        style.apply(editor.document);
      }
    }
  };

  // Register a plugin named "button-h2".
  CKEDITOR.plugins.add( 'button-h2', {
    lang: 'af,ar,bg,bn,bs,ca,cs,cy,da,de,el,en,en-au,en-ca,en-gb,eo,es,et,eu,fa,fi,fo,fr,fr-ca,gl,gu,he,hi,hr,hu,id,is,it,ja,ka,km,ko,ku,lt,lv,mk,mn,ms,nb,nl,no,pl,pt,pt-br,ro,ru,si,sk,sl,sq,sr,sr-latn,sv,th,tr,ug,uk,vi,zh,zh-cn', // %REMOVE_LINE_CORE%
    //icons: 'save', // %REMOVE_LINE_CORE%
    hidpi: false, // %REMOVE_LINE_CORE%
    init: function( editor ) {
      var command = editor.addCommand( 'button-h2', buttonh2Cmd );
      command.modes = { wysiwyg: 1, source: 1 };

    }
  } );
} )();

/**
 * Fired when the user clicks the Save button on the editor toolbar.
 * This event allows to overwrite the default Save button behavior.
 *
 * @since 4.2
 * @event save
 * @member CKEDITOR.editor
 * @param {CKEDITOR.editor} editor This editor instance.
 */

