function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  
  document.getElementById('h').textContent = hours + ' : ';
  document.getElementById('m').textContent = minutes + ' : ';
  document.getElementById('s').textContent = seconds;
}

setInterval(updateTime, 1000);

updateTime();
