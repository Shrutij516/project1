let input = document.querySelector('input');
        let button = document.querySelector('button');
        let message = document.querySelector('.message');

        button.addEventListener("click", displayMessage);
        function displayMessage(){
            name = input.value;
            message.innerText = `hello ${name} ${greet()}`
        }
        function greet(){
            let hours = new Date().getHours();
            if (hours < 12) {
                return "good morning";
            }
            else if (hours<18) {
                return "good afternoon";
            }
            else{
                return "good night";
            }
        }