/**
 * Created by koen on 27-10-14.
 */

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
    picture.setAttribute('onerror', "this.src='file:///usr/share/pixmaps/nobody.png';");

    var user = '<div class="row row-fluid user" onclick="userClick(this)" username="'+username+'" >'+
        '<div class="col-lg-6 offset5" id="'+username+'">'+
        '</div>'+
        '</div>';

    $('#user-list').append(user);
    $('#'+username).append(picture);
    cUsers++;
    fadeUsers();
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


//mdm_add_user('test','test');