
export default class bouton {
    constructor(x,y,sens,ctx,body){
        this.x = x
        this.y = y
        this.sens = sens
        this.ctx = ctx
        this.body = body
    }

    draw(){   

        if( this.sens == 0){
            this.ctx.lineWidth = 12;
            this.ctx.beginPath();
            this.ctx.moveTo(this.x, this.y);
            this.ctx.lineTo(this.x-105, this.y+52.5);
            this.ctx.lineTo(this.x, this.y+100);
            this.ctx.strokeStyle = "black"
            this.ctx.stroke();

            this.ctx.lineWidth = 4;
            this.ctx.beginPath();
            this.ctx.moveTo(this.x-5, this.y+2.5);
            this.ctx.lineTo(this.x-105,this.y+52.5);
            this.ctx.lineTo(this.x-5, this.y+97.5);
            this.ctx.strokeStyle = "white"
            this.ctx.stroke();
        }

        else if ( this.sens == 1){
                this.ctx.lineWidth = 12;
                this.ctx.beginPath();
                this.ctx.moveTo((this.body.offsetWidth * 0.9)-this.x, this.y);
                this.ctx.lineTo((this.body.offsetWidth * 0.9)-this.x+100, this.y+52.5);
                this.ctx.lineTo((this.body.offsetWidth * 0.9)-this.x, this.y+100);
                this.ctx.strokeStyle = "black"
                this.ctx.stroke();

                this.ctx.lineWidth = 4;
                this.ctx.beginPath();
                this.ctx.moveTo((this.body.offsetWidth * 0.9)-this.x+5, this.y+2.5);
                this.ctx.lineTo((this.body.offsetWidth * 0.9)-this.x+100, this.y+52.5);
                this.ctx.lineTo((this.body.offsetWidth * 0.9)-this.x+5, this.y+97.5);
                this.ctx.strokeStyle = "white"
                this.ctx.stroke();
        }

    }

}