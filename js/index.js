function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.classList.add('hidden'));

    // Show the selected section
    const section = document.getElementById(sectionId);
    section.classList.remove('hidden');

    // Hide all subpages when a new section is selected
    const subpages = document.querySelectorAll('.dust2-subpage');
    subpages.forEach(subpage => subpage.classList.add('hidden'));
}

function showSubPage(subPageId) {
    // Hide all subpages
    const subpages = document.querySelectorAll('.dust2-subpage');
    subpages.forEach(subpage => subpage.classList.add('hidden'));

    // Show the selected subpage
    const subpage = document.getElementById(subPageId);
    subpage.classList.remove('hidden');
}

function showSidePage(sidePageId) {
    // Hide all subpages
    const subpages = document.querySelectorAll('.dust2-subpage');
    subpages.forEach(subpage => subpage.classList.add('hidden'));

    // Show the selected side page
    const sidePage = document.getElementById(sidePageId);
    sidePage.classList.remove('hidden');
}
