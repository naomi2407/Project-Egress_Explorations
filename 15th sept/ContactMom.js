 $(document).ready(function () {
            navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
            // Determine if vibration is supported in this web browser
            if (!navigator.vibrate) {
                $('#supported').hide();
                return;
            }
            $('#unsupported').hide();
            // One second vibration
            $('#one').click(function () {
                navigator.vibrate(1000);
            });
            // Vibration pattern
            $('#pattern').click(function () {
                navigator.vibrate([500, 100, 250, 100, 1000]);
            });
            // 10 second vibration
            $('#ten').click(function () {
                navigator.vibrate(10000);
            });
            // Stop all vibrations
            $('#stop').click(function () {
                navigator.vibrate(0);
            });
        });
