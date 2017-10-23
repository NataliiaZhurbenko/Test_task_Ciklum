	function setEqualHeight(columns) {
		var highestСolumn = 0;
		columns.each(function() {
			currentHeight = $(this).height();
			if (currentHeight > highestСolumn) {
				highestСolumn = currentHeight;
			}
		});
		columns.height(highestСolumn);
	}

	$(document).ready(function() {
		setEqualHeight($(".main > .left"));
		$("#nav").menu({
			position: {
				at: "left bottom"
			}
		});
		$("#accordion").accordion({
			collapsible: true,
			activate: function(event, ui) {
				ui.newHeader.html('<span class="ui-accordion-header-icon ui-icon"></span>Click to close');
				ui.oldHeader.html('<span class="ui-accordion-header-icon ui-icon"></span>Click to open');
			}
		});
		$('.flag').on('click', function() {
			$(this).addClass('flag-opacity').siblings().removeClass('flag-opacity');
		});
	});