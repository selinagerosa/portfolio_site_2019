if( document.readyState !== 'loading' ) {
  ((localStorage.getItem('mode') || 'dark') === 'dark') ?
document.querySelector('body').classList.add('dark') :
document.querySelector('body').classList.remove('dark')
}
else {
document.addEventListener('DOMContentLoaded', (event) => {
  ((localStorage.getItem('mode') || 'dark') === 'dark') ?
  document.querySelector('body').classList.add('dark') :
  document.querySelector('body').classList.remove('dark')
});
}
