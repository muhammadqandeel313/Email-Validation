*Javascript*

1) Sab sy pehly hum ny variables initialize kiay, nameEr,phoneEr,emailEr,messageEr,submitEr, dom elements kokm refer karny ky liay

2) Us ky baad hum ny "contact-name" ko functional banany ky liay function banaya "validateName()" ky name per,
    us function main hum "input" tag "contact-name" ki value ko 'name' variable main refer kia
    us ky baad if loop ko use kia ky agar "name" ki length 0 hai tou 'nameEr' ki inner value ko "Write full name" kr dia or return false kar dia  
    Phir us ky baad humny aik or 'if' condition di jss main name ko match kia "Regex" expression sy ky agar wou match nhi hain tou error ai ga "Write full name"  or return false kar dia
    Us ky baad hum nameEr ki value tic icon kar di hai or phir return true har dia
    or us ky baad name input tag main "onkeyup="validateName()" function execute kar dia

2) Us ky baad hum ny phone-no ko function banany ky liay function banaya 'validatePhone',
    Phir us ky Dom element ki value ko "phone" main refer kia .
    Or us  per if condition chalaya ky agar phone ki lenght 0 hai tou phoneEr ka inner html chnage ho ga "Please enter tha no"
    Or return false kia or phir if lagaya ky agar length 11 sy kam hai tou  phoneEr ka inner html chnage ho ga "Please no should be 11"
    or return false phir aik or condition if phir sy or regex sy match kia or match na honay ki surat main phir  phoneEr ka inner html chnage ho ga "Only digits please" return false kia
    phir us ky baad condition match ho gai tou phoneEr ki inner html ki value tic icon kar di hai or phir return true har dia
    or us ky baad name input tag main "onkeyup="validatePhone()" function execute kar dia

3) Us ky baad hum ny "email-address" ko functional banany ky liay function banaya "validateEmail()" ky name per,
        us function main hum "input" tag "email-address" ki value ko 'email' variable main refer kia
        us ky baad if loop ko use kia ky agar "email" ki length 0 hai tou 'emailEr' ki inner value ko "email is required" kr dia or return false kar dia
        Phir us ky baad humny aik or 'if' condition di jss main name ko match kia "Regex" expression sy ky agar wou match nhi hain tou error ai ga "email invalid"  or return false kar dia
        phir us ky baad condition match ho gai tou emailEr ki inner html ki value tic icon kar di hai or phir return true har dia
        or us ky baad name input tag main "onkeyup="validateEmail()" function execute kar dia
4) Us ky baad hum ny "email-address" ko functional banany ky liay function banaya "validateEmail()" ky name per,
     us function main hum "input" tag "message" ki value ko 'message' variable main refer kia phir var banaya required = 30
     phir aik or var banaya baqi = required - message.length
     phir if condition lagai ky left agr 0 sy chota hai tou, tou error inner html = left + "more characters required" or return false
     or agr match ho gayi tou tic icon or return true

5) Phir aik validateForm() func banaya jou sary function ko check kary ga ky agar koi aik bhi condtion false hai tou ! usya negatre kary ga or condtion false ho gi or submitError block yani display ho jaye ga
     or inner html ki value change ho jaye gi or set time out sy 3 second baad display none ho jaye gi

*Learnings*

1) onkeyup="validateName()"
2) Regular expressions in Javascript
3)  Return ka faida yai hai ky jab condition match nhi ho gi us waqt tak tk function reurn nhi ho ga jab match ho gi tou phir match hao ga
4) '!' operator