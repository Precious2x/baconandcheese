var txt;
var person = prompt("What is your age?:");
if (person == null|| person == ""){
    txt = "User cancelled prompt."
}else{
    var dob = new Date("13/11/2022");
    //calculate age difference from current date in time
    var age_diff = Date.now() - dob.getTime();
    
    //convert the calculated difference in date format
    var year_dt = new Date(month_diff); 
    
    //extract year from date    
    var age = year_dt.getUTCFullYear();
    
    //now calculate the year of the user
    var age = Math.abs(age - 2022);
    
    //display the calculated age
    document.write( age - year);
}  