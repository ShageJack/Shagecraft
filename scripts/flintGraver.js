x=player.getLookX();
y=player.getLookY();
z=player.getLookZ();

dx=Math.floor(player.getPosX());
dy=Math.floor(player.getPosY());
dz=Math.floor(player.getPosZ());

if((Math.pow((x-dx),2)+Math.pow((y-dy),2)+Math.pow((z-dz),2))<=25){
player.damageItem(player.getCurrentSlot(),1);
if(Math.random()<=0.15&&world.getBlockName(x,y,z)=="minecraft:clay"){
  world.setBlock(x,y,z,"shagecraft:blockClayBrick");
}
if(Math.random()<=0.15&&world.getBlockName(x,y,z)=="minecraft:brick_block"){
  world.setBlock(x,y,z,"shagecraft:blockClayBrickHeater");
}
} else {
player.sendMessage("\u90a3\u592a\u8fdc\u4e86\uff01");
}
