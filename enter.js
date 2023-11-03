se="<br>"
mennyi=2;
ok=0;
usernum=0;
vonal="<hr width='100%'>";
logout=se+se+se+vonal+"<a href='javascript:void(window.history.back())'> Kijelentkezés"

function user(username, password, nev, uzenet, megjegyzes)
{
	this.username=username;
	this.password=password;
	this.nev=nev;
	this.uzenet=uzenet;
	this.megjegyzes=megjegyzes;
}



function search(un, passwd)
{
var html="<META content='text/html; charset=windows-1250' http-equiv=Content-Type><BASEFONT face='Verdana, Arial, Helvetica' size=1>"+"<body bgcolor='#2E1F4F'background='alap-hatter.jpg' topmargin=0 leftmargin=0 marginheight=0 marginwidth=0><BASEFONT face='Verdana, Arial, Helvetica, sans-serif' size=1 color=#000080>";
document.write(html);
for (i=1; i<=mennyi; i++)
{
	usernum==i;
	if ((un==users[i].username)&&(passwd==users[i].password))
		{
		ok=1;
		aktuser=new user(users[i].username, users[i].password, users[i].nev, users[i].uzenet, users[i].megjegyzes);
		}

}
	if (ok!=1)
		{
		document.write("<font size=2><b>A felhasználói név vagy jelszó nem megfelelő!</font></b>");
		document.write(se+"<a href='javascript:void(window.history.back())'>Vissza");
		}
	else
		{
		document.write("Belépés rendben!");
		document.write(se+"<font size=2><b>Köszöntelek, "+aktuser.nev+"!</font></b>"+se+se);
		if (aktuser.uzenet=="")
			{document.write("Nincs üzeneted.");}
		else document.write("Üzenet: "+aktuser.uzenet);
		document.write(se+se+aktuser.megjegyzes);	
		document.write(logout);
		}

}

users=new Array(mennyi);
users[1]=new user("v_balazs", "Balazs125", "Varga Balázs", "", "");
users[2]=new user("gabor", "Gabor15", "Veres Gábor", "", "");
