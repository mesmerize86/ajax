$(function(){
	var $orders = $('#orders');
	var submit_button = $('#btn-submit');

	var $name = $('#input-name');
	var $drink = $('#input-drink');

	$.ajax({
		type: "GET",
		url: "api/order",
		success: function(orders){
			$.each(JSON.parse(orders), function(i, order){
				$orders.append('<li> Name: ' + order.name + ', Drink: ' + order.drink + '</li>');
			});
		},
		error: function(){
			console.log("Couldn't get order");
		}
	});

	$(submit_button).on('click', function(){

		var order = {
			name : $name.val(),
			drink : $drink.val()
		};

		$.ajax({
			type: "POST",
			url: "api/order",	
			data : order,
			dataType: "json",
			success: function(data){
				console.log(order);
				debugger;
				$orders.append('<li> Name: ' + data.name + ', Drink: ' + '</li>');
			},
			error: function(){
				console.log('Could not post data');
			}
		});
	})
}(jQuery));