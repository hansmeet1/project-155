AFRAME.registerComponent("gameplay",{
    schema:{
        elementId:{type:"string",default:"#coin"}

    },
    
    update:function(){
        this.isCollided(this.data.elementId)
    },

    isCollided:function(elementId){
        const element=document.querySelector(elementId)
        element.addEventListener("collied",(e)=>{
             if (elementId.includes("#coin")) {
                console.log(elementId + " collision");
              } else if (elementId.includes("#hurdle")) {
                console.log("coin collision");
              }
            })
        }
    })