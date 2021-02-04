
let recta1 = {
	top:'20px',
	left:'20px',
	height:'40px',
	width:'60px',
	children:[]
	}
let recta2 = {
	top:'30px',
	left:'30px',
	height:'20px',
	width:'30px',
	children:[]
	}
console.log(updateStructure(recta1,recta2));

function updateStructure(rec1,rec2){
	//write your code
	// let rect1=Object.assign({},rec1);
	// let rect2=Object.assign({},rec2);
	let rect1=JSON.parse(JSON.stringify(rec1));
	let rect2=JSON.parse(JSON.stringify(rec2));
	let equal=true;
	let Agreater=false;
	let Alesser=false;
	for(key in rect1){
        if(key !='children'){
            rect1[key]=Number(String(rect1[key]).slice(0, -2));
            rect2[key]=Number(String(rect2[key]).slice(0, -2));
        }
    }
    // console.log(rect1);
    // console.log(rect2);
	//var ans=Object.assign({},rect1);
	var ans=JSON.parse(JSON.stringify(rect1));;
	for(key in rec1){
		if((key !='children') && (rec1[key] != rec2[key])){
            equal=false;
            break;
		}
	}
	if(equal==true){
        //alert("equal");
		rect2.top=0;
		rect2.left=0;
		ans.children[0]=rect2;
		appendpx(ans);
	}else{
        
		isAgreater(rect1,rect2);
		isAlesser(rect2,rect1);
		if(Agreater==true){
            //alert("greater");
			rect2.left -= rect1.left;
			rect2.top -= rect1.top;
			ans.children[0]=rect2;
			appendpx(ans);
		}else{
			if(Alesser==true){
                //alert("lesser");
				ans=Object.assign({},rect2);
				rect1.left -= rect2.left;
				rect1.top -= rect2.top;
				ans.children[0]=rect1;
				appendpx(ans);
			}else{
                //alert("distorted");
				ans.top =String(ans.top)+"px";
				ans.left =String(ans.left)+"px";
				ans.height =String(ans.height)+"px";
				ans.width =String(ans.width)+"px";
			}
		}
		
	}
	function isAgreater(rect1,rect2){
		if((rect1.top<=rect2.top) && (rect1.left<=rect2.left) && ((rect1.top+rect1.height) >=(rect2.top+rect2.height) && ((rect1.left+rect1.width) >=(rect2.left+rect2.width)))){
			Agreater=true;
		}
	}
	function isAlesser(rect1,rect2){
		if((rect1.top<=rect2.top) && (rect1.left<=rect2.left) && ((rect1.top+rect1.height) >=(rect2.top+rect2.height) && ((rect1.left+rect1.width) >=(rect2.left+rect2.width)))){
			Alesser=true;
		}
	}
	function appendpx(ans){
        //console.log(ans);
		ans.top =String(ans.top)+"px";
		ans.left =String(ans.left)+"px";
		ans.height =String(ans.height)+"px";
		ans.width =String(ans.width)+"px";
		ans.children[0].top =String(ans.children[0].top)+"px";
		ans.children[0].left =String(ans.children[0].left)+"px";
		ans.children[0].height =String(ans.children[0].height)+"px";
		ans.children[0].width =String(ans.children[0].width)+"px";
	}
	return ans;
}