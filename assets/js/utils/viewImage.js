import $ from '../libs/jquery.min';

export default function viewImage(e) {

	// 首页图片不执行任何动作
	if (location.pathname === '/') return;
	// console.log(e)
	let curImgSrc = e.target.attributes.src.value;
	console.log(curImgSrc)

	// backdrop-filter: blur(5px);
	document.body.style = "overflow: hidden;"
	// onclick="document.body.removeChild(document.getElementById('mask')); document.body.style=''"
	// <div style="width: 24px;" onclick="document.getElementById('img').width = 1000"><svg t="1667356164779" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17343" width="22" height="22"><path d="M111.793744 425.788348c6.856001 0.716299 13.098031 3.172179 18.419107 6.753673L329.548516 514.81403c20.772659 8.595583 30.698511 32.335765 22.102928 53.108424-7.981613 19.340062-29.061257 29.265914-48.605976 23.637854l-4.502448-1.534926-152.878585-62.931947c5.218747 123.203358 72.346158 238.015789 182.860797 301.868692 175.18617 101.10043 399.182972 41.136005 500.283402-134.050165 11.256121-19.44239 36.121915-26.093734 55.564305-14.939942 19.44239 11.256121 26.093734 36.121915 14.939942 55.564305-123.510343 214.173279-397.238733 287.54272-611.412012 163.930049C132.361747 809.622065 47.122214 637.096432 66.769262 461.705606c2.558209-22.409913 22.716898-38.475467 45.024482-35.917258z m623.793745-301.664035c155.641451 89.844309 240.880983 262.472269 221.131608 437.965424-2.558209 22.307585-22.61457 38.373139-45.024483 35.917258-7.060658-0.818627-13.507345-3.376836-18.930749-7.162986l-198.824023-81.965024c-20.772659-8.595583-30.698511-32.335765-22.102928-53.108424 7.981613-19.340062 29.061257-29.265914 48.605976-23.637854l4.502448 1.534926 152.878585 62.931947c-5.218747-123.203358-72.346158-238.015789-182.860797-301.868692-175.18617-101.10043-399.182972-41.136005-500.283402 134.050165-11.256121 19.44239-36.121915 26.093734-55.564305 14.939942-19.44239-11.256121-26.093734-36.121915-14.939942-55.564305C247.68582 73.881083 521.41421 0.511642 735.587489 124.124313z" p-id="17344" fill="#1296db"></path></svg></div>	

	$('body').prepend(
		`
		<div 
			id="mask" 
			style="
				position: fixed; 
				background: rgba(255, 255, 255, .96); 
				backdrop-filter: blur(5px);
				left: 0; top: 0; 
				width: 100%; height: 100%; 
				overflow-y:auto; 
				overflow-x: hidden; 
				z-index: 2000; 
				"
			>
			<div 
				id="wrapper_img"
				style="
					width:90%; 
					height: 80%;
					margin: 32px auto; 
					overflow: auto;
				"
				>
				<img 
					id="img"
					src=${curImgSrc} 
					style="
						max-width: none;
						display: block; 
						box-sizing: border-box; 
						margin: 0 auto; 
						padding: 8px; 
						" 
					onclick="document.getElementById('img').width += DELTA;"
					ondblclick="document.body.removeChild(document.getElementById('mask')); document.body.style='';"
				/>
			</div>
			<div
				style="
					position: absolute;
					bottom: 6%;
					left: 50%;
					transform: translateX(-50%);
					display: flex;
					background: #F1F2F6;
					width: 200px;
					padding:8px 6px 4px 6px;
					justify-content: space-around;
					border-radius: 24px;
				"
				>

				<div onclick="document.getElementById('img').width -= DELTA"><svg t="1667354608074" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2903" width="24" height="24"><path d="M945.066667 898.133333l-189.866667-189.866666c55.466667-64 87.466667-149.333333 87.466667-241.066667 0-204.8-168.533333-373.333333-373.333334-373.333333S96 264.533333 96 469.333333 264.533333 842.666667 469.333333 842.666667c91.733333 0 174.933333-34.133333 241.066667-87.466667l189.866667 189.866667c6.4 6.4 14.933333 8.533333 23.466666 8.533333s17.066667-2.133333 23.466667-8.533333c8.533333-12.8 8.533333-34.133333-2.133333-46.933334zM469.333333 778.666667C298.666667 778.666667 160 640 160 469.333333S298.666667 160 469.333333 160 778.666667 298.666667 778.666667 469.333333 640 778.666667 469.333333 778.666667z" p-id="2904" fill="#1296db"></path><path d="M597.333333 437.333333H341.333333c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h256c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32z" p-id="2905" fill="#1296db"></path></svg></div>
				<div style="width: 24px;" onclick="document.getElementById('img').width = _width"><svg t="1667356342781" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="19270" width="22" height="22"><path d="M192 720v96h160v64H128v-160h64z m704 0v160h-224v-64h160v-96h64z m0-576v160h-64v-96h-160v-64h224z m-544 0v64H192v96H128v-160h224z" p-id="19271" fill="#1296db"></path></svg></div>	
				<div style="width: 24px;" onclick="document.getElementById('img').width += DELTA"><svg t="1667354518760" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2555" width="24" height="24"><path d="M945.066667 898.133333l-189.866667-189.866666c55.466667-64 87.466667-149.333333 87.466667-241.066667 0-204.8-168.533333-373.333333-373.333334-373.333333S96 264.533333 96 469.333333 264.533333 842.666667 469.333333 842.666667c91.733333 0 174.933333-34.133333 241.066667-87.466667l189.866667 189.866667c6.4 6.4 14.933333 8.533333 23.466666 8.533333s17.066667-2.133333 23.466667-8.533333c8.533333-12.8 8.533333-34.133333-2.133333-46.933334zM469.333333 778.666667C298.666667 778.666667 160 640 160 469.333333S298.666667 160 469.333333 160 778.666667 298.666667 778.666667 469.333333 640 778.666667 469.333333 778.666667z" p-id="2556" fill="#1296db"></path><path d="M597.333333 437.333333h-96V341.333333c0-17.066667-14.933333-32-32-32s-32 14.933333-32 32v96H341.333333c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h96V597.333333c0 17.066667 14.933333 32 32 32s32-14.933333 32-32v-96H597.333333c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32z" p-id="2557" fill="#1296db"></path></svg></div>
				<div onclick="document.body.removeChild(document.getElementById('mask')); document.body.style=''"><svg t="1667354913254" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4876" width="24" height="24"><path d="M571.733333 512l268.8-268.8c17.066667-17.066667 17.066667-42.666667 0-59.733333-17.066667-17.066667-42.666667-17.066667-59.733333 0L512 452.266667 243.2 183.466667c-17.066667-17.066667-42.666667-17.066667-59.733333 0-17.066667 17.066667-17.066667 42.666667 0 59.733333L452.266667 512 183.466667 780.8c-17.066667 17.066667-17.066667 42.666667 0 59.733333 8.533333 8.533333 19.2 12.8 29.866666 12.8s21.333333-4.266667 29.866667-12.8L512 571.733333l268.8 268.8c8.533333 8.533333 19.2 12.8 29.866667 12.8s21.333333-4.266667 29.866666-12.8c17.066667-17.066667 17.066667-42.666667 0-59.733333L571.733333 512z" p-id="4877" fill="#e69"></path></svg></div>
			</div>
			<script>
				var DELTA = 200;

				var _wiWidth = document.getElementById('img').offsetWidth;
				var _screenWidth = document.getElementById('mask').offsetWidth;
				// console.log(_wiWidth)
				// console.log(_screenWidth)
				var _width = 0;
				if (_wiWidth > 2052) {
					_width = _wiWidth / 3;
				} else if (_wiWidth > 1026) {
					_width = _wiWidth / 2;
				} else {
					_width = _wiWidth;
				}

				_width = _screenWidth > 1026 ? _width : _screenWidth * 0.9;
				// console.log(_width);
				document.getElementById('img').width = _width;
			</script>
		</div>
		`
	)
}