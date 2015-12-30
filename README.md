# Nitro Ribbon
A user interface inspired by Microsoft Office for Mac OSX. Designed entirely with HTML5 less and JavaScript. Key principiles include:

* Fully configurable with js/json
* Built on jQuery
* Fast rendering
* Configurable with less

# Usage
Include the folllowing html at the top of your body section
```html
    <div class="nitro-ribbon" data-role="tabs">
        <div class="ribbon-header"></div>
        <div class="ribbon-content"></div>
    </div>
```
The two inner div tags are optional but they allow progressive rendering, making the menu load appear instant. The menu can then be rendered using the normal jQuery plugin syntax:

```javascript
$(".nitro-ribbon").ribbon(config)
```

See the example section for more information about the config option.
Menu elements can be fetched by the name set in the config. Elements are returned as jQuery objects:

```javascript
var a = $(".nitro-ribbon");
var button = a.ribbon('name-set-in-config');
button.click(function(){
    console.log("Button clicked")
})
```

# Development
Nitro Ribbon is still at the Beta stage. Pull requests and feature suggestions welcome.
All pull requests will be considered. Bower and Grunt are used to manage dependencies and build the project, respectivly. The following commands can be used to build the project from source:

```sh
git clone https://github.com/NitroLabs/nitro-ribbon.git nitro-ribbon
cd nitro-ribbon
npm install
bower install
grunt 
grunt watch
```

# Demo
This plugin is available as a [Meteor package](https://github.com/NitroLabs/meteor-ribbon)

There is also a live demo at [ribbon.meteor.com](http://ribbon.meteor.com). The source code for the demo is also on Github [https://github.com/NitroLabs/meteor-ribbon-demo](https://github.com/NitroLabs/meteor-ribbon-demo)

# Example
Include the css and js files from the build folder:
```html
<html>
    <head>
        <script type="text/javascript " src="/ribbon/build/css/ribbon.js"></script>
        <link rel="stylesheet" href="/ribbon/build/css/ribbon.css">
    </head>

    <body>
        <div class="nitro-ribbon" data-role="tabs">
            <div class="ribbon-header"></div>
            <div class="ribbon-content"></div>
        </div>
    </body>
```

Configure the menu with javascript
```javascript
$.ready(function(){
	var a = $('.nitro-ribbon')

	// Build the menu
	a.ribbon(config);

    // Attach click event to the folder button
	a.ribbon('folder-button').click(function(event){
		console.log('Folder button clicked');
	});

    // Attach click event to the share button
	a.ribbon('share-button').click(function(event){
		console.log('Share button clicked');
	});
}


var config = {
	title:'Example Document',
	titleLeft:[
		{
			type:'button',
			name:'folder-buttonx',
			glyph:'mif-folder'
		},
		{
			type:'button',
			name:'save-button',
			glyph:'mif-floppy-disk'
		}
	],

	titleRight:[
		{
			type:'button',
			name:'upload-button',
			glyph:'mif-upload'
		}
	],

	tabs: {
		Home:
			[
				[
					{
						type: 'big-button',
						name: 'email-button',
						label: 'Email',
						glyph: 'mif-envelop'
					},
					{
						type: 'big-button',
						name: 'image-button',
						label: 'Image',
						glyph: 'mif-file-picture',
						dropdown: [
							"Message",
							"Event",
							"Meeting",
							"Contact"
						]
					}
				],[
					{
						type: 'mini-button',
						name: 'notebook-save-button',
						label: 'Notebook Save',
						img: '/img/Notebook-Save.png'
					},
					{
						type: 'mini-button',
						name: 'folder-rename-button',
						label: 'Folder Rename',
						img: '/img/Folder-Rename.png'
					},
					{
						type: 'mini-button',
						name: 'image-button',
						label: 'Calendar Next',
						img: '/img/Calendar-Next.png',
						dropdown: [
							"Today",
							"Monday",
							"Tuesday",
							"Friday"
						]
					}
				],[
					{
						type: 'mini-button',
						name: 'notebook-save-image-button',
						img: '/img/Notebook-Save.png'
					},
					{
						type: 'mini-button',
						name: 'folder-rename-image-button',
						img: '/img/Folder-Rename.png'
					},
					{
						type: 'mini-button',
						name: 'calender-next-image-button',
						img: '/img/Calendar-Next.png'
					}
				],[
					{
						type: 'small-button',
						name: 'rocket-small',
						label: 'send',
						glyph: 'mif-rocket'
					},
					{
						type: 'small-button',
						name: 'comments-small',
						label: 'comment',
						glyph: 'mif-bubble',
						dropdown: [
							"Now",
							"Soon",
							"Later",
							"Never"
						]
					},
				]
			],
		Mailing:
			[
				[
					{
						type: 'big-button',
						name: 'email-button',
						label: 'Email',
						glyph: 'mif-envelop'
					},
					{
						type: 'big-button',
						name: 'drive-button',
						label: 'Google Drive',
						glyph: 'mif-drive'
					},
					{
						type: 'big-button',
						name: 'github-button',
						label: 'Github',
						glyph: 'mif-github'
					}
				]
			],
	}
}
```

# Dependecies
* jQuery
* handlebars (included)

# Credit
This package is actively maintained and supported by [NitroLabs](http://www.nitrolabs.com/).
Icon font and JavaScript widgets based on
[Metro UI CSS](https://metroui.org.ua/font.html)

# License
Apache 2.0

