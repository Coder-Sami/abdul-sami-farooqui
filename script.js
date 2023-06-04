eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('1.f=()=>{8(7.a>0){1.4(\'.2\').3.c(\'5\')}b{1.4(\'.2\').3.6(\'5\')}};1.g=()=>{8(7.a>0){1.4(\'.2\').3.c(\'5\')}b{1.4(\'.2\').3.6(\'5\')}};e 9=1.4(\'.2 .9\');e d=1.4(\'.2 .i\');d.j(\'l\',()=>{9.3.k(\'h\')});1.f=()=>{9.3.6(\'h\');8(7.a>0){1.4(\'.2\').3.c(\'5\')}b{1.4(\'.2\').3.6(\'5\')}};1.g=()=>{8(7.a>0){1.4(\'.2\').3.c(\'5\')}b{1.4(\'.2\').3.6(\'5\')}};',22,22,'|document|header|classList|querySelector|active|remove|window|if|navbar|scrollY|else|add|menuButton|const|onscroll|onload|show|menu|addEventListener|toggle|click'.split('|'),0,{}))

function submitForm() {
   // Get the first form with the name
   // Usually the form name is not repeated
   // but duplicate names are possible in HTML
   // Therefore to work around the issue, enforce the correct index
   var frm = document.getElementsByName('contact-form')[0];
   frm.submit(); // Submit the form
   frm.reset();  // Reset all form data
   return false; // Prevent page refresh
}
