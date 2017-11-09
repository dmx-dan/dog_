/**
 * Created by Administrator on 2017/9/2.
 */

var tpaa = document.getElementById( "tpaa" );
var remove = document.getElementById( "remove" );
var tp = document.getElementById( "tp" );
remove.onmousedown = function()
{
	tpaa.removeChild( tp );
};

//轮播
var img = document.getElementsByClassName( "img" );
var li = document.getElementsByClassName( "li" );
var arr = 0;
//遍历所有图和按钮,页面加载完毕显示第一张图和第一个按钮
window.onload = function()
{
	for( var i = 0; i < img.length; i++ )
	{
		if( i !== 0 )
		{
			img[ i ].style.opacity = '0';

		}
		else
		{
			li[ i ].style.background = 'black';
		}
	}
};
function add()//add()设置鼠标移到对应的li上图片也相对的改变
{
	for( var j = 0; j < li.length; j++ )
	{
		//遍历所有的按钮,所有按钮都给绑定一个鼠标移上去的mouseover事件
		li[ j ].onmouseover = function()
		{
			var index = this.innerHTML - 1;
			arr = index;
			for( var x = 0; x < li.length; x++ )
			{
				if( x === index )
				{//当x等于index时,设置第x张图片不透明度为1,并改变背景色

					img[ x ].style.opacity = '1';
					li[ x ].style.background = 'black';
				}
				else
				{
					img[ x ].style.opacity = '0';
					li[ x ].style.background = '#868686';
				}
			}

		};
	}
}
add();
//设置函数重复运行
setInterval( function()
{
	for( var i = 0; i < img.length; i++ )
	{
		img[ i ].style.opacity = '0';
		li[ i ].style.background = '#999';
	}
	img[ arr ].style.opacity = '1';
	li[ arr ].style.background = 'black';
	arr++;
	if( arr === 8 ) arr = 0;

}, 2000 );

//logo图
var ul = document.getElementById( "scrolllist-ul" );
ul.style.left = '0';
function move()
{
	var pos = ul.getAttribute( "data-pos" );
	pos = parseInt( pos );
	pos = pos ? pos : 0;
	if( pos + 1211 > 4844 )
	{
		ul.style.transition = "none";
		ul.style.left = '0';
		pos = -1211;
	}
	else
	{
		ul.style.transition = "all 500ms linear";
		ul.style.left = -(pos + 1211) + 'px';
	}
	ul.setAttribute( "data-pos", pos + 1211 );
}
setInterval( move, 2000 );

//品牌旗舰店
var uls = document.getElementById( "extra-ul" );
var lis = uls.querySelectorAll( "li" );
var div = document.getElementsByClassName( "brand-pro-c" );
var arrow = document.getElementsByClassName( "arrow" );
function traversal()//遍历li,所有li都给绑定一个鼠标移入事件
{
	for( var i = 0; i < lis.length; i++ )
	{
		lis[ i ].onmouseover = function()
		{
			var js = parseInt( this.getAttribute( "data-reta" ) );
			for( var j = 0; j < lis.length; j++ )
			{
				arrow[ j ].style.display = 'none';
				div[ j ].style.display = 'none';
				lis[ j ].style.background = ' #ffffff';
				lis[ j ].style.color = ' #666';

				if( j === js )
				{
					//lis[ j ].style.transition = "all 200ms linear";
					arrow[ j ].style.display = 'block';
					lis[ j ].style.background = ' #373238';
					lis[ j ].style.color = ' #ffffff';
					div[ j ].style.display = 'block';
				}
			}
		};
	}
}
traversal();

//小轮播

var imgs = document.getElementsByClassName( "imgs" );
var xli = document.getElementsByClassName( "xli" );
var sarr = 0;
//遍历所有图和按钮,页面加载完毕显示第一张图和第一个按钮
window.onload = function()
{
	for( var i = 0; i < imgs.length; i++ )
	{
		if( i !== 0 )
		{
			imgs[ i ].style.opacity = '0';
		}
		else
		{
			xli[ i ].style.background = '#ab0000';
		}
	}
};
//设置鼠标移到对应的li上图片也相对的改变
function s_rotation()
{
	for( var j = 0; j < xli.length; j++ )
	{
		xli[ j ].onmouseover = function()
		{
			var datasma = parseInt( this.getAttribute( "data-sma" ) );
			sarr = datasma;
			for( var x = 0; x < xli.length; x++ )
			{
				if( x === datasma )
				{
					imgs[ x ].style.opacity = '1';
					xli[ x ].style.background = '#ab0000';
				}
				else
				{
					imgs[ x ].style.opacity = '0';
					xli[ x ].style.background = '#868686';
				}
			}
		};
	}
}
s_rotation();
//设置函数重复运行
setInterval( function()
{
	for( var j = 0; j < xli.length; j++ )
	{
		imgs[ j ].style.opacity = '0';
		xli[ j ].style.background = '#868686';
	}
	imgs[ sarr ].style.opacity = '1';
	xli[ sarr ].style.background = '#ab0000';
	sarr++;
	if( sarr === 3 ) sarr = 0;
}, 3000 );

function traversals( parameter1)
{
	var afnav = document.getElementsByClassName( parameter1 );
	//var afnav_b = document.getElementsByClassName( parameter2 );
	for( var i = 0; i < afnav.length; i++ )
	{
		afnav[ i ].onmouseover = function()
	{
		for( var j = 0; j < afnav.length; j++ )
		{
			afnav[ j ].classList.remove("active");
		}
		this.classList.add("active");
	};
	}
}
traversals( "afnav-li");
//女士手表
//var afnava = document.getElementsByClassName( "afnavli" );
//var afnava_b = document.getElementsByClassName( "afnav-b" );
//console.log( afnava, afnava_b );
//function paixua()
//{
//	for( var i = 0; i < afnava.length; i++ )
//	{
//		afnava[ i ].onmouseover = function()
//		{
//			var dataafnava = parseInt( this.getAttribute( "data-afnava" ) );
//			for( var j = 0; j < afnava.length; j++ )
//			{
//				afnava[ j ].style.background = 'rgba(255,121,127,.5)';
//				afnava_b[ j ].style.display = 'none';
//				afnava[ j ].style.width = '150px';
//
//				if( j === dataafnava )
//				{
//					afnava[ j ].style.background = '#ff797f';
//					afnava_b[ j ].style.display = 'block';
//					afnava[ j ].style.width = '170px';
//				}
//			}
//		};
//	}
//}
//paixua();