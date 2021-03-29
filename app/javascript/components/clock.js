const clock = () => {

  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  // const seconds = time.getSeconds();

  document.querySelector(".clock").innerHTML = `${sidebar(hours)}:${sidebar(minutes)}`

  function sidebar(standIn) {
    if (standIn < 10) {
      standIn = '0' + standIn 
    }
    return standIn;
  }
  setInterval(clock, 1000);
};

export { clock };