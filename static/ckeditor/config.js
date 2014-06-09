/**
 * @license Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {

    //config.skin = 'kama';
    //config.skin = 'monoo';

    // This is actually the default value.
    config.keystrokes =
    [
        [ CKEDITOR.ALT + 121 /*F10*/, 'toolbarFocus' ],
        [ CKEDITOR.ALT + 122 /*F11*/, 'elementsPathFocus' ],

        [ CKEDITOR.SHIFT + 121 /*F10*/, 'contextMenu' ],

        [ CKEDITOR.CTRL + 90 /*Z*/, 'undo' ],
        [ CKEDITOR.CTRL + 89 /*Y*/, 'redo' ],
        [ CKEDITOR.CTRL + CKEDITOR.SHIFT + 90 /*Z*/, 'redo' ],

        [ CKEDITOR.CTRL + 76 /*L*/, 'link' ],

        [ CKEDITOR.CTRL + 66 /*B*/, 'bold' ],
        [ CKEDITOR.CTRL + 73 /*I*/, 'italic' ],
        [ CKEDITOR.CTRL + 85 /*U*/, 'underline' ],
        [ CKEDITOR.CTRL + 83 /*S*/, 'save' ],
        
        [ CKEDITOR.ALT + 109 /*-*/, 'toolbarCollapse' ]
    ];

//   config.filebrowserBrowseUrl = '/_browse_files/';
//   config.filebrowserImageBrowseUrl = '/_browse_images/';
//   config.filebrowserUploadUrl = '/_upload_files/';
   config.filebrowserImageUploadUrl = '/_upload';

    config.toolbarLocation = 'top';

//    config.extraPlugins = 'allowsave,imagebrowser';
    config.extraPlugins = 'allowsave';

    config.toolbar_Full = [
    { 
        name: 'document',    
        groups: [ 'mode', 'document', 'doctools' ], 
        items: [ 'Source', 'Save', 'NewPage', 'DocProps', 'Preview', 'Print', 'Templates', 'document' ] 
    },
    // On the basic preset, clipboard and undo is handled by keyboard.
    // Uncomment the following line to enable them on the toolbar as well.
    // { name: 'clipboard',   groups: [ 'clipboard', 'undo' ], items: [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', 'Undo', 'Redo' ] },
    { 
        name: 'editing',     
        groups: [ 'find', 'selection', 'spellchecker' ], 
        items: [ 'Find', 'Replace', 'SelectAll', 'Scayt' ] 
    },
    { 
        name: 'insert', 
        items: [ 'CreatePlaceholder', 'Image', 'Flash', 'Table', 'HorizontalRule', 
        //'Smiley', 
        'SpecialChar', 'PageBreak', 
        //'Iframe', 
        'InsertPre' ]
    },
/*    { 
        name: 'forms', 
        items: [ 'Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField' ] 
    }, */
//    '/',
    { 
        name: 'basicstyles', 
        groups: [ 'basicstyles', 'cleanup' ], 
        items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', 'RemoveFormat' ] 
    },
    { 
        name: 'paragraph',   
        groups: [ 'list', 'indent', 'blocks', 'align' ], 
        items: [ 'NumberedList', 'BulletedList', 'Outdent', 'Indent', 'Blockquote', 
//                'CreateDiv', 
                'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', 
//                'BidiLtr', 'BidiRtl' 
                ] 
    },
    { 
        name: 'links', 
        items: [ 'Link', 'Unlink', 'Anchor' ] 
    },
    '/',
    { name: 'styles', items: [ 'Styles', 'Format', 'Font', 'FontSize' ] },
    { name: 'colors', items: [ 'TextColor', 'BGColor' ] },
    { name: 'tools', items: [ 'UIColor', 'Maximize', 'ShowBlocks' ] } //,
    //{ name: 'about', items: [ 'About' ] }
  ];

  config.toolbar = "Full";

  

};
