function validateForm()
{
    var nameValid = checkName();
    var mailValid = checkEmail();
    var textValid = checkTextarea();
    return nameValid && mailValid && textValid;
}

function checkName()
{
    var fullName = document.forms["feedback"]["fullname"].value;
    var nameWarning = document.getElementById("nameValidation");
    return toggleWarning(nameWarning, fullName === "" || fullName === null);
}

function checkEmail()
{
    var email = document.forms["feedback"]["email"].value;
    var mailWarning = document.getElementById("mailValidation");
    return toggleWarning(mailWarning, !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email) || email === '' || email === null);
}

function checkTextarea()
{
    var textarea = document.forms["feedback"]["suggestion"].value;
    var textAreaWarning = document.getElementById("textAreaValidation");
    return toggleWarning(textAreaWarning, textarea.length < 50 || textarea === null);
}

function toggleWarning(warningElement, shouldShow)
{
    warningElement.style.display = shouldShow ? 'block' : 'none';
    return !shouldShow;
}