//����n��m���������
function randomInteger(n, m){
        var random = Math.floor(Math.random()*(m-n+1)+n);
        return random;
}
//����n��m�����ʵ��
function randomReal(n, m){
        var random = Math.random()*(m-n+1)+n;
        return random;
}
/* //�������ַ���
//��randomString("a,b,c")���->a��b��c
function randomString(string){
  var s=string.split(",");
var random = s[Math.floor(Math.random()*s.length)];
return random;
}
//����������
//��randomChoice("1,0xA,010")���->1��10��8
function randomString(string){
  var s=string.split(",");
var random = parseInt(s[Math.floor(Math.random()*s.length)]);
return random;
} */
//��������ֵΪn����ΧΪm�������
function randomMean(n, m){
	var random = Math.random()*((n+m/2)-(n-m/2)+1)+(n-m/2);
        return random;
}
//����һ��������Ϊ10^n�������
function randomOrder(n){
	var random = Math.random()*(9*Math.pow(10, n-1))+Math.pow(10, n-1);
	return random;
}
//����������������ȵ�ʵ��
function randomEven(n, m){
var b=-2;
for(var a=-2;Math.pow(10, a)<=Math.abs(m/10);a++){
b++;
}
	var rn = (Math.random()*(m-(n)+1)+(n))*(Math.pow(10, -b));
	var ro = Math.random()*(b+2)-2;
	var random = (rn*Math.pow(10, ro));
	return random;
}
