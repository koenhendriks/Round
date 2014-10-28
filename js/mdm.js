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
    //picture.setAttribute('src', "file:///home/"+username+"/.face");
    picture.setAttribute('src', "http://placehold.it/120x120");
    //picture.setAttribute('onerror', "this.src='file:///usr/share/pixmaps/nobody.png';");d
    picture.setAttribute('username', username);
    picture.setAttribute('onclick', 'userClick(this)');

    var user = '<div class="row user" >'+

        '<input type="password" class="input-lg password" id="'+username+'-password" name="password" />'+
        '<div class="col-lg-12" id="'+username+'">'+
        '</div>'+
        '</div>';

    $('#user-list').append(user);
    $('#'+username).append(picture);

    cUsers++;
    fadeUsers();
}

/**
 * Send the login data
 *
 * @returns {boolean}
 */
function send_login() {

    var password = document.getElementById("password").value;

    if (username == "" && password == "") {
        mdm_error("Please input valid login info.");
    } else if (username == "") {
        mdm_error("Please input a valid username.");
    } else if (password == "") {
        mdm_error("Please input a valid password.");
    } else {
        alert("LOGIN###" + password);
    }

    return false;
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
    //console.log("\n "+ message);
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
 * Add sessions to the page
 *
 * @param session_name
 * @param session_file
 */
function mdm_add_session(session_name, session_file) {

    session_name = session_name.replace("Ubuntu", "Unity");

    var filename = session_name.toLowerCase();
    filename = filename.replace(/ /g, "-");
    filename = filename.replace(/\(/g, "");
    filename = filename.replace(/\)/g, "");

    var li = document.createElement('li');

    var link = document.createElement('a');
    link.setAttribute('href', "javascript:alert('SESSION###"+session_name+"###"+session_file+"');select_session('"+session_name+"','"+session_file+"');");

    var name_div = document.createTextNode(session_name);

    li.appendChild(link);
    link.appendChild(name_div);

    var src = document.getElementById("sessions");
    src.appendChild(li);
}

mdm_add_user('test','test');
mdm_add_user('test2','test2');
mdm_add_user('test3','test3');