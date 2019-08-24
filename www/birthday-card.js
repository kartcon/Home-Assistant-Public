class BirthdayCard extends HTMLElement {
	set hass(hass) {

// Birthday-calendar v1.2 (10.03.2019)


///// SETTINGS /////////////////////////////////////////////////////////////


		// Settings //

		var bdDeadSymbol = "&#8224;"; // (Symbol for people who have passed on - set «, d:1» in birthday list)
		var bdMarriedSymbol = "&#9829;";


		// String translations (translate these to your own language) //

		var bdTextToday = "Today"; // Today
		var bdTextTomorrow = "Tomorrow"; // Tomorrow
		var bdTextNone = "No birthdays in the next"; // No birthdays during next
		var bdTextDays = "days"; // days
		var bdTextYears = "years"; // years
		var bdTextIn = ""; // in


///// BIRTHDAY REGISTRY ////////////////////////////////////////////////////


		var birthdayList=[
			{name:"Art", day:16, month:4, year:1959},
			{name:"Steff", day:20, month:9, year:1953},
			{name:"Dad", day:22, month:4, year:1935},
			{name:"Mom", day:30, month:3, year:1943},
			{name:"Alan", day:12, month:10, year:1962},
			{name:"Chopper", day:14, month:2, year:2005},
			{name:"Sydney", day:14, month:5, year:1984},
			{name:"Turbo", day:14, month:6, year:1997},
			{name:"Pheobe", day:31, month:8, year:1990},
			{name:"Sami", day:1, month:9, year:2009},
			{name:"Bubba", day:20, month:11, year:1980},
			{name:"Rufus", day:1, month:8, year:1996},
			{name:"Nitro", day:26, month:9, year:2006},
			{name:"Sunbeam", day:28, month:7, year:1990},
			{name:"Logan", day:4, month:6, year:2006},
			{name:"Skylar", day:25, month:5, year:1999},
			{name:"Gretchen", day:1, month:6, year:1969},
			{name:"Mandi", day:15, month:6, year:1986},
			{name:"Alex", day:25, month:10, year:1972},
			{name:"Tim", day:22, month:12, year:1978},
			{name:"Matt", day:7, month:1, year:1980},
			{name:"Alex & Gretchen", day:28, month:8, year:2010, s:2},
			{name:"Matt & Mandi", day:31, month:8, year:2017, s:2},
			{name:"Mom & Dad", day:31, month:12, year:1958, s:2},
			{name:"Art & Steff", day:18, month:9, year:1982, s:2}
		];


///// DO NOT EDIT BELOW THIS LINE //////////////////////////////////////////


		if (!this.content) {
			const card = document.createElement('ha-card');
			var tittel = this.config.title;
			card.header = tittel ? tittel : "Birthdays"; // Card title from ui-lovelace.yaml - Defaults to Birthdays
			this.content = document.createElement('div');
			this.content.style.padding = '0 16px 16px';
			card.appendChild(this.content);
			this.appendChild(card);
		}

		const entityId = this.config.entity;
		const state = hass.states[entityId];
		const stateStr = state ? state.state : 'unavailable';
		const numberOfDays = this.config.numberofdays ? this.config.numberofdays : 14; //Number of days from today upcomming birthdays will be displayed - default 14


		var current = new Date();
		var currentMonth = current.getMonth();
		var currentDay = current.getDate();
		var currentYear = current.getFullYear();
		var currentDayTS = new Date(currentYear, currentMonth, currentDay).getTime();
		var oneDay = 24*60*60*1000;


		for(var i = 0; i < birthdayList.length; i++) {
			var obj = birthdayList[i];

			if ( ((obj.month-1) < currentMonth) || ( ((obj.month-1) == currentMonth) && (obj.day < currentDay) ) ) {
				// Birthday passed in current year - add one year to throw date to next birthday
				obj.ts = new Date((currentYear+1), (obj.month-1), obj.day).getTime();
				obj.aPlus = 1;
			} else {
				// Birthday to come current year
				obj.ts = new Date(currentYear, (obj.month-1), obj.day).getTime();
				obj.aPlus = 0;
			}

			obj.diff = Math.round( Math.abs( (currentDayTS - obj.ts)/(oneDay) ) );

			if ( obj.diff > numberOfDays) { obj.ts = 0; }
		}

		var sortertListe = birthdayList.sort((a, b) => (a.ts > b.ts) ? 1 : ((b.ts > a.ts) ? -1 : 0));
		var birthdayToday = "";
		var birthdayNext = "";

		for(var i = 0; i < sortertListe.length; i++) {

			var obj = sortertListe[i];

			if (obj.year > 0) {
				var age = "(" + (currentYear - obj.year + obj.aPlus) + " " + bdTextYears + ")";
			} else {
				var age = "";
			}

			var bdSymbol = "";
			if (obj.s == 1) { bdSymbol = " " + bdDeadSymbol; }
			if (obj.s == 2) { bdSymbol = " " + bdMarriedSymbol; }

			if (((obj.month-1) == currentMonth) && (obj.day == currentDay)) {

				birthdayToday = birthdayToday + "<div class='bd-wrapper bd-today'><ha-icon class='ha-icon entity on' icon='mdi:crown'></ha-icon><div class='bd-name'>" + obj.name + " " + age + bdSymbol + "</div><div class='bd-when'>" + bdTextToday + "</div></div>";

			} else if (obj.ts != 0) {

				var dbExpr = obj.diff == 1 ? bdTextTomorrow : bdTextIn + " " + obj.diff + " " + bdTextDays;
				birthdayNext = birthdayNext + "<div class='bd-wrapper'><ha-icon class='ha-icon entity' icon='mdi:calendar-clock'></ha-icon><div class='bd-name'>" + obj.name + " " + age + bdSymbol + "</div><div class='bd-when'>" + dbExpr + " (" + obj.month + "/" + obj.day + ")</div></div>";

			}
		}


		var cardHtmlStyle = `
		<style>
			.bd-wrapper {
				padding: 5px;
				margin-bottom: 5px;
			}
			.bd-wrapper:last-child {
				OFFborder-bottom: none;
			}
			.bd-divider {
				height: 1px;
				border-bottom: 1px solid rgba(127, 127, 127, 0.7);
				margin-bottom: 5px;
			}
			.bd-today {
				font-weight: bold;
				OFFborder-bottom: 1px solid;
			}
			.bd-wrapper .ha-icon {
				display: inline-block;
				height: 20px;
				width: 20px;
				margin-left: 5px;
				margin-right: 17px;
				color: var(--paper-item-icon-color);
			}
			.bd-wrapper .ha-icon.on {
				margin-left: 5px;
				margin-right: 17px;
				color: var(--paper-item-icon-active-color);
			}
			.bd-name {
				display: inline-block;
				padding-left: 10px;
				padding-top: 2px;
			}
			.bd-none {
				color: var(--paper-item-icon-color);
			}
			.bd-when {
				display: inline-block;
				float: right;
				font-size: smaller;
				padding-top: 3px;
			}
		</style>
		`;

		if (!birthdayToday && !birthdayNext) {
			var cardHtmlContent = "<div class='bd-none'>" + bdTextNone + " " + numberOfDays + " " + bdTextDays + "</div>";
		} else if (!birthdayToday) {
			var cardHtmlContent = birthdayNext;
		} else if (!birthdayNext) {
			var cardHtmlContent = birthdayToday;
		} else {
			var cardHtmlContent = birthdayToday + "<div class='bd-divider'></div>" + birthdayNext;
		}

		this.content.innerHTML = cardHtmlStyle + cardHtmlContent;

	}



	setConfig(config) {
		this.config = config;
	}

// The height of your card. Home Assistant uses this to automatically distribute all cards over the available columns.
	getCardSize() {
		return 3;
	}
}

customElements.define('birthday-card', BirthdayCard);
