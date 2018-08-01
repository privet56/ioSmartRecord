
com.ng.workflow = (function()
{
return {

    tooltips : new Array(),

    machinewidth    : 150,
    machineheight   : 50,
    paperwidth      : 999,
    paperheight     : (document.all ? 220 : 220),

    tooltips : (new Array()),
    allSets : null,
    curGlow : null,

    __recDepth : 0,

    desc : function(paper, o, text, lnk, args)
    {
        var workflow = this;
        var a = Array.prototype.slice.call(arguments);

        o.mouseover(function(e)
        {
            for(var i=0;i<workflow.tooltips.length;i++)
            {
                workflow.tooltips[i].attr("text", text.upperFirst(true));
                var rect = o.getBBox({isWithoutTransform:true});
                {
                    if(document.all)
                    {
                        workflow.tooltips[i].attr({
                            x: rect.x + 50,
                            y: rect.y - 20
                        }).toFront();
                    }
                    else
                    {
                        workflow.tooltips[i].attr({
                            x: rect.x + 50,
                            y: rect.y - 20
                        }).transform(o.transform()).toFront();
                    }
                }
            }
        })
        .mouseout(function(e)
        {
            for(var i=0;i<workflow.tooltips.length;i++)
            {
                workflow.tooltips[i].attr("text", '');
                workflow.tooltips[i].attr({
                    x: -999,
                    y: -999
                    });
            }
        })
        .click(function(e)
        {
            workflow.allSets.attr('stroke-width', 0);
            if(!document.all)
            {
                if (workflow.curGlow != null)
                    workflow.curGlow.remove();
                workflow.curGlow = o.glow({ color: "red", width: 5 });
            }
            else
            {
                o.attr({'stroke-width': 3, stroke:"red"});
            }
            workflow.__recDepth = 0;
            //var s = this.getDetails.apply(this, a);
            //var html = this.formatDetails(s);
            //jQuery('#selecteditemdetails').html(html);
        });
    },
    makeMachineApp : function(machineRect, paper, level, machineIndex, machineCountOfLevel, text, osImage, detailsF, isPortrait)
    {
        var rect = machineRect.getBBox({isWithoutTransform:true});
        var width  = 32;
        var height = 32;
        var x = rect.x + ((rect.width / 2) - (width/2));
        var y = rect.y + ((isPortrait ? this.machinewidth : this.machineheight) - height);
        var pic = paper.image("./img/appsymbol.png", x, y, width, height);
        this.desc(paper, pic, "Android App", Array.prototype.slice.call(arguments));
    },
    makeMachineWS : function(machineRect, paper, level, machineIndex, machineCountOfLevel, text, osImage, detailsF, isPortrait)
    {
        var rect = machineRect.getBBox({isWithoutTransform:true});
        var width  = 32;
        var height = 32;
        var x = rect.x + ((rect.width / 2) - (width/2));
        var y = rect.y + ((isPortrait ? this.machinewidth : this.machineheight) - height);
        var pic = paper.image("./img/awscloud.png", x, y, width, height);
        this.desc(paper, pic, "AWS Amazon Web Services", Array.prototype.slice.call(arguments));
    },
    makeMachineEFS : function(machineRect, paper, level, machineIndex, machineCountOfLevel, text, osImage, detailsF, isPortrait)
    {
        var rect = machineRect.getBBox({isWithoutTransform:true});
        var width  = 32;
        var height = 32;
        var x = rect.x + ((rect.width / 2) - (width/2));
        var y = rect.y + ((isPortrait ? this.machinewidth : this.machineheight) - height);
        var pic = paper.image("./img/awscloud.png", x, y, width, height);
        this.desc(paper, pic, "AWS Amazon Web Services", Array.prototype.slice.call(arguments));
    },
    makeMachine : function(paper, level, machineIndex, machineCountOfLevel, text, osImage, detailsF, isPortrait)
    {
        if (this.allSets == null)
            this.allSets = paper.set();
        
        var colors1 = ["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#08589e"];
        var colors2 = ["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#6e016b"];

        paper.setStart();
        
        var x = ((paper.width / (machineCountOfLevel + 1)) * machineIndex) - (this.machinewidth / 2);
        
        var y = 50 + (level * (this.machineheight + 50));
        var width = this.machinewidth;
        var height = 0;
        var fillColor = "0-"+colors1[level]+"-"+colors2[level+1];//"0-#f00-#d00"/*red*/;
        var fillColorMouseOver = "1-"+colors2[level]+"-"+colors1[level+1];

        if(isPortrait === true)
        {
            //height = [width, width = height][0];    //SWAP
            width = this.machineheight;
        }
        
        var machineRect = paper.rect(x, y, width, height, 15/*rounding*/)
                            .attr("fill", fillColor)
                            .animate({height:(isPortrait ? this.machinewidth : this.machineheight)}, 1000, 'bounce')
                            .mouseover(function(){this.attr('r', 0 ).attr("fill", fillColorMouseOver);})
                            .mouseout(function() {this.attr('r', 15).attr("fill", fillColor);});
        
        this.desc(paper, machineRect, text, Array.prototype.slice.call(arguments));
        
        var machineOS = paper.image("./img/"+osImage+".png", x, y, 32, 32);
        this.desc(paper, machineOS, osImage.upperFirst(true), Array.prototype.slice.call(arguments));
        
        if(detailsF)
        {
            var pars = Array.prototype.slice.call(arguments);
            pars.unshift(machineRect);
            detailsF.apply(this, pars);
        }
        
        x = x + ((isPortrait ? this.machineheight : this.machinewidth) / 2);
        y = y + ((isPortrait ? this.machinewidth : this.machineheight) + (text.indexOf("\n") > 1 ? 14 : 7));
        
        var machineText = paper.text(x, y, text);	//this is the def: .attr({"text-anchor":'middle'});
        
        var set = paper.setFinish();
        this.allSets.push(set);
        return set;
    },
    paintWorkflowTrain : function(div)
    {
  	    var paper = Raphael(div, this.paperwidth * 1.2, this.paperheight);
	    paper.canvas.style.backgroundColor = "#FFFFF0";
	
	    var tt = paper.text(-999, -999, '');
	    tt.attr({'stroke-width': 0, fill: 'red', 'font-size': 12, 'font-weight':'bold' });
        this.tooltips.push(tt);

       var smartphone  = this.makeMachine(paper, 0/*level(startsWith0)*/, 1/*machIndex(startsWith1)*/, 3/*#machinesOfLevel*/,
                                            "Smartphone",                  //text below the rect
                                            "siri",                        //image top left
                                            this.makeMachineApp,           //detailF
                                            true);

        var webservice = this.makeMachine(paper, 0/*level(startsWith0)*/, 2/*machIndex(startsWith1)*/, 3/*#machinesOfLevel*/,
                                            "WebService on AWS" ,       //text
                                            "webservice",               //osimage
                                            this.makeMachineWS,         //detailF
                                            false);
                                            
                                            

        var efs = this.makeMachine(paper, 0/*level(startsWith0)*/, 3/*machIndex(startsWith1)*/, 3/*#machinesOfLevel*/,
                                            "ElasticFileSystem" ,     //text
                                            "efs",                    //osimage
                                            this.makeMachineEFS,      //detailF
                                            false);

        graffle.setup(paper,
            {from:smartphone, to:webservice , linecolor:"red", anitext: "Sends Sound"                , ani:true, lineoffsety:-18},
            {from:webservice, to:efs        , linecolor:"red", anitext: "Create Model and saving"   , ani:true}
        );
    },
    paintWorkflowRecognition : function(div)
    {
  	    var paper = Raphael(div, this.paperwidth * 1.2, this.paperheight);
	    paper.canvas.style.backgroundColor = "#FFFFF0";
	
	    var tt = paper.text(-999, -999, '');
	    tt.attr({'stroke-width': 0, fill: 'red', 'font-size': 12, 'font-weight':'bold' });
        this.tooltips.push(tt);

//first level
        var smartphone  = this.makeMachine(paper, 0/*level(startsWith0)*/, 1/*machIndex(startsWith1)*/, 3/*#machinesOfLevel*/,
                                            "Smartphone",               //text
                                            "siri",                     //osimage
                                            this.makeMachineApp,                       //detailF
                                            true);

        var webservice = this.makeMachine(paper, 0/*level(startsWith0)*/, 2/*machIndex(startsWith1)*/, 3/*#machinesOfLevel*/,
                                            "WebService on AWS" ,    //text
                                            "webservice",               //osimage
                                            this.makeMachineWS,         //detailF
                                            false);

        var efs = this.makeMachine(paper, 0/*level(startsWith0)*/, 3/*machIndex(startsWith1)*/, 3/*#machinesOfLevel*/,
                                            "ElasticFileSystem" ,     //text
                                            "efs",                    //osimage
                                            this.makeMachineEFS,      //detailF
                                            false);
//level 2
        var avs  = this.makeMachine(paper, 1/*level(startsWith0)*/, 2/*machIndex(startsWith1)*/, 3/*#machinesOfLevel*/,
                                            "Alexa Voice Service",    //text
                                            "avs",                    //osimage
                                            this.makeMachineWS,       //detailF
                                            false);

        var lambda_skill = this.makeMachine(paper, 1/*level(startsWith0)*/, 3/*machIndex(startsWith1)*/, 3/*#machinesOfLevel*/,
                                            "Lambda on AWS" ,        //text
                                            "lambda",                //osimage
                                            this.makeMachineWS);     //detailF

        graffle.setup(paper,
            {from:smartphone, to:webservice , linecolor:"red", anitext: "Sends Sound"        , ani:true, lineoffsety:-19},
            {from:efs, to:webservice        , linecolor:"red", anitext: "Recognize User ID" , ani:true},
            {from:webservice, to:smartphone , linecolor:"red", anitext: "return User ID"    , ani:true},

            {from:smartphone, to:avs        , linecolor:"green", anitext: "Sends Sound & User ID"                    , ani:true},
            {from:lambda_skill, to:avs      , linecolor:"green", anitext: "Skill answers with personalized greeting", ani:true},
            {from:efs, to:lambda_skill      , linecolor:"green", anitext: "ID to personalized greeting"             , ani:true},
            {from:avs, to:smartphone        , linecolor:"green", anitext: "Return personalized greeting"            , ani:true, lineoffsety:19}
        );
    }
}
	
})();	//iife

com.ng.workflow.start = function(divTrain, divRecognition)
{
    com.ng.workflow.paintWorkflowTrain(divTrain);
    com.ng.workflow.paintWorkflowRecognition(divRecognition);
};
