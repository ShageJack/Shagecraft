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
//�������ַ���
//��randomString("a,b,c")���->a��b��c
function randomString(string){
	var array = string.split(",");
	var value = array[Math.round(Math.random()*(array.length-1))];
	return valve;
}
//����������
//��randomChoice("1a,0xA,010")���->1��10��8
function randomChoice(num){
	var array = string.split(",");
	var value = array[Math.round(Math.random()*(array.length-1))];
	var re = parseInt(valve);
	return re;
}
//��������ֵΪn����ΧΪm�������
function randomMean(n, m){
	var random = Math.random()*((n+m/2)-(n-m/2)+1)+(n-m/2);
        return random;
}
//����һ��������Ϊ10^n�������
function randomOrder(n){
	var random = Math.random()*(9*Math.pow(10, n))+Math.pow(10, n);
	return random;
}
//����������������ȵĵ;���ʵ��
function randomEven(n, m){
	var b=-2;
	for(var a=-2;Math.pow(10, a)<m;a++){
		b++;
	}
	var rn = (Math.random()*(m-n+1)+n)/b;
	var ro = Math.random()*(b+3)-2;
	var random = rn*Math.pow(10, ro);
	return random;
}
