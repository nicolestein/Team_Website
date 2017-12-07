function dateMessage(){
    var m_names = ["January", "February", "March",
                    "April", "May", "June", "July", "August", "September",
                    "October", "November", "December"
                ];
    var d_names = ["Sunday", "Monday", "Tuesday", "Wednesday",
                    "Thursday", "Friday", "Saturday"
                ];
    var ending = "";
    var myDate = new Date();
    var curr_date = myDate.getDate();
    var curr_month = myDate.getMonth();
    var curr_day = myDate.getDay();
    var curr_year = myDate.getFullYear();

    if(curr_date == 1 || curr_date == 21 || curr_date == 31) {
        ending = "st";
    }
    else if(curr_date == 2 || curr_date == 22) {
        ending = "nd";
    }
    else {
      ending = "th";
    }

    return "Today is " + d_names[curr_day]+ ", " + m_names[curr_month] + " " + curr_date + "" + ending + ", " + [curr_year];
}


function greeting() {
    var d = new Date();
    var day = d.getDay();
    var hour = d.getHours();
    if (hour < 12) {
        if (day == 6 || day == 0) {
            return "Go back to sleep, its the weekend!";
        } else if (day == 1) {
            return "Ugh, its Monday morning...";
        } else {
            return "Good morning!";
        }
    } else if (hour > 12 && hour < 20) {
        if (day == 6 || day == 0) {
            return "Hope you are having a great weekend!";
        } else {
            return "Good Day!";
        }
    } else {
        if (day == 0) {
            return "Enjoy your evening...tomorrow is Monday!";
         {
                return "Good Evening!";
        }
    }
}
   }
