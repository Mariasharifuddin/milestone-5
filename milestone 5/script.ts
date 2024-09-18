// listing element
 
document.getElementById('resumeForm')?.addEventListener("submit", function(event) {
    event.preventDefault();

    // Type assertion (correct type casting)
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;
    const usernameElement = document.getElementById("username") as HTMLInputElement;

    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement && usernameElement) {
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;
        const username = usernameElement.value;
        const uniquePath = `${username.replace(/\s+/g,'')}_cv.html`;
        const resumeURL = `https://username.vercel.app/resumes/${uniquePath}`; // URL for sharing

        // Create resume output
        const resumeOutput = `
            <h2>Resume</h2>
            <p><strong>Name: </strong> <span class="editable">${name}</span></p>
            <p><strong>Email:</strong> <span class="editable">${email}</span></p>
            <p><strong>Phone Number:</strong> <span class="editable">${phone}</span></p>
            <h3>Education</h3>
            <p class="editable">${education}</p>
            <h3>Experience</h3>
            <p class="editable">${experience}</p>
            <h3>Skills</h3>
            <p class="editable">${skills}</p>
        `;

        // Create download link
        const downloadLink = document.createElement('a');
        downloadLink.href = "data:text/html;charset=utf-8," + encodeURIComponent(resumeOutput);
        downloadLink.download = uniquePath;
        downloadLink.textContent = "Download your 2024 Resume";

        // Create share link
        const shareLink = document.createElement('a');
        shareLink.href = resumeURL;
        shareLink.textContent = "Share your Resume";
        shareLink.target = "_blank"; // Open in new tab

        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.appendChild(downloadLink);
            resumeOutputElement.appendChild(document.createElement('br'));
            resumeOutputElement.appendChild(shareLink);
        }
    } else {
        console.error("One or more form elements are missing");
    }
});

// Add event listeners for editable elements directly
document.addEventListener("click", function(event) {
    const target = event.target as HTMLElement;
    if (target.classList.contains('editable')) {
        const currentElement = target;
        const currentValue = currentElement.textContent || "";
        if (currentElement.tagName === 'P' || currentElement.tagName === 'SPAN') {
            const input = document.createElement("input");
            input.type = 'text';
            input.value = currentValue;
            input.classList.add('editing-input');

            input.addEventListener('blur', function() {
                currentElement.textContent = input.value;
                currentElement.style.display = "inline";
                input.remove();
            });

            currentElement.style.display = "none";
            currentElement.parentNode?.insertBefore(input, currentElement);
            input.focus();
        }
    }
});



                