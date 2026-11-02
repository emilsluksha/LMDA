var B="https://www.lmda.lv/mod_info/article_files/";
var CAL=[
["2025-11-23","23.11.2025.","Dejas elpa, Jēkabpils","LMDA reitings",["Hip-hop","Contemporary","Show","Jazz","Improvizācija","Streetshow"]],
["2026-01-25","25.01.2026.","Freeze the Beat, Rīga, Hanzas skolas sporta komplekss","LMDA kvalifikācija",["Hip-hop","Streetshow","Show","Modern & Contemp.","Jazz","Improvizācija","Popping","Free dance"]],
["2026-03-01","01.03.2026.","Latvijas hip-hop un street dance show čempionāts","LMDA reitings",["Hip-hop dance","Street dance show","Popping","Production"]],
["2026-03-21","21.03.2026.","Latvijas Performing Arts čempionāts","LMDA reitings",["Show dance","Modern & Contemp.","Jazz dance","Improvizācija","Free dance"]],
["2026-04-25","25.04.2026.","Jelgavas Grand Prix 2026, 1. diena","LMDA reitings",["Hip-hop dance","Hip-hop battle","Streetdance show","Popping","Production"]],
["2026-04-26","26.04.2026.","Jelgavas Grand Prix 2026, 2. diena","LMDA reitings",["Show dance","Modern & Contemp.","Jazz","Improvizācija","Free dance"]],
["2026-11-21","21.11.2026.","Dejas elpa 2026, Daugavpils Olimpiskais centrs, Stadiona iela 1","Nākamais pasākums",[]]
];
var R26=[["Dejas elpa 2026: nolikums","DEAS%20ELPA_2026_LV.pdf","PDF"],["LMDA reitings 2025–2026","reitings%2026-04-26.xlsx","XLSX"],["Grand Prix Jelgava 2026, 1. diena","Grand%20Prix%20Jelgava%202026%20-%20Results..xlsx","XLSX"],["Grand Prix Jelgava 2026, 2. diena","Grand%20Prix%20Jelgava%202026%20-%20Results%20%28DAY%202%29..xlsx","XLSX"],["Performing Arts čempionāts, 22.03.2026.","REZULTA%CC%84TI%2022.03.2026.21.xlsx","XLSX"],["Hip-hop čempionāts 2026: Judging report","LC26%20-%20Judging%20Report.pdf","PDF"],["Hip-hop čempionāts 2026: rezultāti","Latvian%20Open%20Championship%202026%20Results.xlsx","XLSX"],["Freeze the Beat, 25.01.2026.","REZULTA%CC%84TI%2025.01.2026.1.xlsx","XLSX"],["Dejas elpa, 23.11.2025.","Dejas%20Elpa%20rezult%C4%81ti%2023-11-25.xlsx","XLSX"]];
var R25=[["LMDA reitings 2024–2025","reitings%202024-2025.xlsx","XLSX"],["Latvian Open 2025","LATVIAN%20OPEN%20RESULTS%202025.xlsx","XLSX"],["Grand Prix Jelgava 2025, 1. diena (26.04.)","GRAND%20PRIX%20Jelgava%20-%20Day%201%20Results.xlsx","XLSX"],["Grand Prix Jelgava 2025, 2. diena (27.04.)","GRAND%20PRIX%20Jelgava%20-%20Day%202%20Results.xlsx","XLSX"],["IDO noteikumu izmaiņas no 01.01.2024.","September%202023%20LIST%20of%20IDO%20rule%20changes%20%20%20.pdf","PDF"]];
function esc(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;")}
function files(id,a){document.getElementById(id).innerHTML=a.map(function(r){return '<li><a href="'+B+r[1]+'"><span>'+esc(r[0])+'</span><em>'+r[2]+'</em></a></li>'}).join("")}
files("r26",R26);files("r25",R25);
var DOCS=[
["Dejotājiem","Šie dokumenti vajadzīgi dejotājam un viņa studijai.",[["LMDA dejotāja licences pieteikums","LMDAdejotaja-Licences-Pieteikums.doc"],["Studijas dejotāja pieteikums","Studijas-dejotaja-Pieteikums.doc"],["Pārejas lapa","Paarejas%20lapa.doc"]]],
["Treneriem","Trenera licences pieteikumi. Pārejai uz citu studiju izmanto to pašu pārejas lapu.",[["LMDA trenera pieteikums","LMDA-trenera-Pieteikums.doc"],["Studijas trenera pieteikums","Studijas-trenera-Pieteikums.doc"],["Pārejas lapa","Paarejas%20lapa.doc"]]],
["Studijām","Sadarbības līgums, ar kuru studija saņem LMDA studijas licenci.",[["LMDA līgums ar studiju","Sadarbiibas%20liigums%20ar%20LMDA-29.05..doc"]]]];
document.getElementById("docs").innerHTML=DOCS.map(function(g){return '<div class="card big"><h3>'+g[0]+'</h3><p class="note">'+g[1]+'</p><ul class="files">'+g[2].map(function(f){return '<li><a href="'+B+f[1]+'"><span>'+esc(f[0])+'</span><em>DOC</em></a></li>'}).join("")+'</ul></div>'}).join("");
var now=new Date(),nextSet=false;
document.getElementById("cal").innerHTML=CAL.map(function(e){
var past=new Date(e[0]+"T23:59:59")<now,cls=past?"past":(nextSet?"":"next");if(!past)nextSet=true;
return '<li class="'+cls+'"><div class="date">'+e[1]+' · '+esc(e[3])+'</div><h3>'+esc(e[2])+'</h3>'+e[4].map(function(t){return '<span class="tag">'+esc(t)+'</span>'}).join("")+'</li>'}).join("");
var target=new Date("2026-11-21T09:00:00+02:00"),cEl=document.getElementById("count");
function tick(){var d=target-new Date();if(d<=0){cEl.innerHTML="<div>Šodien!</div>";return}
var D=Math.floor(d/864e5),H=Math.floor(d%864e5/36e5),M=Math.floor(d%36e5/6e4);
cEl.innerHTML=[[D,"dienas"],[H,"stundas"],[M,"minūtes"]].map(function(x){return "<div>"+x[0]+"<small>"+x[1]+"</small></div>"}).join("")}
tick();setInterval(tick,30000);
var names=["sakums","sacensibas","licences","dokumenti","noteikumi","kontakti"],nav=document.getElementById("nav"),bg=document.getElementById("burger");
function route(){var h=(location.hash||"#sakums").slice(1);if(names.indexOf(h)<0)h="sakums";
names.forEach(function(n){document.getElementById("v-"+n).classList.toggle("on",n===h)});
nav.querySelectorAll("a").forEach(function(a){if(a.getAttribute("href")==="#"+h)a.setAttribute("aria-current","page");else a.removeAttribute("aria-current")});
nav.classList.remove("open");bg.setAttribute("aria-expanded","false");window.scrollTo(0,0)}
bg.onclick=function(){var o=nav.classList.toggle("open");bg.setAttribute("aria-expanded",o)};
window.addEventListener("hashchange",route);route();
