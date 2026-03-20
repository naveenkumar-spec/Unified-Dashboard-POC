const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    // hide all panels (both overview div and iframe wrappers)
    document.querySelectorAll('.dashboard, .iframe-wrapper').forEach(d => d.classList.remove('active'));

    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});

// Table tab toggle
document.querySelectorAll('.t-tab').forEach(t => {
  t.addEventListener('click', () => {
    document.querySelectorAll('.t-tab').forEach(x => x.classList.remove('active'));
    t.classList.add('active');
  });
});
