name = "woodstack";
material = "wood";
stepSound = "wood";
creativeTab = "_Shage";
drop[0] = "shagecraft:woodstack";
addToCreative[0] = true;
hardness[0] = 1.0;
toolClass[0] = "axe";
harvestLevel[0] = 1;
textureFileXP[0] = "woodstackside0.png";
textureFileXN[0] = "woodstackside0.png";
textureFileYP[0] = "woodstackend0.png";
textureFileYN[0] = "woodstackend0.png";
textureFileZP[0] = "woodstackside0.png";
textureFileZN[0] = "woodstackside0.png";
flammability[0] = 20;
fireSpreadSpeed[0] = 5;

tileEntity[1] = "entityData";
hasTileEntity[1] = true;
drop[1] = "shagecraft:itemUseless";
addToCreative[1] = true;
hardness[1] = 1.0;
toolClass[1] = "axe";
harvestLevel[1] = 1;
textureFileXP[1] = "woodstackside1.png";
textureFileXN[1] = "woodstackside1.png";
textureFileYP[1] = "woodstackend1.png";
textureFileYN[1] = "woodstackend1.png";
textureFileZP[1] = "woodstackside1.png";
textureFileZN[1] = "woodstackside1.png";
flammability[1] = 0;
fireSpreadSpeed[0] = 1;

onAdded[1] = "world.setTileEntityFloatData(position,'temperature',900);world.setTileEntityFloatData(position,'flammable',5000);";
onUpdate[1] = "mod.loadScript('woodstackonfire.js');";
