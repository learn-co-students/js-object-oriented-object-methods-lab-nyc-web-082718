function BoardMember(name, homeState, training, veto, approve, doCharity, releasePressStatement, sayHi) {
  this.name = name
  this.homeState = homeState
  this.training = training
  this.veto = () => { return "No, I must disagree"}
  this.approve = () => { return "You can do that!"}
  this.doCharity = () => { return "I like to help people."}
  this.releasePressStatement = () => "You will see great things from Scuber."
  this.sayHi = () => { return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`}
}
