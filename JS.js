function Play(){
	var	h,m,s,ms,S,t,V,t_l,S_l,l,out,out1;
	S = document.getElementById("distance").value;
	l = document.getElementById("Lines").value;
	h = document.getElementById("hour").value;		
	m = document.getElementById("minute").value;
	s = document.getElementById("second").value;
	ms = document.getElementById("millisecond").value;
	out = document.getElementById("out");
//	out1 = document.getElementById("out1");
	h = parseInt(h);
	m = parseInt(m);
	s = parseInt(s);
	ms = parseInt(ms);
	out.innerHTML='';

	t = (h * 60 * 60 * 1000) + (m * 60 * 1000) + (s * 1000) + ms;
	V = S/t;
	S_l=S/l;

	for(var i = 1; i<=S_l;++i)
	{	
		t_l = l*i/V
		h = t_l / 1000 / 60 / 60;
		m = t_l / 1000 / 60;
		s = t_l / 1000;
		ms = t_l ;
		h = parseInt(h);
		m = parseInt(m);
		s = parseInt(s);
		ms = parseInt(ms);
		while(m>=60)
		{
			m-=60;		
		}
		while(s>=60)
		{
			s-=60;		
		}
		while(ms>=1000)
		{
			ms-=1000;		
		}
		out.innerHTML += i*l+'м - '+h+':'+m+':'+s+':'+ms+"\n";
		
	}
}
