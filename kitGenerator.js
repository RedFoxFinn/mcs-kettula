
const stuff = {
  enchanting: 'enchanting_table',
  crafting: 'crafting_table',
  bow: 'bow',
  tnts: 'tnt 64',
  arrows: 'arrow 64',
  torches: 'torch 64',
  redstoneTorches: 'redstone_torch 64',
  underwaterTorches: 'underwater_torch 64',
  hardenedGlass: 'hard_glass 64',
  polishedBlackstone: 'polished_blackstone 64',
  polishedBlackstoneSlab: 'polished_blackstone_slab 64',
  polishedBlackstoneStair: 'polished_blackstone_stairs 32',
  polishedBlackstoneWall: 'polished_blackstone_wall 64'
};

const creative = () => {
  return [stuff.enchanting, stuff.crafting, stuff.bow, stuff.tnts, stuff.arrows, stuff.torches, 
    stuff.redstoneTorches, stuff.underwaterTorches, stuff.hardenedGlass, stuff.polishedBlackstone, 
    stuff.polishedBlackstoneSlab, stuff.polishedBlackstoneStair, stuff.polishedBlackstoneWall];
};

const peaceful = () => {
  return [stuff.enchanting, stuff.crafting, stuff.bow, stuff.arrows, stuff.torches];
};

module.exports = {creative: creative(), peaceful: peaceful()};