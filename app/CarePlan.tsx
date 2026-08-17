"use client";

import { useEffect, useMemo, useState } from "react";

type Answers = { name:string; animal:string; personality:string; needs:string[]; away:string; joy:string };
const initial:Answers={name:"",animal:"Dog",personality:"Affectionate but cautious",needs:[],away:"A long weekend",joy:"Slow walks & sniffing"};
const characters:Record<string,string>={
  "Affectionate but cautious":"/pixel-characters/affectionate-dog.svg",
  "Independent royalty":"/pixel-characters/royal-cat.svg",
  "Friendly with everyone":"/pixel-characters/friendly-dog.svg",
  "Shy until snacks appear":"/pixel-characters/shy-cat.svg",
  "Professional chaos goblin":"/pixel-characters/chaos-snake.svg",
  "Calm little observer":"/pixel-characters/calm-owl.svg"
};
const questions=[
  {key:"animal",eyebrow:"First things first",title:"Who are we caring for?",help:"Choose the closest match.",options:[["Dog","🐕"],["Cat","🐈"],["Rabbit","🐇"],["Bird","🦜"],["Reptile","🦎"],["Small animal","🐹"]]},
  {key:"personality",eyebrow:"Their social style",title:"How would you describe them?",help:"This helps shape the pace of the first visits.",options:[["Affectionate but cautious",""],["Independent royalty",""],["Friendly with everyone",""],["Shy until snacks appear",""],["Professional chaos goblin",""],["Calm little observer",""]]},
  {key:"needs",eyebrow:"Care details",title:"Any special needs?",help:"Select as many as needed.",options:[["Medication","＋"],["Senior care","⌁"],["Young & energetic","↟"],["Special feeding","◇"],["Mobility support","≈"],["None right now","✓"]]},
  {key:"away",eyebrow:"Your plans",title:"How long will you be away?",help:"We’ll suggest a starting visit pattern.",options:[["One full day","1"],["A long weekend","3"],["About a week","7"],["Longer than a week","∞"]]},
  {key:"joy",eyebrow:"The important bit",title:"What makes them happiest?",help:"Choose their non-negotiable joy.",options:[["Slow walks & sniffing","〰"],["Cuddles on demand","♡"],["Playtime & zoomies","↗"],["Peace, quiet & routine","○"],["Treat-based negotiations","◇"],["Exploring their habitat","✦"]]}
];

export default function CarePlan(){
  const[screen,setScreen]=useState<"intro"|"quiz"|"loading"|"result">("intro");
  const[step,setStep]=useState(0);const[answers,setAnswers]=useState<Answers>(initial);const[shareStatus,setShareStatus]=useState("");
  const[petPhoto,setPetPhoto]=useState("");const[photoName,setPhotoName]=useState("");
  const q=questions[step];const pet=answers.name.trim()||"Luna";const progress=((step+1)/5)*100;
  const persona=useMemo(()=>answers.personality==="Professional chaos goblin"?"The Lovable Wildcard":answers.personality==="Independent royalty"?"The Tiny Monarch":answers.personality==="Calm little observer"?"The Gentle Watcher":answers.personality==="Friendly with everyone"?"The Social Butterfly":answers.personality==="Shy until snacks appear"?"The Quiet Negotiator":"The Soft-Hearted Explorer",[answers.personality]);
  useEffect(()=>{const p=new URLSearchParams(window.location.search);if(p.get("card")!=="1")return;setAnswers({name:p.get("pet")||"Luna",animal:p.get("animal")||"Pet",personality:p.get("personality")||initial.personality,needs:(p.get("needs")||"").split("|").filter(Boolean),away:p.get("away")||initial.away,joy:p.get("joy")||initial.joy});setScreen("result");setTimeout(()=>document.getElementById("care-plan")?.scrollIntoView(),50)},[]);
  useEffect(()=>{if(screen!=="quiz"&&screen!=="loading")return;const previous=document.body.style.overflow;document.body.style.overflow="hidden";return()=>{document.body.style.overflow=previous}},[screen]);
  function choose(value:string){if(q.key==="needs")setAnswers(a=>({...a,needs:value==="None right now"?[value]:[...a.needs.filter(x=>x!=="None right now"&&x!==value),value]}));else setAnswers(a=>({...a,[q.key]:value}));}
  function selected(value:string){const v=answers[q.key as keyof Answers];return Array.isArray(v)?v.includes(value):v===value}
  function next(){if(step<4)setStep(step+1);else{setScreen("loading");setTimeout(()=>setScreen("result"),1100)}}
  function addPhoto(e:React.ChangeEvent<HTMLInputElement>){const file=e.target.files?.[0];if(!file)return;if(!file.type.startsWith("image/"))return;const reader=new FileReader();reader.onload=()=>{setPetPhoto(String(reader.result||""));setPhotoName(file.name)};reader.readAsDataURL(file)}
  function restart(){setAnswers(initial);setPetPhoto("");setPhotoName("");setStep(0);setScreen("intro");history.replaceState({},"",window.location.pathname+"#care-plan")}
  const whatsapp=`https://wa.me/306980770839?text=${encodeURIComponent(`Hi Melissanthi! I created a starter care plan for ${pet}, my ${answers.animal.toLowerCase()}. They are ${answers.personality.toLowerCase()} and love ${answers.joy.toLowerCase()}. We'll be away: ${answers.away.toLowerCase()}. Special notes: ${answers.needs.join(", ")||"none"}. Could we arrange a meet & greet?`)}`;
  async function sharePersonality(target:"instagram"|"facebook"){
    const params=new URLSearchParams({card:"1",pet,animal:answers.animal,personality:answers.personality,needs:answers.needs.join("|"),away:answers.away,joy:answers.joy});const url=`${location.origin}${location.pathname}?${params.toString()}#care-plan`;const text=`${pet} is ${persona}. ${answers.personality}. Created with Kypseli Pet Sitting.`;
    const c=document.createElement("canvas");c.width=1080;c.height=1350;const x=c.getContext("2d");if(!x)return;
    x.fillStyle="#e7b497";x.fillRect(0,0,1080,1350);x.fillStyle="#2b2926";x.font="700 28px Arial";x.fillText("KYPSELI PET SITTING",70,82);
    const character=new Image();character.src=characters[answers.personality];await new Promise<void>(r=>{character.onload=()=>r();character.onerror=()=>r()});
    if(character.naturalWidth){const ratio=Math.min(190/character.naturalWidth,170/character.naturalHeight);const w=character.naturalWidth*ratio,h=character.naturalHeight*ratio;x.drawImage(character,1030-w,35,w,h)}
    x.font="600 72px Georgia";x.fillText(`${pet} is`,70,205);x.font="600 92px Georgia";let line="",y=315;for(const w of persona.split(" ")){const t=`${line}${w} `;if(x.measureText(t).width>900&&line){x.fillText(line,70,y);line=`${w} `;y+=102}else line=t}x.fillText(line,70,y);
    x.font="700 31px Arial";x.fillText(answers.personality.toUpperCase(),70,y+64);x.font="600 27px Arial";x.fillText(`🐇  ${answers.joy}`,70,y+112);
    if(petPhoto){const photo=new Image();photo.src=petPhoto;await new Promise<void>(r=>{photo.onload=()=>r();photo.onerror=()=>r()});if(photo.naturalWidth){const bx=70,by=y+165,bw=940,bh=600;const scale=Math.max(bw/photo.naturalWidth,bh/photo.naturalHeight);const sw=bw/scale,sh=bh/scale,sx=(photo.naturalWidth-sw)/2,sy=(photo.naturalHeight-sh)/2;x.save();x.beginPath();x.rect(bx,by,bw,bh);x.clip();x.drawImage(photo,sx,sy,sw,sh,bx,by,bw,bh);x.restore()}}
    else if(character.naturalWidth){const ratio=Math.min(680/character.naturalWidth,560/character.naturalHeight);const w=character.naturalWidth*ratio,h=character.naturalHeight*ratio;x.drawImage(character,1080-w-40,1350-h-35,w,h)}
    x.font="700 24px Arial";x.fillText("kypselipetsitting.gr",70,1292);const blob=await new Promise<Blob|null>(r=>c.toBlob(r,"image/png"));const file=blob?new File([blob],`${pet.toLowerCase().replace(/[^a-z0-9]+/g,"-")}-personality.png`,{type:"image/png"}):null;
    try{
      setShareStatus("Opening share options…");
      if(file&&navigator.share&&navigator.canShare?.({files:[file]})){
        await navigator.share({title:`${pet}'s care personality`,text,url,files:[file]});
        setShareStatus("Shared ✓");
      }else if(target==="facebook"){
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,"_blank","noopener,noreferrer");
        setShareStatus("Facebook opened ✓");
      }else{
        setShareStatus("Open on mobile to share to Instagram");
      }
    }catch(e){if((e as Error).name!=="AbortError")setShareStatus("Could not open sharing");else setShareStatus("")}
    setTimeout(()=>setShareStatus(""),2500);
  }
  return <section className="care" id="care-plan">
    {screen==="intro"&&<div className="care-intro"><div><p className="care-label">A little help from Meli’s assistant</p><h2>Let’s build your pet’s <em>happy</em> care plan.</h2><p>Five friendly questions create a thoughtful starting point for your meet and greet.</p><label>Pet’s name <small>(optional)</small><input value={answers.name} onChange={e=>setAnswers({...answers,name:e.target.value})} placeholder="e.g. Luna"/></label><label className="care-photo-upload"><span>{petPhoto?"✓ Photo added":"Add your pet’s photo"} <small>(optional)</small></span><input type="file" accept="image/*" onChange={addPhoto}/>{petPhoto&&<em>{photoName}</em>}</label><button className="care-primary" onClick={()=>setScreen("quiz")}>Create their plan <span>→</span></button><small>Takes about 30 seconds. No medical advice and no data saved.</small></div><div className="care-intro-art"><img src="/pixel-characters/affectionate-dog.svg" alt=""/><p>Personality matters.<br/>Routine comes first.</p></div></div>}
    {screen==="quiz"&&<div className="care-quiz"><aside><button onClick={()=>step?setStep(step-1):setScreen("intro")}>← Back</button><div><p className="care-label">Pet care assistant</p><h2>A better plan starts with the little things.</h2></div><b>{String(step+1).padStart(2,"0")} / 05</b></aside><div className="care-question"><div className="care-progress"><i style={{width:`${progress}%`}}/></div><p className="care-label">{q.eyebrow}</p><h3>{q.title}</h3><p>{q.help}</p><div className={`care-options ${q.key==="personality"?"care-personalities":""}`}>{q.options.map(([label,icon])=><button key={label} className={selected(label)?"selected":""} onClick={()=>choose(label)}><span>{q.key==="personality"?<img src={characters[label]} alt=""/>:icon}</span><strong>{label}</strong><i>{selected(label)?"✓":""}</i></button>)}</div><div className="care-actions"><small>Question {step+1} of 5</small><button className="care-primary" onClick={next}>{step===4?"Build the plan":"Continue"} <span>→</span></button></div></div></div>}
    {screen==="loading"&&<div className="care-loading"><span>✦</span><p className="care-label">Meli’s assistant is thinking</p><h2>Building {pet}’s happiest routine…</h2></div>}
    {screen==="result"&&<div className="care-result"><header><p className="care-label">Your personalized starting point</p><h2>Meet {pet}’s care plan.</h2><p>Melissanthi will confirm every detail with you before booking.</p></header><div className="care-result-grid care-result-simple"><article className="care-plan-card"><small>Recommended care rhythm · {answers.animal} · {answers.away}</small><h3>{answers.away==="One full day"?"Two thoughtful check-ins":"Morning + evening visits"}</h3><p className="care-verdict">A calm, familiar routine built around <strong>🐇 {answers.joy}</strong></p><div className="care-times"><p><b>🐇</b><span><strong>Morning hello · 09:00</strong>Food, fresh water and a relaxed start.</span></p><p><b>🐇</b><span><strong>Evening reset · 18:00</strong>{answers.joy}, dinner and a photo update.</span></p></div></article><article className={`care-persona-card ${petPhoto?"has-pet-photo":""}`}>{petPhoto&&<img className="care-pet-photo" src={petPhoto} alt={`${pet} uploaded by their human`}/>}<img className={petPhoto?"care-character-badge":"care-character-fallback"} src={characters[answers.personality]} alt=""/><p className="care-label">{pet}’s care personality</p><h3>{persona}</h3><p className="care-persona-verdict">{answers.personality}. Happiest with {answers.joy.toLowerCase()}.</p><div className="care-traits"><strong>🐇 {answers.personality}</strong><strong>🐇 {answers.joy}</strong>{answers.needs.filter(n=>n!=="None right now").map(n=><strong key={n}>🐇 {n}</strong>)}</div><div className="care-social-share"><button onClick={()=>sharePersonality("instagram")}>Share to Instagram Story</button><button onClick={()=>sharePersonality("facebook")}>Post on Facebook</button></div>{shareStatus&&<small className="care-share-status">{shareStatus}</small>}</article></div><div className="care-cta"><div><small>Ready for the human part?</small><h3>Send this plan to Melissanthi.</h3></div><div><a href={whatsapp} target="_blank" rel="noreferrer">Continue on WhatsApp ↗</a><button onClick={restart}>Start again</button></div></div></div>}
  </section>
}
