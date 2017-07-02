$(function() {
	chrome.storage.sync.get(['total', 'goal'], function(items) {
		$('#total').text(items.total);
		$('#goal').text(items.goal);
	});

	$('#addAmount').click(function() {
		chrome.storage.sync.get(['total', 'goal'], function(items){
			var newTotal = 0;
			if (items.total) {
				newTotal = newTotal + parseInt(items.total);
			}

			var amount = $('#amount').val();
			if (amount) {
				newTotal = newTotal +  parseInt(amount);
			}

			chrome.storage.sync.set({'total': newTotal});

			$('#total').text(newTotal);
			$('#amount').val('');

			if (newTotal >= items.goal) {
				var opt = {
					type: "basic",
					title: "you just slacked!",
					message: "You've been slacking for " + items.goal + "!",
					iconUrl: "icon.png"
				}
				chrome.notifications.create('goalReached', opt, function(){ });
			}
		});
	});
});