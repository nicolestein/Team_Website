function dateMessage(){
                var m_names = ["January", "February", "March",
                    "April", "May", "June", "July", "August", "September",
                    "October", "November", "December"
                ];

                var d_names = ["Sunday", "Monday", "Tuesday", "Wednesday",
                    "Thursday", "Friday", "Saturday"
                ];

                var myDate = new Date();
                myDate.setDate(myDate.getDate());
                var curr_date = myDate.getDate();
                var curr_month = myDate.getMonth();
                var curr_day = myDate.getDay();
                var curr_year = myDate.getFullYear();

return "Today is " + d_names[curr_day] + ", " + m_names[curr_month] + " " + curr_date + ", " + [curr_year];
}
