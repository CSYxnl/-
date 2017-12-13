<template>
	<div class="button">
		<div class="cart-decrease icon-remove_circle_outline" @click="reduceCart">-</div>
		<div class="cart-count">{{count}}</div>
		<div class="cart-increase icon-add_circle" @click="addCart">+</div>
	</div>
</template>

<script>
	export default{
		props:{
			food:{
				type:Object
			},
			index:{
				type:Number
			},
			parentIndex:{
				type: Number
			}
		},
		data(){
			return{
				count: 0
			}
		},
		methods:{
			addCart(){
				console.log(this.count);
				this.count++;
				this.$root.eventHub.$emit('countFunc',{'count':this.count,'index':this.index,'parent':this.parentIndex});
				console.log(this);
			},
			reduceCart(){
				if(this.count > 0){
					this.count--;
					this.$root.eventHub.$emit('countFunc',{'count':this.count,'index':this.index,'parent':this.parentIndex});
				}
			}
		}
	}
</script>

<style lang="scss" scoped="" type="text/css">
.button{
	font-size: 0;
	.cart-decrease{
		display: inline-block;
		vertical-align: top;
		font-size: 24px;
		line-height: 24px;
		color: rgb(0,160,220);
	}
	.cart-count{
		display: inline-block;
		width: 24px;
		font-size: 14px;
		line-height: 24px;
		padding: 0 3px;
		box-sizing: border-box;
		text-align: center;
		color: rgb(147, 153 , 159);
	}
	.cart-increase{
		display: inline-block;
		vertical-align: top;
		font-size: 24px;
		line-height: 24px;
		color: rgb(0, 160, 220);
	}
}
</style>