<template>
	<div class="remember">
		<mt-button type="primary" @click.native="openPicker">primary</mt-button>
		<mt-datetime-picker ref="picker" type="datetime" v-model="pickerVisible" :startDate="startDate" @confirm="handleConfirm"></mt-datetime-picker>
	</div>
</template>

<script>
import Vue from 'vue'
import { DatetimePicker } from 'mint-ui'
Vue.component(DatetimePicker.name, DatetimePicker)

export default {
	data(){
		return{
			pickerVisible: null,
			startDate: new Date('2014'),
		}
    },
    methods: {
        openPicker() {
        	this.$refs.picker.open()
        },
        handleConfirm(mes){
        	console.log("选取的时间是："+ mes +"。");
        }
    }
}

</script>

<style>
</style>