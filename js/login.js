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

$( document ).ready(function() {
    $('.user').click(function(){
        console.log($(this)[0].getAttribute('username'));
    })
});

function placeUsers(){
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    var userList = $('#user-list');
    var userListHeight = userList.height() / 2 ;
    var userListWidth = userList.width() / 2 ;

    if(cUsers > 2)
    {

        userList.css("top",(windowHeight / 2) - (60*cUsers));
    }
    else{
        userList.css("top",(windowHeight / 2) - userListHeight * 4);
    }

    userList.css("left",(windowWidth / 2) - userListWidth);

    userList.fadeIn(2000);
}

function mdm_add_user(username, gecos, status) {
    var user = '<div class="row user" username="'+username+'" >'+
                    '<div class="col-lg-12">'+
                        '<img src="img/user.jpg" class="img-circle user-image">'+
                    '</div>'+
               '</div>';
    $('#user-list').append(user);
    cUsers++;
    placeUsers();
}

mdm_add_user('test','test');

// Called by MDM if the SHUTDOWN command shouldn't appear in the greeter
function mdm_hide_shutdown() {
    document.getElementById("shutdown").style.display = 'none';
}

// Called by MDM if the SUSPEND command shouldn't appear in the greeter
function mdm_hide_suspend() {
    document.getElementById("suspend").style.display = 'none';
}

// Called by MDM if the RESTART command shouldn't appear in the greeter
function mdm_hide_restart() {
    document.getElementById("restart").style.display = 'none';
}
