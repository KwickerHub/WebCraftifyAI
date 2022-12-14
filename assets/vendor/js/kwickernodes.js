
  document.addEventListener("DOMContentLoaded",e=>
  {(async () => {
    let blob = await fetch(
      "https://raw.githubusercontent.com/MaverickDe/acetoolscms/main/kwikertools.js"
    );
   
    blob.text().then((e) => {
      
     

      let script_ = document.createElement("script");
     
      script_.innerHTML =
        e + `init (document.getElementById("the_dev_dashboard"))`;
      document.querySelector("body").appendChild(script_);

      
    });
  })()}
  )

