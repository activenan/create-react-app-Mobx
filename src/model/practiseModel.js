import {observable, computed,action,useStrict,autorun} from "mobx"
var name = observable("John")

useStrict(false)


/**
 *   computed
 */
var upperCaseName = computed(() =>
    name.get().toUpperCase()
)

//computed
var disposer = upperCaseName.observe(change => console.log(change.newValue))
name.set("Dave")
name.set("Willian")


//computed -- setter
class Foo {
  @observable length = 2
  constructor () {
    autorun(() => console.log(this.squared))
  }

  @computed get squared() {
      return this.length * this.length
  }
  set squared(value) { //this is automatically an action, no annotation necessary
      this.length = Math.sqrt(value)
  }
}
var FooIns = new Foo()
FooIns.squared = 9

/**
 *   action
 */
// action
const ticker = observable({
    tick: 1,
    increment: action.bound(function() {
        this.tick++ // 绑定 'this'
    })
})

setInterval(ticker.increment, 1000)

/**
 *   observable
 */

 var person = observable({
   name: "Json",
   age: 42,
   showAge: false,

   // 计算属性:
   get labelText() {
       return this.showAge ? `${this.name} (age: ${this.age})` : this.name;
   },

   // 动作:
   setAge: action(function(age) {
       this.age = age;
   })

 })

 // 对象属性没有暴露 'observe' 方法,
// 但不用担心, 'mobx.autorun' 功能更加强大
autorun(() => console.log(person.labelText));

person.name = "Dave";
// 输出: 'Dave'

person.setAge(21);

