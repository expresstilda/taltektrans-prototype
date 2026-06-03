// Прототип ТалТЭК Транс — минимальный JS
document.addEventListener('click', function(e){
  // мобильное меню
  if (e.target.closest('.burger')){
    document.querySelector('.nav')?.classList.toggle('open');
  }
  // имитация работы прототипа: заглушки на «неживых» действиях
  var lk = e.target.closest('[data-stub]');
  if (lk){
    e.preventDefault();
    alert(lk.getAttribute('data-stub'));
  }
});

// демо-отправка формы
document.addEventListener('submit', function(e){
  if (e.target.matches('#request-form')){
    e.preventDefault();
    e.target.style.display='none';
    document.getElementById('form-ok')?.removeAttribute('hidden');
  }
});
