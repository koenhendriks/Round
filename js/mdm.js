/**
 * Created by koen on 27-10-14.
 */

var username;

/**
 * Function called by mdm to add the users to the screen.
 *
 * @param username
 * @param gecos
 * @param status
 */
function mdm_add_user(username, gecos, status) {

    var picture = document.createElement('img');
    picture.setAttribute('class', "img-circle user-image");
    picture.setAttribute('src', "file:///home/"+username+"/.face");
    //picture.setAttribute('src', "http://placehold.it/120x120");
    picture.setAttribute('onerror', "this.src='file:///usr/share/pixmaps/nobody.png';");
    picture.setAttribute('username', username);
    picture.setAttribute('onclick', 'userClick(this)');
    picture.setAttribute('id', username+'-image');



    var user = '<input type="password" class="input-lg password" id="'+username+'-password" name="password" onkeypress="if (event.keyCode==13){ send_login()}"/>'+
        '<div class="row user" >'+
            '<div class="col-lg-12" id="'+username+'">'+
            '</div>'+
        '</div>';

    $('#user-list').append(user);
    $('#'+username).append(picture);

    cUsers++;
    fadeUsers();
}

/**
 * Sets an error
 *
 * @param message
 */
function mdm_timed(message) {
    if (message != "") {
        document.getElementById("error-container").style.display = 'block';
    }
    else {
        document.getElementById("error-container").style.display = 'none';
    }
    document.getElementById("error").innerHTML = message;
}

/**
 * Sets an error
 *
 * @param message
 */
function mdm_error(message) {
    if (message != "") {
        document.getElementById("error-container").style.display = 'block';
    }
    else {
        document.getElementById("error-container").style.display = 'none';
    }
    document.getElementById("error").innerHTML = message;
}

/**
 * Gets clock data (I don't like this format so I'm my own)
 *
 * @param data
 */
function set_clock(data){
    //console.log(data);
}

/**
 * Sets the welcome message
 *
 * @param message
 */
function set_welcome_message(message){
    if (message != "") {
        document.getElementById("mdm-welcome").style.display = 'block';
    }
    else {
        document.getElementById("mdm-welcome").style.display = 'none';
    }

    if(message == 'Please enter your username') {
        message = 'Please click the desired user.';
    }

    document.getElementById("mdm-welcome").innerHTML = message;
}

/**
 * Sets messages (by default 'Please enter your username')
 *
 * @param message
 */
function mdm_msg(message){
    //console.log("\n "+message);
    $('#mdm-message').html(message);
}

/**
 * Set current language
 *
 * @param lang
 */
function mdm_set_current_language(lang){
    //console.log("\n "+lang);
}

/**
 * Gets current mdm prompt
 *
 * @param prompt
 */
function mdm_prompt(prompt){
    //console.log("\n "+prompt);
}

/**
 * Hide shutdown button
 */
function mdm_hide_shutdown() {
    document.getElementById("shutdown").style.display = 'none';
}

/**
 * Hide suspend button
 */
function mdm_hide_suspend() {
    document.getElementById("suspend").style.display = 'none';
}

/**
 * Hide restart button
 */
function mdm_hide_restart() {
    document.getElementById("restart").style.display = 'none';
}

/**
 * Enable password field
 */
function mdm_enable(){
    $('.password').removeAttr('disabled');
}

/**
 * Disable password field
 */
function mdm_disable(){
    $('.password').attr('disabled','disabled');
}

/**
 * Input password for mdm
 * @param message
 */
function mdm_noecho(message) {
    mdm_enable();
    //this one        document.getElementById("label").innerHTML = message;
    document.getElementById(username+'-password').value = "";
    document.getElementById(username+'-password').focus();
}

/**
 * Add sessions to the page
 *
 * @param session_name
 * @param session_file
 */
function mdm_add_session(session_name, session_file) {

    session_name = session_name.replace("Ubuntu", "Unity");

    var li = document.createElement('li');

    var link = document.createElement('a');
    link.setAttribute('href', "javascript:alert('SESSION###"+session_name+"###"+session_file+"');select_session('"+session_name+"','"+session_file+"');");

    var name_div = document.createTextNode(session_name);

    li.appendChild(link);
    link.appendChild(name_div);

    var src = document.getElementById("sessions");
    src.appendChild(li);
}

/**
 * Action called on selected session
 *
 * @param session_name
 * @param session_file
 */
function select_session(session_name, session_file) {
    $('#session-button').html(session_name+' <span class="caret"></span>');
}

function mdm_add_language(){
    //@@TODO create language support
}
//mdm_add_user('test','test');
//mdm_add_user('test2','test2');
//mdm_add_user('test3','test3');