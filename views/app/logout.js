const logoutBtn = document.querySelector('#logout-btn');

logoutBtn.addEventListener('click', async e => {
    try {
        await axios.get('/api/logout');
        window.location.pathname = '/';
    } catch (error) {
        console.log(error);
    }
});