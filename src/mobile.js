// Progression 1 SmartPhone

class SmartPhone {
  constructor(ram, batteryPower, price){
    this.ram = ram
    this.batteryPower = batteryPower
    this.price = price
  }
  displayFeatures=()=>{
    return `${this.ram}\n${this.batteryPower}\n${this.price}`
  }
  remainingAmount(money){
    this.price=this.price-money
    if(this.price>0){
      return this.price
    }
  }
}

// Progression 2 AndroidPhone

class AndroidPhone extends SmartPhone {
  constructor(modelName, ram, batteryPower, price) {
    super(ram, batteryPower, price)
    this.modelName = modelName;
}

displayFeatures=()=>{
  return `${this.modelName}\n${this.ram}\n${this.batteryPower}\n${this.price}`
}
remainingAmount(money){
  this.price=money-this.price
  if(this.price<=0){
    return `Customer has no more amount`
  }else{ 
    return `Customer has remaining Rs.${this.price} after buying the android phone`
  }
}

}

// Progression 3 IPhone

class IPhone extends SmartPhone {
  constructor(seriesName, ram, batteryPower, price){
    super(ram, batteryPower,price)
    this.seriesName=seriesName
  }
  displayFeatures=()=>{
    return `${this.seriesName}\n${this.ram}\n${this.batteryPower}\n${this.price}`
  }
  remainingAmount(money){
    this.price=money-this.price
    if(this.price>0){
      return `Customer has remaining Rs.${this.price} after buying an iphone`
    }else if(this.price<0){ 
      return `Customer can't able to buy a phone due to insufficient amount` 
    }
    else{
      return `Customer has no more amount`
    }
}
}

// Progression 4  Progression 1 MobileCampus

class MobileCampus {
  constructor(NoOfMobiles, NoOfAndroidMobiles, NoOfIPhoneMobiles){
  this.NoOfMobiles = NoOfMobiles
  this.NoOfAndroidMobiles = NoOfAndroidMobiles
  this.NoOfIPhoneMobiles = NoOfIPhoneMobiles
  }
  changeMobileAvailabilityNumber(number,type){
    if(type === 'android'){
      this.NoOfMobiles = this.NoOfMobiles - number
      this.NoOfAndroidMobiles=this.NoOfAndroidMobiles-number
      return `Available android mobiles are ${this.NoOfAndroidMobiles}`

  }else if(type === 'iphone'){
      this.NoOfIPhoneMobiles = this.NoOfIPhoneMobiles - number;
      return `Available iphone mobiles are ${this.NoOfIPhoneMobiles}`
  }
  }

}
