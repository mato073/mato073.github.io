const openSideBar = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
}

const closeSideBar = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('active');
}