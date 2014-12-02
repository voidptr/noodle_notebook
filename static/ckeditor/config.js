/**
 * @license Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */


CKEDITOR.editorConfig = function( config ) {

    //config.skin = 'kama';
    //config.skin = 'monoo';

    config.filebrowserImageUploadUrl = '/_upload';
    config.filebrowserUploadUrl = '/_upload';

    config.toolbarLocation = 'top';
    config.extraPlugins = 'allowsave,button-h1,button-h2,button-h3,button-h4,button-h5,button-h6,htmlbuttons,sourcedialog,print,allownow5,allowdate';

    config.htmlbuttons = [
        {
            name:'FormattedBox',
            icon:'ic_view_day_black_48dp.png',
            html:'<pre> </pre>',
            title:'Formatted Box'
        },
        {
            name:'FilePath',
            icon:'path-blue.png',
            html:'<strong><span style="color:#0000FF"> </span></strong>', 
            title:'Path'
        },
        {
            name:'Pink',
            icon:'weir-pink.png',
            html:'<strong><span style="color:#EE82EE"> </span></strong>',  
            title:'Laptop Pink'
        },
        {
            name:'Aqua',
            icon:'atlantis-blue.png',
            html:'<strong><span style="color:#40E0D0"> </span></strong>',  
            title:'Server Aqua'
        },
        {
            name:'Red',
            icon:'hpcc-red.png',
            html:'<strong><span style="color:#FF0000"> </span></strong>', 
            title:'Cluster Red'
        },
        {
            name:'Yellow',
            icon:'thor-yellow.png',
            html:'<strong><span style="color:#FFD700"> </span></strong>', 
            title:'Desktop Yellow'
        }

    ];

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

        [ CKEDITOR.CTRL + 56 /*8*/, 'bulletedlist' ],
        [ CKEDITOR.CTRL + CKEDITOR.SHIFT + 56 /*8*/, 'bulletedListStyle' ],

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
        items: [ 'Save', 'DocProps', 'Preview', 'Print', 'document' ] 
    },
    { 
        name: 'editing',     
        groups: [ 'find', 'selection', 'spellchecker' ], 
        items: [ 'Find', 'Replace', 
        //'SelectAll', 'Scayt' 
        ] 
    },
    { 
        name: 'insert', 
        items: [ 'CreatePlaceholder', 'Image', 'Flash', 'Table', 
        //'HorizontalRule', 
        'SpecialChar', 
        //'PageBreak', 
        'InsertPre' ]
    },
    { 
        name: 'butts', 
        items: [ 'CreatePlaceholder','FormattedBox', 'FilePath', 'Pink', 'Red', 'Aqua', 'Yellow',
        'InsertPre' ]
    },

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
    { 
        name: 'sourcedialog', 
        items: [ 'Sourcedialog' ] 
    },
    '/',
    { name: 'styles', items: [ 'Styles', 'Format', 'Font', 'FontSize' ] },
    { name: 'colors', items: [ 'TextColor', 'BGColor' ] },
    { name: 'tools', items: [ 'UIColor', 'Maximize', 'ShowBlocks' ] },
    { 
        name: 'datetime',           
        items: [ 'Now', 'Date' ] 
    }

  ];

  config.toolbar = "Full";

  

};
