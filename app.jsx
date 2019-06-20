const veri=document.querySelector('#kisiliste')

const form=document.querySelector('#Userform')

function renderUser(doc){

    let li=document.createElement('tr');
    let Ad_Soyad=document.createElement('li');
    let E_mail=document.createElement('li');
    let Adres=document.createElement('li');
    let Telefon=document.createElement('li');

   
    li.setAttribute('data-id',doc.id);
    Ad_Soyad.textContent=doc.data().Ad_soyad;
    E_mail.textContent=doc.data().E_mail;
    Adres.textContent=doc.data().Adres;
    Telefon.textContent=doc.data().Telefon;
   

    li.appendChild(Ad_Soyad);
    li.appendChild(E_mail);
    li.appendChild(Adres);
    li.appendChild(Telefon);
    

    veri.appendChild(li);
}

db.collection('Mdatauser').get().then((snapshot)=>{
//console.log(snapshot);
snapshot.docs.forEach(doc=>{
    renderUser(doc);
    })
})

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    db.collection('Mdatauser').add({
        Ad_soyad:form.Ad_Soyad.value,
        Adres:fomm.Adres.value,
        E_mail:form.e.E_mail.value,
        Telefon:form.Telefon.value
    });
})

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    db.collection('Mdatauser').add({
        Ad_soyad:form.isim.value,
        E_mail:form.email.value,
        Adres:form.adres.value,
        Telefon:form.telefon.value
    })
    form.isim.value='';
    form.email.value='';
    form.adres.value='';
    form.telefon.value='';
})