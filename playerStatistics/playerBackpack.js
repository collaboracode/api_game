/*Should accessing the backpack in itself be a route or a function*/

/* 
To do list: 

Pass item ID and an array of items to the backpack */ 

export default class playerBackpack {
  /**
   * 
   * @param {boolean} hasBackpack
   * @param {boolean} isBackPackFull
   * @param {boolean} itemInteraction
   * @param {boolean} itemAdded
   * @param {boolean} itemEquipped
   * @param {boolean} itemEjected
   * @param {number} totalItems
   * @param {number} itemWeight
   * @param {number} itemCap
   *
   *
   * @returns {playerBackpack}
   */

  constructor() {
    this.hasBackpack = false;
    this.isBackPackFull = false;
    this.itemInteraction = true; //PLACEHOLDER until we figure out how a player will pickup items
    this.itemAdded = false;
    this.itemEquipped = false;
    this.itemEjected = false;
    this.totalItems = 0;
    this.itemWeight = 0;
    this.itemCap = 10;
  }

  isPlayerBackPackFull() {
    if (this.hasBackpack) {
      return this.totalItems >= this.itemCap ? true : false;
    }
    //continuing, evaluate other possible conditions
  }

  itemAddedToBackpack() {
    if (this.hasBackpack && this.itemInteraction) {
      const addedToBackpack = this.itemAdded ? true : false;

      if(addedToBackpack){
        this.totalItems++; // This should not execute after the previous statement unless condition is true
        this.itemWeight++;
      }
      return addedToBackpack;
      //I would like to return this directly back to false after an item is added
    }
  }

  itemRemovedFromBackpack() {
    if (this.hasBackpack) {
      const removedFromBackpack = this.itemEjected ? true : false;

      if(removedFromBackpack && this.isPlayerBackPackFull && this.totalItems >= 0){
        this.totalItems--; 
        this.itemWeight--;
      }
    }
  }
}
