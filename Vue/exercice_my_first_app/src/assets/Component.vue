<script>
export default { 
  name : "Component",
  data () {
    return{
      count : 0,
      message : "Aidez-moi",
      pfs : true
    }
  },
  props : {
    msg : {
      type : String,
      default : "qqc",
      required : false
    }
  },
  methods:{
    add(){
      this.count++
    },
    decrease(){
      this.count--
    }
  }
}
</script>

<template>
  <section>
    <h2>Hello</h2>
    <p>{{msg}}</p>
    <p>{{ message }}</p>
    <p>{{ count }}</p>
    <button @:click="add">+</button>
    <button @:click="decrease">-</button>
  </section>
</template>