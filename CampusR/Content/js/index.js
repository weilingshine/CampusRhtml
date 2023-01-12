(function(){
	var ui = {
		button: document.querySelector('.btn-float'),
		menuItems: document.querySelectorAll('.menu-float__item'),
		menu: document.querySelector('.menu-float')
	}

	var controlMenu = function() {
		ui.button.classList.toggle('btn-float--active');
		ui.menu.classList.toggle('menu-float--hidden');

		// For accessibility
		ui.button.toggleAttributeBoolean('aria-expanded');
		ui.menu.toggleAttributeBoolean('aria-hidden');
	}

	var init = function() {
			ui.button.addEventListener('click', controlMenu);			
	}();

	var isAttributeValueBoolean = function(value) {
		return (/^(true|false)$/g.test(value));
	}

	// Switch value between 'true' or 'false'
	Element.prototype.toggleAttributeBoolean = function(attr) {
		var attrivuteValue = this.getAttribute(attr);
		
		if(isAttributeValueBoolean(attrivuteValue)) {
			this.setAttribute(attr, attrivuteValue === 'true' ? 'false' : 'true');
			return this.getAttribute(attr);
		}

		throw new Error('The attribute does not exist or its value is not a Boolean');
	};

})();