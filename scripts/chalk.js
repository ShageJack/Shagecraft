mod.loadScript("apiRandomHandler.js");

x=player.getLookX();
y=player.getLookY();
z=player.getLookZ();

dx=Math.floor(player.getPosX());
dy=Math.floor(player.getPosY());
dz=Math.floor(player.getPosZ());

if((Math.pow((x-dx),2)+Math.pow((y-dy),2)+Math.pow((z-dz),2))<=25){
player.damageItem(player.getCurrentSlot(),1);
if(world.getBlockName(x,y,z)!="shagecraft:charm"){
if(world.getBlockName(x,y+1,z)=="minecraft:air"){
  world.setBlockAndMetadata(x,y+1,z,"shagecraft:charm",randomInteger(0, 15));
   //world.setBlockAndMetadata(x,y+1,z,"shagecraft:charm",0);
}}
} else {
player.sendMessage("\u90a3\u592a\u8fdc\u4e86\uff01");
}
