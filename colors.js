document.addEventListener('DOMContentLoaded', function() {
            // // change font color to red
            // document.querySelector('#red').onclick = function() {
            //     document.querySelector('#hello').style.color = 'red';
            // };
            // // change font color to blue
            // document.querySelector('#blue').onclick = function() {
            //     document.querySelector('#hello').style.color = 'blue';
            // };
            // // change font color to green
            // document.querySelector('#green').onclick = function() {
            //     document.querySelector('#hello').style.color = 'green';
            // };
            document.querySelectorAll('button').forEach(function(button) {
                button.onclick = function() {
                    document.querySelector('#hello').style.color = button.dataset.color;
                }
            });
        });
        // also you can use this notation => for function
        // document.querySelectorAll('button').forEach(button => {
        //         button.onclick = () => {
        //             document.querySelector('#hello').style.color = button.dataset.color;
        //         }
        //     });
        // });