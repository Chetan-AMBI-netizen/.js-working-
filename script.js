let btn = document.querySelector("#btn");
btn.onclick = (e) => {
    console.log(e.type);
     console.log(e.target);
      console.log(e.clientX);
       console.log(e.clientY);
    
    
    let para = document.querySelector("p");
    para.onmouseover = (evt) =>{
         console.log(evt.type);
          console.log(evt.target);
           console.log(evt.clientX);
            console.log(evt.clientY);
    }


    console.log("error try agin!");
    let a=403;
    a++;
    console.log(a);

}