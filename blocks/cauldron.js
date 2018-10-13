name = "cauldron";
material = "rock";
stepSound = "stone";
creativeTab = "_Shage";
drop[0] = "shagecraft:cauldron";
tileEntity[0] = "entityCauldron";
hasTileEntity[0] = true;
addToCreative[0] = true;
hardness[0] = 1.0;
toolClass[0] = "pickaxe";
harvestLevel[0] = 1;
textureFileXP[0] = "cauldronSide.png";
textureFileXN[0] = "cauldronSide.png";
textureFileYP[0] = "cauldronTop.png";
textureFileYN[0] = "cauldronBottom.png";
textureFileZP[0] = "cauldronSide.png";
textureFileZN[0] = "cauldronSide.png";

onAdded[0] = "mod.loadScript('cauldronInstall.js')";
onActivated[0] = "if(player.isSneaking()==false){player.openGui('cauldronGUI', position); result = true;}else{mod.loadScript('cauldronCheck.js');}";
onUpdate[0] = "mod.loadScript('cauldron.js');";