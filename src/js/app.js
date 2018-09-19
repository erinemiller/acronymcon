var app = new Vue({
	el: "#app",
	data: {
		newName: "",
		newEmail: "",
		people: [
			// {
			// image: "",
			// name: "Erin Miller",
			// email: "erinemillerr@gmail.com",
			// timestamp: ""
			// }
		]
	},

	methods: {
		addPerson: function(){
			console.log( "add person")

			if(this.people.length >= 5){ // if there are 3 or more peopole
				this.people.shift() // remove the oldest person
			}

// let timeFormatted = new Date().getHours();
// let pm = false;
// if ( timeFormatted > 12 ) {
// 	timeFormatted -= 12;
// 	pm = true
// }

// timeFormatted += ":" + new Date().getMinutes();
// if (pm) {
// 	timeFormatted += "pm" 
// 	} else {
// 	timeFormatted += "am"
// 	}
// }

			// let timeFormatted = moment().format('LT');
			// moment.js for date tags * insert script tag *

			let newPerson = {
				image: "https://www.gravatar.com/avatar/" + md5(this.newEmail),
				name: this.newName,
				email: this.newEmail,
				// timestamp: timeFormatted
				timestamp: new Date().getTime(),
				timeSinceCheckin: 0
			} 

			this.newEmail = ''
			this.newName = ''
			this.people.push( newPerson ) // add to end

			//bonus
			
			setInterval(function() {
			   newPerson.timeSinceCheckin++
			}, 60*1000)

			// after submitting, focus on the first form field
			this.$refs.name.focus() 
			
		}
	}
})




/*

user types name and email, clicks submit, info comes up

user types name and email, clicks event happens to buttom, info comes up

user types name and email ( vue takes value  puts in the data), 
clicks event happens to buttom, info comes up

user types name and email ( vue takes value  puts in the data), 
clicks event happens to buttom, vue puts a person LI in the DOM

user types name and email ( vue takes value  puts in the data), 
clicks event happens to buttom, make person object from entered data,
add person data to people array, vue puts a person LI in the DOM,
based on people array

 */)