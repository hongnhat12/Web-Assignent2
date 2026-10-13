// Course Modal Data
const courses = {
    html: {
        title: 'HTML',
        desc: 'HTML stands for HyperText Markup Language. It creates the structure of a web page using headings, paragraphs, images, and links.'
    },
    css: {
        title: 'CSS',
        desc: 'CSS stands for Cascading Style Sheets. It controls the appearance of web pages, including colors, fonts, spacing, and attractive layouts.'
    },
    bootstrap: {
        title: 'Bootstrap',
        desc: 'Bootstrap is a front-end framework. It provides ready-made components and a responsive grid system to build websites quickly.'
    },
    javascript: {
        title: 'JavaScript',
        desc: 'JavaScript is a programming language that makes web pages interactive. It can handle button clicks, form validation, popups, and dynamic content.'
    }
};

// Course Modal Trigger
const modalTitle = document.getElementById('modalCourseTitle');
const modalContent = document.getElementById('modalCourseContent');
const courseButtons = document.querySelectorAll('.btn-course');

courseButtons.forEach(button => {
    button.addEventListener('click', () => {
        const courseKey = button.getAttribute('data-course');
        const course = courses[courseKey];
        if (course) {
            modalTitle.textContent = course.title;
            modalContent.textContent = course.desc;
        }
    });
});
