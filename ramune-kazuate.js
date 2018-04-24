(function() {
    'use strict';

    var result = document.getElementById('result');
    var start = document.getElementById('start');
    var stop = document.getElementById('stop');
    var reset = document.getElementById('reset');
    var startTime;
    var isStarted = false;

    start.addEventListener('click', function() {
        if (isStarted === true) {
            return;
        }
        isStarted = true;
        startTime = Date.now();
    });

    stop.addEventListener('click', function() {
        var elapsedTime = (Date.now() - startTime) / 1000;
        var diff = elapsedTime - 5.0;

        if (isStarted === false) {
            return;
        }
        isStarted = false;
        
        result.textContent = elapsedTime.toFixed(1) + ' 秒';
        if (diff >= -0.5 && diff <= 0.5) {
            document.getElementById('ramune-img').src = 'goukaku.png';
        } else if (diff >= -1 && diff < -0.5) {
            document.getElementById('ramune-img').src = 'osii.png';
        } else if (diff > 0.5 && diff <= 1) {
            document.getElementById('ramune-img').src = 'osii.png';
        } else if (diff < -1) {
            document.getElementById('ramune-img').src = 'hayai.png';
        } else {
            document.getElementById('ramune-img').src = 'osoi.png';
        }
    });

    reset.addEventListener('click', function() {
        location.reload();
    });



})();
