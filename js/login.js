/**
 * Created by koen on 17-10-14.
 */
getDate();
var cUsers = 0;
/**
 * Sets the date in left top corner
 */
function getDate(){
    var faCal = '<i class="fa fa-calendar-o"></i> ';
    var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    var dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday", "Friday", "Saturday"];

    var today = new Date();
    var month = monthNames[today.getMonth()];
    var d = dayNames[today.getDay()];
    var date = today.getDate();

    document.getElementById('date-header').innerHTML = faCal + d +' '+date+' '+ month;
}

function userClick(self){
    console.log($(self).attr('username'));
    mdm_msg('Please insert your password');
    $('#mdm-message').show();
}

function fadeUsers(){
    var userList = $('#user-list');
    userList.fadeIn(2000);
}
