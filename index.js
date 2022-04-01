function Block(letter, rate, user, father, code) {
  this.letter = letter;
  this.rate = rate;
  this.user= user;
  this.code = code;
}

function FindCode(block) {

  if (tree[block.father].code != '') {
    block.father = tree[block.father].code + '1';
  }
   else {
   if (block.letter == tree[mibIndex].letter) {
      Block = '0';
   }
      else if (block.letter == tree[premIndex].letter) {
     Block = '1';
   }
      else {
      FindCode(tree[block.father]);
      block.code = tree[block.father].code + '0';
    }
  }
}
