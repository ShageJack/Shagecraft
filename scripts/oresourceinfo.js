var vx=player.getLookX();
var vy=player.getLookY();
var vz=player.getLookZ();
if(world.getBlockName(vx, vy, vz) == "shagecraft:oresource"){
player.sendMessage("��Դλ��: x:"+vx+" y:"+vy+" z:"+vz);
player.sendMessage("��Դ����: "+world.getTileEntityStringData(vx, vy, vz, "OreType"));
player.sendMessage("��Դ����ֵ: "+world.getTileEntityStringData(vx, vy, vz, "OreMetadata"));
player.sendMessage("��Դʣ��: "+world.getTileEntityIntData(vx, vy, vz, "OreCount"));
player.sendMessage("��Դ����: "+world.getTileEntityIntData(vx, vy, vz, "OreGenSpeed"));
player.sendMessage("ע:ÿ����Ϸ���е�һ��0-1�����ʵ�����Բ��ʵ�ƽ������2048ʱ�ڿ�Դ�Ϸ����ɿ���(����ʼ�ա�50)");
} else {
	player.sendMessage("Ŀ�겻��һ����Դ!");
}