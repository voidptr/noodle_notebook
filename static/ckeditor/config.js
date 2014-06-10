/**
 * @license Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {

    //config.skin = 'kama';
    //config.skin = 'monoo';

    config.filebrowserImageUploadUrl = '/_upload';
    config.toolbarLocation = 'top';
    config.extraPlugins = 'allowsave,button-h1,button-h2,button-h3,button-h4,button-h5,button-h6';

    // This is actually the default value.
    config.keystrokes =
    [
        [ CKEDITOR.ALT + 121 /*F10*/, 'toolbarFocus' ],
        [ CKEDITOR.ALT + 122 /*F11*/, 'elementsPathFocus' ],

        [ CKEDITOR.SHIFT + 121 /*F10*/, 'contextMenu' ],

        [ CKEDITOR.CTRL + 90 /*Z*/, 'undo' ],
        [ CKEDITOR.CTRL + 89 /*Y*/, 'redo' ],
        [ CKEDITOR.CTRL + CKEDITOR.SHIFT + 90 /*Z*/, 'redo' ],

        [ CKEDITOR.CTRL + 49 /*1*/, 'button-h1'],
        [ CKEDITOR.CTRL + 50 /*2*/, 'button-h2'],
        [ CKEDITOR.CTRL + 51 /*3*/, 'button-h3'],
        [ CKEDITOR.CTRL + 52 /*4*/, 'button-h4'],
        [ CKEDITOR.CTRL + 53 /*5*/, 'button-h5'],
        [ CKEDITOR.CTRL + 54 /*6*/, 'button-h6'],

        [ CKEDITOR.CTRL + 76 /*L*/, 'link' ],

        [ CKEDITOR.CTRL + 66 /*B*/, 'bold' ],
        [ CKEDITOR.CTRL + 73 /*I*/, 'italic' ],
        [ CKEDITOR.CTRL + 85 /*U*/, 'underline' ],
        [ CKEDITOR.CTRL + 83 /*S*/, 'save' ],
        
        [ CKEDITOR.ALT + 109 /*-*/, 'toolbarCollapse' ]
    ];

    config.toolbar_Full = [
    { 
        name: 'document',    
        groups: [ 'mode', 'document', 'doctools' ], 
        items: [ 'Source', 'Save', 'NewPage', 'DocProps', 'Preview', 'Print', 'Templates', 'document' ] 
    },
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
                'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock' 
                ] 
    },
    { 
        name: 'links', 
        items: [ 'Link', 'Unlink', 'Anchor' ] 
    },
    '/',
    { name: 'styles', items: [ 'Styles', 'Format', 'Font', 'FontSize' ] },
    { name: 'colors', items: [ 'TextColor', 'BGColor' ] },
    { name: 'tools', items: [ 'UIColor', 'Maximize', 'ShowBlocks' ] } 
  ];

  config.toolbar = "Full";

  

};
