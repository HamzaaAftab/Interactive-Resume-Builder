"use strict";

var _a;
// TypeScript: Toggle visibility for Skills section
const toggleButton = document.getElementById("toggle-skills");
const skillsSection = document.getElementById("skills-section");
toggleButton === null || toggleButton === void 0 ? void 0 : toggleButton.addEventListener("click", () => {
    if ((skillsSection === null || skillsSection === void 0 ? void 0 : skillsSection.style.display) === "none" || !(skillsSection === null || skillsSection === void 0 ? void 0 : skillsSection.style.display)) {
        skillsSection.style.display = "block";
    }
    else {
        skillsSection.style.display = "none";
    }
});
// TypeScript for Dynamic Resume Generation
// Grab form elements and output sections
const form = document.getElementById("resume-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const profilePictureInput = document.getElementById("profile-picture");
const educationInput = document.getElementById("education");
const workExperienceInput = document.getElementById("work-experience");
const skillsInput = document.getElementById("skills");
const outputName = document.getElementById("output-name");
const outputEmail = document.getElementById("output-email");
const outputProfilePicture = document.getElementById("output-profile-picture");
const outputEducation = document.getElementById("output-education");
const outputWorkExperience = document.getElementById("output-work-experience");
const outputSkills = document.getElementById("output-skills");
// Event listener for form submission
form.addEventListener("submit", function (e) {
    e.preventDefault();
    // Update resume with form data
    outputName.textContent = nameInput.value;
    outputEmail.textContent = emailInput.value;
    outputProfilePicture.src = profilePictureInput.value || "default-avatar.png";
    outputEducation.textContent = educationInput.value;
    outputWorkExperience.textContent = workExperienceInput.value;
    outputSkills.textContent = skillsInput.value;
    if (!nameInput.value || !emailInput.value || !educationInput.value || !workExperienceInput.value || !skillsInput.value) {
        alert("Please fill out all fields.");
    }
});
// Make the resume sections editable
document.querySelectorAll('.editable').forEach(section => {
    section.addEventListener('click', function () {
        const currentText = this.textContent || '';
        const newText = prompt("Edit this section:", currentText);
        if (newText !== null) {
            this.textContent = newText;
        }
    });
});
// Collect form data and generate the resume
(_a = document.getElementById("resume-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (e) {
    e.preventDefault();
    // Personal Information
    const name = document.getElementById("name").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const profilePicture = document.getElementById("profile-picture").value;
    // Education, Work, Skills
    const education = document.getElementById("education").value;
    const workExperience = document.getElementById("work-experience").value;
    const skills = document.getElementById("skills").value;
    // Update the generated resume
    document.getElementById("output-name").textContent = name;
    document.getElementById("output-username").textContent = username;
    document.getElementById("output-email").textContent = email;
    document.getElementById("output-profile-picture").src = profilePicture || '';
    document.getElementById("output-education").textContent = education;
    document.getElementById("output-work-experience").textContent = workExperience;
    document.getElementById("output-skills").textContent = skills;
    // Create unique URL based on username
    const uniqueUrl = `${window.location.origin}/resume/${username}`;
    history.pushState({}, '', `/resume/${username}`); // Change URL without reloading the page
    console.log("Unique URL generated:", uniqueUrl);
    // Copy Shareable Link Functionality
    const copyLinkButton = document.getElementById("copy-link");
    copyLinkButton === null || copyLinkButton === void 0 ? void 0 : copyLinkButton.addEventListener("click", () => {
        navigator.clipboard.writeText(uniqueUrl).then(() => {
            alert("Resume link copied to clipboard!");
        }).catch(err => {
            console.error("Failed to copy the link", err);
        });
    });
    // Download PDF Functionality
    // const downloadPdfButton = document.getElementById("download-pdf");
    // downloadPdfButton?.addEventListener("click", () => {
    //     const resumeElement = document.getElementById("resume");
    //     html2pdf().from(resumeElement).save(`${username}-resume.pdf`);
    // });
    // Download PDF Functionality using jsPDF
    const downloadPdfButton = document.getElementById("download-pdf");
    downloadPdfButton === null || downloadPdfButton === void 0 ? void 0 : downloadPdfButton.addEventListener("click", () => {
        const doc = new jsPDF();
        // Add text and resume data to the PDF
        doc.setFontSize(18);
        doc.text('Resume', 10, 10);
        doc.setFontSize(12);
        doc.text(`Name: ${name}`, 10, 20);
        doc.text(`Email: ${email}`, 10, 30);
        doc.text('Education:', 10, 40);
        doc.text(education, 10, 50);
        doc.text('Work Experience:', 10, 60);
        doc.text(workExperience, 10, 70);
        doc.text('Skills:', 10, 80);
        doc.text(skills, 10, 90);
        // Save the PDF with the username as the filename
        doc.save(`${username}-resume.pdf`);
    });
});
