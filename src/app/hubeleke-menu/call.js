$(function() {

		$('#rotate-menu').rMenu();

		$('#example-1').rMenu({
			menuSize			: 200,
			image				: false,
			linkPadding			: 5,
			contentWrapper		: '.example-1',
		});

		$('#example-2').rMenu({
			menuSize			: 200,
			border				: false,
			imageSize			: 150,
			contentWrapper		: '.example-2',
		});

		$('#example-3').rMenu({
			menuSize			: 200,
			imageSize			: 150,
			linkPadding			: 10,
			linkSize			: 14,
			contentWrapper		: '.example-3',
		});

		$('#example-4').rMenu({
			menuSize			: 420,
			menuRotateDuration	: 1500,
			borderColor			: '#ff5d60',
			imageSize			: 320,
			imageBorderColor	: '#ff5d60',
			imageOverlayBgColor	: '#ff5d60',
			linkSize			: 18,
			contentWrapper		: '.example-4',
		});

		$('#example-5').rMenu({
			borderColor			: '#2c9ded',
			borderSize			: 5,
			imageBorderColor	: '#2c9ded',
			imageOverlayBgColor	: '#2c9ded',
			contentType			: 'ajax',
			contentWrapper		: '.example-5',
			onAjaxLoaded		: function() {
				console.log('Example-5 ajax loaded');
				$('.example-5 code').each(function(i, block) {
					hljs.highlightBlock(block);
				});
			}
		});

		$('#example-6').rMenu({
			menuSize			: 350,
			imageSize			: 250,
			imageBorderSize		: 7,
			imageBorderColor	: '#7ac504',
			imageOverlayBgColor	: '#eee',
			borderColor			: '#73008c',
			linkColor			: '#416a00',
			contentWrapper		: '.example-6'
		});

		$('#example-7').rMenu({
			menuSize			: 300,
			imageSize			: 150,
			imageBorderColor	: '#025c6f',
			imageOverlayBgColor	: '#eee',
			borderColor			: '#025c6f',
			linkColor			: '#025c6f',
			contentWrapper		: '.example-7',
			onBeforeLoad		: function() {
				console.log('Example-7 started loading')
			},
			onAfterLoad			: function() {
				console.log('Example-7 finished loading')
			},
			onMenuClick			: function() {
				console.log('Menu item clicked on example-7')
			}
		});

		$('.fancybox').fancybox();

		hljs.initHighlightingOnLoad();

	})
