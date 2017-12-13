<template>
	<mt-switch v-model="value">开关</mt-switch>
</template>
<script>
import Vue from 'vue'
import { Switch } from 'mint-ui'

Vue.component(Switch.name, Switch)
export default {
	data(){
		return{
			value:false
		}
	}
}
</script>
<style>
</style>
