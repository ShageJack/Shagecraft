//�жϳ����巶Χ��ĳ���������
//ʹ��position,�����ڷ���
function CheckBlockCuboid(a, b, c, string){
for(var i=0;i<=a;i++){
	for(var o=0;o<=b;o++){
		for(var u=0;u<=c;u++){
if(world.getBlockName(position.x+i, position.y+o, position.z+u) == string){
a++;}
if(world.getBlockName(position.x+i, position.y-o, position.z-u) == string){
a++;}
if(world.getBlockName(position.x+i, position.y+o, position.z-u) == string){
a++;}
if(world.getBlockName(position.x+i, position.y-o, position.z+u) == string){
a++;}
if(world.getBlockName(position.x-i, position.y+o, position.z+u) == string){
a++;}
if(world.getBlockName(position.x-i, position.y-o, position.z-u) == string){
a++;}
if(world.getBlockName(position.x-i, position.y+o, position.z-u) == string){
a++;}
if(world.getBlockName(position.x-i, position.y-o, position.z+u) == string){
a++;}
}}}
return a;
}
//�жϳ����巶Χ��ĳ���������
//ʹ��position,���������(��ҵ�ǰλ��Ϊ����)
function CheckPlayerCuboid(a, b, c, string){
var x = Math.floor(player.getPosX());
var y = Math.floor(player.getPosY());
var z = Math.floor(player.getPosZ());
for(var i=0;i<=a;i++){
	for(var o=0;o<=b;o++){
		for(var u=0;u<=c;u++){
if(world.getBlockName(x+i, y+o, z+u) == string){
a++;}
if(world.getBlockName(x+i, y-o, z-u) == string){
a++;}
if(world.getBlockName(x+i, y+o, z-u) == string){
a++;}
if(world.getBlockName(x+i, y-o, z+u) == string){
a++;}
if(world.getBlockName(x-i, y+o, z+u) == string){
a++;}
if(world.getBlockName(x-i, y-o, z-u) == string){
a++;}
if(world.getBlockName(x-i, y+o, z-u) == string){
a++;}
if(world.getBlockName(x-i, y-o, z+u) == string){
a++;}
}}}
return a;
}
//�жϳ����巶Χ��ĳ���������
//ʹ��position,���������(��ҵ�ǰָ�����Է���Ϊ����)
function CheckLookingCuboid(a, b, c, string){
var x = player.getLookX();
var y = player.getLookY();
var z = player.getLookZ();
for(var i=0;i<=a;i++){
	for(var o=0;o<=b;o++){
		for(var u=0;u<=c;u++){
if(world.getBlockName(x+i, y+o, z+u) == string){
a++;}
if(world.getBlockName(x+i, y-o, z-u) == string){
a++;}
if(world.getBlockName(x+i, y+o, z-u) == string){
a++;}
if(world.getBlockName(x+i, y-o, z+u) == string){
a++;}
if(world.getBlockName(x-i, y+o, z+u) == string){
a++;}
if(world.getBlockName(x-i, y-o, z-u) == string){
a++;}
if(world.getBlockName(x-i, y+o, z-u) == string){
a++;}
if(world.getBlockName(x-i, y-o, z+u) == string){
a++;}
}}}
return a;
}
//�ж�ĳλ�õķ���ID�ͷ�������ֵ�Ƿ����
//�÷�:if(CheckBlockAndMetaData(position, "minecraft:dirt", 1) == true){player.sendMessage("It's true!");}
function CheckBlockAndMetaData(pos, string, data){
	if(world.getBlockName(pos) == string&&world.getBlockMetadata(pos) == data){
		var re = true;
	} else {
		var re = false;
	}
	return re;
}
//��ȡ���������ķ���
function GetPlayerFacingSide(){
	if(player.getHorizontalAngle()>-45&&player.getHorizontalAngle()<=45){
	var re = 0;
	//0, South, �Ϸ�
	}
	if(player.getHorizontalAngle()>45&&player.getHorizontalAngle()<=135){
	var re = 1;
	//1, West, ����
	}
	if(player.getHorizontalAngle()>135&&player.getHorizontalAngle()<=-135){
	var re = 2;
	//2, North, ����
	}
	if(player.getHorizontalAngle()>-135&&player.getHorizontalAngle()<=-45){
	var re = 3;
	//3, East, ����
	}
	return re;
//���÷���ķ���
function GetBlockFacingSide(){
	if(player.getHorizontalAngle()>-45&&player.getHorizontalAngle()<=45){
	var re = 2;
	//0, South, �Ϸ�
	}
	if(player.getHorizontalAngle()>45&&player.getHorizontalAngle()<=135){
	var re = 3;
	//1, West, ����
	}
	if(player.getHorizontalAngle()>135&&player.getHorizontalAngle()<=-135){
	var re = 0;
	//2, North, ����
	}
	if(player.getHorizontalAngle()>-135&&player.getHorizontalAngle()<=-45){
	var re = 1;
	//3, East, ����
	}
	return re;
//���λ��(�����ڷ��÷���ʱд����÷�����ΪFacePos��IntData��)
function rbp(aleft, atop, aback){
	if(world.getTileEntityIntData(position, "FacePos")==0){
	var ax = aleft;
	var ay = atop;
	var az = aback;
	}
	if(world.getTileEntityIntData(position, "FacePos")==1){
	var ax = -aback;
	var ay = atop;
	var az = aleft;
	}
	if(world.getTileEntityIntData(position, "FacePos")==2){
	var ax = -aback;
	var ay = atop;
	var az = -aleft;
	}
	if(world.getTileEntityIntData(position, "FacePos")==3){
	var ax = aback;
	var ay = atop;
	var az = -aleft;
	}
	var re = position.x+ax,position.y+ay,position.z+az;
	return re;

	
