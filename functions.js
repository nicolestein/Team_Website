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
