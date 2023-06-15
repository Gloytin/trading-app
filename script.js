function openNav() { 
        document.getElementById("navbar").style.display = "flex";
        document.getElementById("navbar").style.opacity = "1";
        document.getElementById("glory").style.display = "none";
}


function closeNav() {
        document.getElementById("navbar").style.display = "none";
        document.getElementById("glory").style.display = "block";
};

let lite = document.getElementById("lite");
let web3 = document.getElementById("web3");
let pro = document.getElementById("pro");

lite.addEventListener('click', () => {
      lite.style.backgroundColor = "white";
      lite.style.color = "black";
      web3.style.backgroundColor = "transparent";
      web3.style.color = "white";
      pro.style.backgroundColor = "transparent";
      pro.style.color = "white";
      document.getElementById("web3-").style.display = "none";
      document.getElementById("pro-").style.display = "none";
      document.getElementById("lite-").style.display = "flex";
});

web3.addEventListener('click', () => {
        lite.style.backgroundColor = "transparent";
        lite.style.color = "white";
        web3.style.backgroundColor = "white";
        web3.style.color = "black";
        pro.style.backgroundColor = "transparent";
        pro.style.color = "white";
      document.getElementById("lite-").style.display = "none";
      document.getElementById("web3-").style.display = "flex";
      document.getElementById("pro-").style.display = "none";
  });

  pro.addEventListener('click', () => {
        lite.style.backgroundColor = "transparent";
        lite.style.color = "white";
        pro.style.backgroundColor = "white";
        pro.style.color = "black";
        web3.style.backgroundColor = "transparent";
        web3.style.color = "white";
      document.getElementById("web3-").style.display = "none";
      document.getElementById("pro-").style.display = "flex";
      document.getElementById("lite-").style.display = "none ";
  });


let about = document.getElementById("about");
  about.addEventListener('click', () => {
        document.getElementById("about-list").style.display = "block";
        document.getElementById("down").style.display = "none";
        document.getElementById("up").style.display = "flex";
  });

let up = document.getElementById("up");
  up.addEventListener('click', () => {
        document.getElementById("about-list").style.display = "none";
        document.getElementById("down").style.display = "flex";
        document.getElementById("up").style.display = "none";

  });

  let product = document.getElementById("product");
  product.addEventListener('click', () => {
        document.getElementById("product-list").style.display = "block";
        document.getElementById("down2").style.display = "none";
        document.getElementById("up2").style.display = "flex";
  })


  let up2 = document.getElementById("up2");
  up2.addEventListener('click', () => {
        document.getElementById("product-list").style.display = "none";
        document.getElementById("down2").style.display = "flex";
        document.getElementById("up2").style.display = "none";

  });

let service = document.getElementById("service");
  service.addEventListener('click', () => {
      document.getElementById("up3").style.display = "flex";
      document.getElementById("service-list").style.display = "flex";
      document.getElementById("down3").style.display = "none"
  })

  let up3 = document.getElementById("up3");
  up3.addEventListener('click', () => {
        document.getElementById("service-list").style.display = "none";
        document.getElementById("down3").style.display = "flex";
        document.getElementById("up3").style.display = "none";

  });


let support = document.getElementById("support");
  support.addEventListener('click', () => {
      document.getElementById("up4").style.display = "flex";
      document.getElementById("support-list").style.display = "flex";
      document.getElementById("down4").style.display = "none"
  })

let up4 = document.getElementById("up4");
  up4.addEventListener('click', () => {
        document.getElementById("support-list").style.display = "none";
        document.getElementById("down4").style.display = "flex";
        document.getElementById("up4").style.display = "none";
  });


let buyCrypto = document.getElementById("buyCrypto");
  buyCrypto.addEventListener('click', () => {
      document.getElementById("up5").style.display = "flex";
      document.getElementById("buyCrypto-list").style.display = "flex";
      document.getElementById("down5").style.display = "none"
  })

let up5 = document.getElementById("up5");
up5.addEventListener('click', () => {
        document.getElementById("buyCrypto-list").style.display = "none";
        document.getElementById("down5").style.display = "flex";
        document.getElementById("up5").style.display = "none";
  });

let cryptoCalculator = document.getElementById("cryptoCalculator");
cryptoCalculator.addEventListener('click', () => {
      document.getElementById("up6").style.display = "flex";
      document.getElementById("cryptoCalculator-list").style.display = "flex";
      document.getElementById("down6").style.display = "none"
  })

let up6 = document.getElementById("up6");
up6.addEventListener('click', () => {
        document.getElementById("cryptoCalculator-list").style.display = "none";
        document.getElementById("down6").style.display = "flex";
        document.getElementById("up6").style.display = "none";
  });

let grow = document.getElementById("grow");
grow.addEventListener('click', () => {
        document.getElementById("up7").style.display = "flex";
        document.getElementById("grow-list").style.display = "flex";
        document.getElementById("down7").style.display = "none"
    })
  
  let up7 = document.getElementById("up7");
  up7.addEventListener('click', () => {
          document.getElementById("grow-list").style.display = "none";
          document.getElementById("down7").style.display = "flex";
          document.getElementById("up7").style.display = "none";
    });
  
    let about2 = document.getElementById("about2");
    about2.addEventListener('click', () => {
          document.getElementById("about-list2").style.display = "block";
          document.getElementById("down11").style.display = "none";
          document.getElementById("up11").style.display = "flex";
    });
  
  let up11 = document.getElementById("up11");
    up11.addEventListener('click', () => {
          document.getElementById("about-list2").style.display = "none";
          document.getElementById("down11").style.display = "flex";
          document.getElementById("up11").style.display = "none";
  
    });
  
    let product2 = document.getElementById("product2");
    product2.addEventListener('click', () => {
          document.getElementById("product-list2").style.display = "block";
          document.getElementById("down22").style.display = "none";
          document.getElementById("up22").style.display = "flex";
    })
  
  
    let up22 = document.getElementById("up22");
    up22.addEventListener('click', () => {
          document.getElementById("product-list2").style.display = "none";
          document.getElementById("down22").style.display = "flex";
          document.getElementById("up22").style.display = "none";
  
    });
  
  let service2 = document.getElementById("service2");
    service2.addEventListener('click', () => {
        document.getElementById("up33").style.display = "flex";
        document.getElementById("service-list2").style.display = "flex";
        document.getElementById("down33").style.display = "none"
    })
  
    let up33 = document.getElementById("up33");
    up33.addEventListener('click', () => {
          document.getElementById("service-list2").style.display = "none";
          document.getElementById("down33").style.display = "flex";
          document.getElementById("up33").style.display = "none";
  
    });
  
  
  let support2 = document.getElementById("support2");
    support2.addEventListener('click', () => {
        document.getElementById("up44").style.display = "flex";
        document.getElementById("support-list2").style.display = "flex";
        document.getElementById("down44").style.display = "none"
    })
  
  let up44 = document.getElementById("up44");
    up44.addEventListener('click', () => {
          document.getElementById("support-list2").style.display = "none";
          document.getElementById("down44").style.display = "flex";
          document.getElementById("up44").style.display = "none";
    });
  
  
  let buyCrypto2 = document.getElementById("buyCrypto2");
    buyCrypto2.addEventListener('click', () => {
        document.getElementById("up55").style.display = "flex";
        document.getElementById("buyCrypto-list2").style.display = "flex";
        document.getElementById("down55").style.display = "none"
    })
  
  let up55 = document.getElementById("up55");
  up55.addEventListener('click', () => {
          document.getElementById("buyCrypto-list2").style.display = "none";
          document.getElementById("down55").style.display = "flex";
          document.getElementById("up55").style.display = "none";
    });
  
  let cryptoCalculator2 = document.getElementById("cryptoCalculator2");
  cryptoCalculator2.addEventListener('click', () => {
        document.getElementById("up66").style.display = "flex";
        document.getElementById("cryptoCalculator-list2").style.display = "flex";
        document.getElementById("down66").style.display = "none"
    })
  
  let up66 = document.getElementById("up66");
  up66.addEventListener('click', () => {
          document.getElementById("cryptoCalculator-list2").style.display = "none";
          document.getElementById("down66").style.display = "flex";
          document.getElementById("up66").style.display = "none";
    });
  
  let grow2 = document.getElementById("grow2");
  grow2.addEventListener('click', () => {
          document.getElementById("up77").style.display = "flex";
          document.getElementById("grow-list2").style.display = "flex";
          document.getElementById("down77").style.display = "none"
      })
    
    let up77 = document.getElementById("up77");
    up77.addEventListener('click', () => {
            document.getElementById("grow-list2").style.display = "none";
            document.getElementById("down77").style.display = "flex";
            document.getElementById("up77").style.display = "none";
      });

let plus = document.getElementById("plus");
plus.addEventListener('click', () => {
            document.getElementById("minus").style.opacity= "0";
            document.getElementById("plus").style.opacity= "1";
            document.getElementById("text").style.display = "none"
})    
  
let minus = document.getElementById("minus");
minus.addEventListener('click', () => {
            document.getElementById("plus").style.opacity= "0";
            document.getElementById("minus").style.opacity= "1";
            document.getElementById("text").style.display = "block"
})    
  

  
let plus2 = document.getElementById("plus2");
plus2.addEventListener('click', () => {
            document.getElementById("minus2").style.opacity= "0";
            document.getElementById("plus2").style.opacity= "1";
            document.getElementById("text2").style.display = "none"
})    
  
let minus2 = document.getElementById("minus2");
minus2.addEventListener('click', () => {
            document.getElementById("plus2").style.opacity= "0";
            document.getElementById("minus2").style.opacity= "1";
            document.getElementById("text2").style.display = "block"
})    
  
let plus3 = document.getElementById("plus3");
plus3.addEventListener('click', () => {
            document.getElementById("minus3").style.opacity= "0";
            document.getElementById("plus3").style.opacity= "1";
            document.getElementById("text3").style.display = "none"
})    
  
let minus3 = document.getElementById("minus3");
minus3.addEventListener('click', () => {
            document.getElementById("plus3").style.opacity= "0";
            document.getElementById("minus3").style.opacity= "1";
            document.getElementById("text3").style.display = "block"
})    
  
let plus4 = document.getElementById("plus4");
plus4.addEventListener('click', () => {
            document.getElementById("minus4").style.opacity= "0";
            document.getElementById("plus4").style.opacity= "1";
            document.getElementById("text4").style.display = "none"
})    
  
let minus4 = document.getElementById("minus4");
minus4.addEventListener('click', () => {
            document.getElementById("plus4").style.opacity= "0";
            document.getElementById("minus4").style.opacity= "1";
            document.getElementById("text4").style.display = "block"
})    

  