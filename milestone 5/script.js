// listing element
var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    // Type assertion (correct type casting)
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    var usernameElement = document.getElementById("username");
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement && usernameElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var username = usernameElement.value;
        var uniquePath = "".concat(username.replace(/\s+/g, ''), "_cv.html");
        var resumeURL = "https://username.vercel.app/resumes/".concat(uniquePath); // URL for sharing
        // Create resume output
        var resumeOutput = "\n            <h2>Resume</h2>\n            <p><strong>Name: </strong> <span class=\"editable\">".concat(name_1, "</span></p>\n            <p><strong>Email:</strong> <span class=\"editable\">").concat(email, "</span></p>\n            <p><strong>Phone Number:</strong> <span class=\"editable\">").concat(phone, "</span></p>\n            <h3>Education</h3>\n            <p class=\"editable\">").concat(education, "</p>\n            <h3>Experience</h3>\n            <p class=\"editable\">").concat(experience, "</p>\n            <h3>Skills</h3>\n            <p class=\"editable\">").concat(skills, "</p>\n        ");
        // Create download link
        var downloadLink = document.createElement('a');
        downloadLink.href = "data:text/html;charset=utf-8," + encodeURIComponent(resumeOutput);
        downloadLink.download = uniquePath;
        downloadLink.textContent = "Download your 2024 Resume";
        // Create share link
        var shareLink = document.createElement('a');
        shareLink.href = resumeURL;
        shareLink.textContent = "Share your Resume";
        shareLink.target = "_blank"; // Open in new tab
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.appendChild(downloadLink);
            resumeOutputElement.appendChild(document.createElement('br'));
            resumeOutputElement.appendChild(shareLink);
        }
    }
    else {
        console.error("One or more form elements are missing");
    }
});
// Add event listeners for editable elements directly
document.addEventListener("click", function (event) {
    var _a;
    var target = event.target;
    if (target.classList.contains('editable')) {
        var currentElement_1 = target;
        var currentValue = currentElement_1.textContent || "";
        if (currentElement_1.tagName === 'P' || currentElement_1.tagName === 'SPAN') {
            var input_1 = document.createElement("input");
            input_1.type = 'text';
            input_1.value = currentValue;
            input_1.classList.add('editing-input');
            input_1.addEventListener('blur', function () {
                currentElement_1.textContent = input_1.value;
                currentElement_1.style.display = "inline";
                input_1.remove();
            });
            currentElement_1.style.display = "none";
            (_a = currentElement_1.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement_1);
            input_1.focus();
        }
    }
});
