// SALE PRICE VARIABLE CHECK FOR COMMAS, REMOVE, AND MAKE NUM

{var c = getField("SALE PRICE").value;
if (c == Number);
(c = c.toString(10));
}

{if (c.indexOf(",") <=-1)
var c1 = Number(c);

else var c1 = Number(c. replace(/,/g,""));
}

// ACCESSORIES VARIABLE CHECK FOR COMMAS, REMOVE, AND MAKE NUM

{var d = getField("ACCESSORIES").value;
if (d == Number);
(d = d.toString(10));
}

{if (d.indexOf(",") <=-1)
var d1 = Number(d);

else var d1 = Number(d. replace(/,/g,""));
}

// DEALER FEE VARIABLE - MAKE NUM

var e1 = Number(795);

//CREATE SUBTOTAL VARIABLE WITH/WITHOUT ACCESSORIES FOR IF FIELD IS BLANK

var s = e1 + c1;

//IF ACC HAS A VALUE, CREATE NEW VARIABLE WITH S + ACCESSORIES

{if(d1 !== 0)
var s1 = s + d1;

//ELSE LEAVE AS SALE PRICE + DEALER FEE

else(s1 = s);
}

//IF S1 DOES NOT EQUAL 795, PRINTS S1

if(s1 !== e1)
event.value = (s1+'').replace(/\B(?=(\d{3})+(?!\d))/g, ',');

//ELSE LEAVES BLANK - SO THAT DURING PRINTING IT IS EMPTY
else(event.value = "");
