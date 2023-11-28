AFRAME.registerComponent("handle-marker",{
    init:function(){
        this.el.addEventListener("markerFound",()=>{
            console.log("marker found")
            this.handleMarkerFound()
        })
        this.el.addEventListener("markerLost",()=>{
            console.log("marker lost")
            document.getElementById("button-div").style.display = "none"
        })
    },
    handleMarkerFound:function(){
        document.getElementById("button-div").style.display = "flex"

        button1 = document.getElementById("order-button")
        button2 = document.getElementById("order-summary-button")

        button1.addEventListener("click",()=>{
            swal({
                icon : "success",
                title : "Thanks for order !!",
                text : "Your order is placed."
            })
        })
        button2.addEventListener("click",()=>{
            swal({
                icon : "warning",
                title : "Order Summary !!",
                text : "Work in progress"
            })
        })

    }
})