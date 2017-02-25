$(document).ready(function() {
	$('#ipt1').numberspinner({
		min:5,
		max:120,
		onChange: function(){
			if(236-$('#ipt1').val()-$('#ipt2').val()-$('#ipt3').val()-$('#ipt4').val()<0){
				$('#ipt1').numberspinner('setValue',236-$('#ipt2').val()-$('#ipt3').val()-$('#ipt4').val());
			}
			$('#vv').text(236-$('#ipt1').val()-$('#ipt2').val()-$('#ipt3').val()-$('#ipt4').val());
		}
	});
	$('#ipt2').numberspinner({
		min:5,
		max:120,
		onChange: function(){
			if(236-$('#ipt1').val()-$('#ipt2').val()-$('#ipt3').val()-$('#ipt4').val()<0){
				$('#ipt2').numberspinner('setValue',236-$('#ipt1').val()-$('#ipt3').val()-$('#ipt4').val());
			}
			$('#vv').text(236-$('#ipt1').val()-$('#ipt2').val()-$('#ipt3').val()-$('#ipt4').val());
		}
	});
	$('#ipt3').numberspinner({
		min:5,
		max:120,
		onChange: function(){
			if(236-$('#ipt1').val()-$('#ipt2').val()-$('#ipt3').val()-$('#ipt4').val()<0){
				$('#ipt3').numberspinner('setValue',236-$('#ipt1').val()-$('#ipt2').val()-$('#ipt4').val());
			}
			$('#vv').text(236-$('#ipt1').val()-$('#ipt2').val()-$('#ipt3').val()-$('#ipt4').val());
		}
	});
	$('#ipt4').numberspinner({
		min:5,
		max:120,
		onChange: function(){
			if(236-$('#ipt1').val()-$('#ipt2').val()-$('#ipt3').val()-$('#ipt4').val()<0){
				$('#ipt4').numberspinner('setValue',236-$('#ipt1').val()-$('#ipt2').val()-$('#ipt3').val());
			}
			$('#vv').text(236-$('#ipt1').val()-$('#ipt2').val()-$('#ipt3').val()-$('#ipt4').val());
		}
	});
});

