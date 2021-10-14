//CREATE VARIABE WITH MSRP LINE, CONVERT TO STRING
{var MSRP = getField("MSRP SELLING PRICE").value;
if (MSRP == Number);
(MSRP = MSRP.toString(10));
}

//CHECK MSRP VARIABLE FOR ",", REMOVE IF NECESSARY AND CHANGE STRING TO NUM

{if (MSRP.indexOf(",") <= -1)
var MSRP_NUM = Number(v);

else var MSRP_NUM = Number(v. replace(/,/g,""));
}

//CREATE VARIABLE FOR SALE PRICE LINE, CONVERT TO STRING

{var SALE = getField('SALE PRICE').value;
if (SALE == Number);
(SALE = SALE.toString(10));
}

// CHECK SALE VARIABLE FOR ",", REMOVE IF NECESSARY AND CHANGE STRING TO NUM 

{if (SALE.indexOf(",") <= -1)
var SALE_NUM = Number(s);

else var SALE_NUM = Number(s. replace(/,/g,""));
}

//SUBTRACT SALE PRICE FROM MSRP, ADD COMMA(S) BACK TO DIFFERENCE 

{if (MSRP_NUM !== 0)
var DIFFERENCE = (MSRP_NUM - SALE_NUM);
else if (SALE_NUM == 0);
var SAVINGS = MSRP_NUM.toString(10);

var s3 = (s2+"").replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// "SAVINGS" BLANK IF NO INPUT, "SAVINGS" SHOWS DIFFERENCE IF INPUT

{if (v1 >= 0)
event.value = s3;

else if (s2 == v1)
event.value = "";

else event.value = s3;
}