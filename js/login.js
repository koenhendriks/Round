/**
 * Created by koen on 17-10-14.
 */
getDate();
var cUsers = 0;
var open = false;
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
    username = $(self).attr('username');

    if(open == false){
        open = username;

        //Open clicked one
        $(self).css('margin-right', '350px');
        $('#'+username+'-password').css({
            opacity: 0,
            display: 'inline-block'
        }).animate({opacity:1},600);
    }else if(open != username){

        $('#'+open+'-password').fadeOut(400, function() {
            $('#'+open+'-password').val('');
            $('#'+open+'-image').css('margin-right', '0px');

            //Open clicked one
            $(self).css('margin-right', '350px');
            $('#'+username+'-password').css({
                opacity: 0,
                display: 'inline-block'
            }).animate({opacity:1},600);
            open = username;
        });
    }
   }

function fadeUsers(){
    var userList = $('#user-list');
    userList.fadeIn(2000);
}