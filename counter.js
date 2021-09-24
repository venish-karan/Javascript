// let count = 0;

if(!localStorage.getItem('count')) {
    localStorage.setItem('counter', 0);
}
            // const heading = document.querySelector('h1');
function Counter() {
    let count = localStorage.getItem('count');
    count++;
                // alert("Count is now "+ count);
                // heading.innerHTML = count;
    document.querySelector('h1').innerHTML = count;
    localStorage.setItem('count', count);

    // if(count%10 === 0) {
    //     alert(`Reached count ${count}`);
    //         }
}
           // event listner  
           // DOMContentLoaded what does is that after whole page or event is loaded then check for the element in it
document.addEventListener('DOMContentLoaded',function() {
    document.querySelector('h1').innerHTML = localStorage.getItem('count');
document.querySelector('button').onclick = Counter; 
          //in javascript functions can be treated as a values of their own.
         //document.querySelector('button').addEventListener('click', counter);

    //  setInterval(Counter, 1000);
});
        //    document.addEventListener('click', <name_of_function>);
        //    document.addEventListener('scroll', <name_of_function>);