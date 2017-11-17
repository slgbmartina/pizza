function validateForm()
{
    var nameValidation = checkName();
    var emailValidation = checkEmail();
    var textAreaValidation = checkTextarea();
    return nameValidation && emailValidation && textAreaValidation;
}

function checkName()
{
    var fullName = document.forms["feedback"]["fullname"].value;
    var nameWarning = document.getElementById("nameValidation");
    if (fullName === "" || fullName === null) return toggleWarning(nameWarning, true);
    else return toggleWarning(nameWarning, false);
}

function checkEmail()
{
    var email = document.forms["feedback"]["email"].value;
    var mailWarning = document.getElementById("mailValidation");
    var splitAt = email.split("@");
    if (splitAt.length === 2) {
        var splitDot = splitAt[1].split(".");
        if (splitDot.length === 2) {
            return toggleWarning(mailWarning, false);
        }
    }
    else return toggleWarning(mailWarning, true);
}

function checkTextarea()
{
    var textarea = document.forms["feedback"]["suggestion"].value;
    var textAreaWarning = document.getElementById("textAreaValidation");
    if (textarea.length < 50 || textarea === null) return toggleWarning(textAreaWarning, true);
    else return toggleWarning(textAreaWarning, false);
}

function toggleWarning(warningElement, shouldShow)
{
    if (shouldShow)
    {
        warningElement.style.visibility = 'visible';
        warningElement.style.display = 'block';
        return false;
    }
    else
    {
        warningElement.style.visibility = 'hidden';
        warningElement.style.display = 'none';
        return true;
    }
}