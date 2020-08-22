const Discord = require('discord.js');
const fsLibrary=require('fs');
const ytdl=require ('ytdl-core');
const bot=new Discord.Client();
const token="NzQ1MjAyMjAwNDgxMTAzOTMy.XzuVoQ.Ems20NZt54vT6Zc8XywG4zv_Is4";
const PREFIX="!";
const YouTube = require("discord-youtube-api");
const  {OpusEncoder} = require('@discordjs/opus');
const youtube = new YouTube("AIzaSyAiqmD_zYL748Hls61HTL69eluDkFAMW7s");
const _sodium = require('libsodium-wrappers');
var noonaEmbed=[];
var choosingNoona=false;
var mynoona=[];
bot.login(token);
bot.on("ready",()=>{
	console.log("im ready");

});
function displayNoonaName(msg){
	const nagyung=new Discord.MessageEmbed()
	.setTitle("Nagyung")
	.setDescription("This noona is the 'sensitive' type, she has a great mood swing almost all the time but being playful and cheerful most of the time, she mostly active at night time.\n her favorite thing to do is just to chill and play some games or watching movies")
	.setImage("https://pbs.twimg.com/media/DpVKjVNWwAAEvZO.jpg")
	.addFields(
	{name:'Cuteness',value:'5'},
	{name:'Maturity',value:'4'},
	{name:'Energy',value:'3'},
	{name:'Academic',value:'4'},
	{name:'Charm',value:'4'},
	);
	const jisoo=new Discord.MessageEmbed()
	.setTitle("Jisoo")
	.setDescription("This noona was most of the time being 'careles' to the world, the duality and profesionality if this noona oftenly fascinate other people he can be 'cool' then goes to 'cute' in a matter of seconds.\n her favorite thing to do is to play around and searching for stuff to do")
	.setImage("https://static.republika.co.id/uploads/images/inpicture_slide/098502100-1586781138-5cb5913f6bc07-jisoo-blackpink_.jpg")
	.addFields(
	{name:'Cuteness',value:'6'},
	{name:'Maturity',value:'4'},
	{name:'Energy',value:'4'},
	{name:'Academic',value:'2'},
	{name:'Charm',value:'4'},
	);
	noonaEmbed.push(nagyung);
	noonaEmbed.push(jisoo);
	for(let i=0;i<noonaEmbed.length;i++){
		msg.channel.send(noonaEmbed[i]);
	}
};
function joinVoiceChannel(msg){
	const voiceChannel=msg.member.voice.channel;
		if(!voiceChannel){
			msg.channel.send("Please join a voice channel first!");
		}
		else{
		voiceChannel.join();
		}
}
async function cariLagu(songName){
	let video= await youtube.searchVideos(songName);
	return String(video.url);
}
async function playMusic(msg,connection,songName){
	const video3 = await cariLagu(songName);
	if(!connection){
		msg.channel.send("Please Join a voice channel first");
	}
	else{
	var tempMusic=await connection.join().then(connec=>{
		return connec;
	});
	const stream = ytdl(video3,{ filter: 'audioonly' });
	process.on('unhandledRejection', error => console.error('Uncaught Promise Rejection', error));
	tempMusic.play(stream);
	msg.channel.send("Right now playng : " +video3);
	tempMusic.on('finish', () => voiceChannel.leave());
	}
		
}
function noonaPic(){
	
	let pic=[
	"https://i.pinimg.com/originals/a0/aa/dc/a0aadc1e19fac0bb6454aa7946d577e2.jpg",
	"https://i.pinimg.com/originals/93/ec/78/93ec788aa2702eaf2443a4133723d2cf.jpg",
	"https://cdn.idntimes.com/content-images/community/2020/03/96a7c8473015a477c63095b4020825ad-9c6b05ae6d3b5a8119a1b2c4368496f4.jpg",
	"https://cdn.idntimes.com/content-images/community/2019/04/gyuri-fromis-9-41459790-1000-1500-7436b0c2c4ddd176e5a74e9f2bb28155.jpg",
	"https://cdn.idntimes.com/content-images/community/2019/04/dvdldplxgaah4bo-dd6e648392427b13fb4d63ed8557195c.jpg",
	"https://i.pinimg.com/originals/0d/fc/19/0dfc19afacc12272b42cefe45f1a141f.jpg",
	"https://i.pinimg.com/736x/ad/54/81/ad5481d88106ffed5fbc64fb9e1efbb0.jpg",
	"https://thumbs.gfycat.com/PointlessMisguidedLcont-max-1mb.gif",
	"https://cdn1-production-images-kly.akamaized.net/WIKkdYEvbJg2t7CNECiAzARJ28w=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1552738/original/038253700_1490945599-irene3.jpg",
	"https://cdn.akurat.co/images/uploads/images/akurat_20180320011453_2h2945.jpg",
	"https://cdn.akurat.co/images/uploads/images/akurat_20180320011453_2h2945.jpg",
	"https://i.pinimg.com/originals/9b/7f/2f/9b7f2f73a3ecd6dd9efbac818cd219e8.jpg",
	"https://www.wowkeren.com/display/images/photo/2020/06/11/00314988.jpg"
	];
	fsLibrary.writeFile('userdata.txt',pic,(error)=>{
		if(error) throw err;
	});
	let rand=Math.floor(Math.random()*pic.length);
	return pic[rand];
}
function oppaPic(){
	pic=["https://i.imgur.com/jBhq6St.jpg"];
	let rand=Math.floor(Math.random()*pic.length);
	return pic[rand];
}
//misc
bot.on("message",msg=>{
	if(msg.content[0]==PREFIX){
	let args=msg.content.substring(PREFIX.length).split(" ");
	switch(args[0].toLowerCase()){
		case 'joel':
			msg.channel.send("jago");
			break;
		case 'kelpin':
			msg.channel.send("Bucin");
		break;
		case 'chickencollege':
			msg.channel.send("https://www.instagram.com/college.chicken/");
		break;
		case 'donasi':
		case 'sawer':
			msg.channel.send("https://saweria.co/donate/AnYujin");
		break;
		case 'abas':
			msg.channel.send("nmek");
		break;
		case 'avatar':
			msg.reply(msg.author.displayAvatarURL())
		break;
		}
	}
});
//noona and oppa
bot.on("message",msg=>{

	if(msg.content[0]=='!'){
	let args=msg.content.substring(PREFIX.length).split(" ");
	
	switch(args[0].toLowerCase()){
		case "noona":

			msg.channel.send(noonaPic());
			break;
		case "oppa":
			msg.channel.send(oppaPic());
			break;
	}
	}
});
//play youtube music
bot.on("message",msg=>{
	let temp=msg.content.substring(PREFIX.length).split(" ");
	if(msg.content[0]==='!'){
	if(temp[0].toLowerCase()==="join"){
		joinVoiceChannel(msg);
	}
	
	if(temp[0].toLowerCase()==="leave"){
		const voiceChannel=msg.member.voice.channel;
		voiceChannel.leave();
	}
	if(temp[0].toLowerCase()==="play"){
		let connection=joinVoiceChannel(msg);
		let musicReq=temp.slice(1);
		musicReq=musicReq.join(" ");
		console.log(musicReq);
		if(!temp[1]){
			msg.send("Please enter the song title");
		}
		else{
			playMusic(msg,msg.member.voice.channel,musicReq);
		}
	}
	}
});
//noonasimulator full vers
bot.on("message",msg=>{
	if(msg.content[0]==PREFIX){
		console.log(msg.author.username);
		let args=msg.content.substring(PREFIX.length).split(" ");
		let comnd=args[0].toLowerCase();
	switch(comnd){
		case "mynoona":
			if (!mynoona[msg.author.username]){
				msg.reply("please create an account first using !create");
			}
		break;
		case "create":
			displayNoonaName(msg);
			msg.reply("please chooose your noona using !noona <number> command:\n 1.Nagyung\n 2.Jisoo");
			choosingNoona=true;
			break;
	}
	}
});