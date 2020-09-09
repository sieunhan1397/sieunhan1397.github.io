var count = new Date('Sep 11, 2020 00:00:00').getTime();
const daysView = document.querySelector('#days');
const hoursView = document.querySelector('#hours');
const minutesView = document.querySelector('#minutes');
const secondsView = document.querySelector('#seconds');
const displayAnimation = document.querySelector('.flex-container');
displayAnimation.style.display = 'none';
var x = setInterval(() => {
  var now = new Date().getTime();
  var d = count - now;
  if (d <= 0) {
    clearInterval(x);
    document.querySelector('.count').style.display = 'none';
    document.querySelector('h2').style.display = 'none';
    document.querySelector('h1').textContent = 'Happy Birth Day';
    // document.querySelector("h1").style.fontSize = "70px";
    document.querySelector('h1').className = 'lato';
    document.querySelector('.flex-container').style.display = 'flex';
    document.querySelector('.far').addEventListener('click', function () {
      let index = 0;
      let flag = false;
      while (index < 5) {
        let question_1 = prompt(
          'Trường ĐH mà chúng mình cùng học tên là gì ? (Viết tắt)'
        );
        console.log(question_1.toLowerCase());
        if (!question_1.toLowerCase().includes('tdt')) {
          alert('Ai vậy...không phải Bông Gòn rồi :(((');
          break;
        }
        let question_2 = prompt('Chúng mình quen nhau qua ứng dụng nào ?');
        if (question_2.toLowerCase().trim() !== 'slowly') {
          alert('Bạn là ai...bạn đi ra đi :(((');
          break;
        }
        let question_3 = prompt(
          'Bài nhạc em gửi bảo anh nên nghe khi ở một mình là bài nào ?'
        );
        if (!question_3.includes('12')) {
          alert('Buồn quá bạn eyyyy :(((');
          break;
        }
        let question_4 = prompt(
          'Bộ anime đầu tiên xem cùng nhau trên Discord tên gì ? (Tên tiếng anh, có 2 chữ)'
        );
        if (question_4.toLowerCase().trim() !== 'hello world') {
          alert('Gớt nước mắt :(((');
          break;
        }
        let question_5 = prompt(
          'Biệt danh đầu tiên anh đặt cho em là gì ? (Có 3 chữ)'
        );
        if (question_5.toLowerCase().trim() !== 'wibu mới nhú') {
          alert('Còn gì nữa đâu mà khóc với sầu..');
          break;
        }
        index = 5;
        flag = true;
      }

      if (flag === true) {
        document.querySelector('i').className = 'fa fa-heart';
        document.querySelector('i').style.color = 'red';
        const audio = document.getElementById('my_audio');
        audio.muted = false;
        audio.play();
        audio.onended = function () {
          alert(
            'This present is not valuable itself, but it is a souvenir hereto, it brings all most my warm sentiment. Happy birthday to you. ^^'
          );
          let clickBtn = document.querySelector('.btn');
          clickBtn.disabled = false;
          clickBtn.classList.add('btn-red');
          clickBtn.textContent = 'Click me Onee-chan <3';
          clickBtn.style.cursor = 'pointer';
        };
      }
    });
  } else {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;
    let days = Math.floor(d / day),
      hours = Math.floor((d % day) / hour),
      minutes = Math.floor((d % hour) / minute),
      seconds = Math.floor((d % minute) / second);
    daysView.textContent = days;
    hoursView.textContent = hours;
    minutesView.textContent = minutes;
    secondsView.textContent = seconds;
  }
}, 1000);
