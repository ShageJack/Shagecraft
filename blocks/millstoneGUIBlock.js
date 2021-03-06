name = "millstoneGUIBlock";
material = "rock";
stepSound = "stone";
creativeTab = "_Shage";
drop[0] = "shagecraft:millstoneGUIBlock";
tileEntity[0] = "entityMillstoneGUIBlock";
hasTileEntity[0] = true;
addToCreative[0] = true;
hardness[0] = 1.0;
toolClass[0] = "pickaxe";
harvestLevel[0] = 1;
textureFileXP[0] = "millstoneGUIBlock0.png";
textureFileXN[0] = "millstoneGUIBlock0.png";
textureFileYP[0] = "millstoneGUIBlockTop0.png";
textureFileYN[0] = "millstoneGUIBlockTop0.png";
textureFileZP[0] = "millstoneGUIBlock0.png";
textureFileZN[0] = "millstoneGUIBlock0.png";

onAdded[0] = "world.setTileEntityFloatData(position,'kenergy',0.0);world.setTileEntityFloatData(position,'maxEnergy',40000.0);world.setTileEntityIntData(position,'complete',0);world.setTileEntityIntData(position,'working',0);world.setTileEntityIntData(position,'count',0);";
onActivated[0] = "mod.loadScript('millstoneGUI.js')";
onUpdate[0] = "mod.loadScript('millstone.js');";
onBreak[0] = "if(world.getTileEntityIntData(position,'working')==1){world.createExplosion(position,3,false);world.setBlock(position,'minecraft:air');}";
