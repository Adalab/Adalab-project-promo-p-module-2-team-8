"use strict";const titleDesign=document.querySelector(".js-titleDesign"),titleFill=document.querySelector(".js-titleFill"),titleShare=document.querySelector(".js-titleShare"),firstFieldset=document.querySelector(".js-firstFieldset"),secondFieldset=document.querySelector(".js-secondFieldset"),thirdFieldset=document.querySelector(".js-thirdFieldset"),angleDesign=document.querySelector(".js-angleDesign"),angleFill=document.querySelector(".js-angleFill"),angleShare=document.querySelector(".js-angleShare");function openCollapsable(e){"design"===e&&(firstFieldset.classList.toggle("collapsed"),secondFieldset.classList.add("collapsed"),thirdFieldset.classList.add("collapsed")),"fill"===e&&(firstFieldset.classList.add("collapsed"),secondFieldset.classList.toggle("collapsed"),thirdFieldset.classList.add("collapsed")),"share"===e&&(firstFieldset.classList.add("collapsed"),secondFieldset.classList.add("collapsed"),thirdFieldset.classList.toggle("collapsed"))}function angleRotate(e){"design"===e&&(angleDesign.classList.toggle("rotate"),angleFill.classList.add("rotate"),angleShare.classList.add("rotate")),"fill"===e&&(angleDesign.classList.add("rotate"),angleFill.classList.toggle("rotate"),angleShare.classList.add("rotate")),"share"===e&&(angleDesign.classList.add("rotate"),angleFill.classList.add("rotate"),angleShare.classList.toggle("rotate"))}function handleCollapse(e){e.preventDefault();const t=e.currentTarget.id;openCollapsable(t),angleRotate(t)}titleDesign.addEventListener("click",handleCollapse),titleFill.addEventListener("click",handleCollapse),titleShare.addEventListener("click",handleCollapse);const previewContainer=document.querySelector(".js-preview"),allRadioButtons=document.querySelectorAll(".js_radio");function handleClickRadioUnique(e){const t="palette-"+e.currentTarget.value;previewContainer.classList.remove("palette-1"),previewContainer.classList.remove("palette-2"),previewContainer.classList.remove("palette-3"),previewContainer.classList.remove("palette-4"),previewContainer.classList.remove("palette-5"),previewContainer.classList.remove("palette-6"),previewContainer.classList.add(t),dataObjets.palette=e.currentTarget.value}for(const e of allRadioButtons)e.addEventListener("click",handleClickRadioUnique);const cardPersonalInfo=document.querySelector(".js-personalName"),cardJob=document.querySelector(".js-cardJob"),iconEmail=document.querySelector(".js-iconEmail"),iconPhone=document.querySelector(".js-iconPhone"),iconLinkedin=document.querySelector(".js-iconLinkedin"),iconGithub=document.querySelector(".js-iconGithub"),fillDiv=document.querySelector(".js-secondFieldset");let dataObjets={palette:1,name:"",job:"",phone:"",email:"",linkedin:"",github:"",photo:""};function keyUpInputs(e){const t=e.target;"completeName"===t.id?dataObjets.name=t.value:"marketStall"===t.id?dataObjets.job=t.value:"addemail"===t.id?dataObjets.email=t.value:"addphone"===t.id?dataObjets.phone=t.value:"addimage"===t.id?dataObjets.photo=t.value:"addLinkedin"===t.id?dataObjets.linkedin=t.value:"addGithub"===t.id&&(dataObjets.github=t.value),renderPreview()}function renderPreview(){""===dataObjets.name?cardPersonalInfo.innerHTML="Nombre Apellido":cardPersonalInfo.innerHTML=dataObjets.name,""===dataObjets.job?cardJob.innerHTML="Frontend developer":cardJob.innerHTML=dataObjets.job,iconEmail.href="mailto: "+dataObjets.email,iconLinkedin.href=dataObjets.linkedin,iconGithub.href=dataObjets.github,iconPhone.href="tel: "+dataObjets.phone}fillDiv.addEventListener("keyup",keyUpInputs);const fr=new FileReader,fileField=document.querySelector(".js__profile-upload-btn"),profileImage=document.querySelector(".js__profile-image"),profilePreview=document.querySelector(".js__profile-preview");function getImage(e){const t=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(t)}function writeImage(){profileImage.style.backgroundImage=`url(${fr.result})`,profilePreview.style.backgroundImage=`url(${fr.result})`,dataObjets.photo=fr.result}function fakeFileClick(){fileField.click()}fileField.addEventListener("change",getImage);const input=document.querySelectorAll(".js-input"),reset=document.querySelector(".js-reset");function handleClickReset(){document.getElementById("myform").reset(),resetCard()}function resetCard(){handleClickRadioUnique(event),cardPersonalInfo.innerHTML="Nombre Apellidos",cardJob.innerHTML="Front-End developer",iconEmail.href="",iconPhone.href="",iconGithub.href="",iconLinkedin.href="",profileImage.style="",profilePreview.style="",dataObjets={palette:1,name:"",job:"",phone:"",email:"",linkedin:"",github:"",photo:""};for(let e=0;e<input.length;e++)input[e].value=""}reset.addEventListener("click",handleClickReset);const createButton=document.querySelector(".js_create_button"),twitterButton=document.querySelector(".js-twitterButton"),urlCard=document.querySelector(".js_url_card"),createCard=document.querySelector(".js-fourFieldset"),cardError=document.querySelector(".js-errorCard");function handleClickCreateButton(e){e.preventDefault(),""!==dataObjets.palette&&""!==dataObjets.name&&""!==dataObjets.job&&""!==dataObjets.email&&""!==dataObjets.linkedin&&""!==dataObjets.github&&""!==dataObjets.photo?fetch("//awesome-profile-cards.herokuapp.com/card",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(dataObjets)}).then(e=>e.json()).then(e=>{e.success&&(urlCard.innerHTML=e.cardURL,urlCard.href=e.cardURL,createCard.classList.remove("collapsed"))}):cardError.innerHTML="Rellena todos los datos del formulario"}function twitterShare(e){e.preventDefault();let t="https://twitter.com/intent/tweet?text=He%20creado%20una%20tarjeta%20con%20el%20Awesome%20profile%20cards%20del%20equipo%20Ninfas&url="+urlCard.href;window.location.href=t}createButton.addEventListener("click",handleClickCreateButton),twitterButton.addEventListener("click",twitterShare);