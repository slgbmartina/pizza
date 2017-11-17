function validateForm()
{
    var form = document.getElementById("feedback");
    return checkName(form) && checkEmail(form) && checkTextarea(form);
}

function checkName(form)
{
    var fullName = document.forms["feedback"]["fullname"].value;
    var nameWarning = document.getElementById("nameValidation");
    if (fullName === "" || fullName === null) return toggleWarning(nameWarning, true);
    else return toggleWarning(nameWarning, false);
}

function checkEmail(form)
{
    var emailEl = document.getElementById("emailPara");
    var email = document.forms["feedback"]["email"].value;
    var splitAt = email.split("@");
    if (splitAt.length === 2) {
        var splitDot = splitAt[1].split(".");
        if (splitDot.length === 2) {
            if (emailCount > 0) {
                var emailWarning = document.getElementById("emailWarning");
                form.removeChild(emailWarning);
                emailCount--;
            }
            return true;
        }
    }
    else {
        if (emailCount === 0) {
            var warning = document.createElement("p");
            var emailText = document.createTextNode("Email must be of the form 'test@example.com'.");
            warning.appendChild(emailText);
            warning.setAttribute("id", "emailWarning");
            form.insertBefore(warning, emailEl.nextSibling);
            emailCount++;
            return false;
        }
    }
}

var textareaCount = 0;

function checkTextarea(form)
{
    var textareaEl = document.getElementById("textareaPara");
    var textarea = document.forms["feedback"]["suggestion"].value;
    var textAreaValidation = document.getElementById('textAreaValidation');
    var textWarning;
    if (textarea.length >= 50)
    {
        if (textAreaValidation.visibility === 'visible') textAreaValidation.visibility = 'hidden';
        return true;
    }
    else {
        if (textAreaValidation.visibility === 'hidden') textAreaValidation.visibility = 'visible';
        /**textWarning = document.createElement("p");
         var textText = document.createTextNode("Please write at least 50 characters.");
         textWarning.appendChild(textText);
         textWarning.setAttribute("id", "textWarning");
         feedback.insertBefore(textWarning, textareaEl.nextSibling);
         textareaCount++;**/
        return false;
    }
}

function toggleWarning(warningElement, shouldShow)
{
    if (shouldShow)
    {
        if (warningElement.visibility === 'hidden') warningElement.visibility = 'visible';
        return false;
    }
    else
    {
        if (warningElement.visibility === 'visible') warningElement.visibility = 'hidden';
        return true;
    }
}