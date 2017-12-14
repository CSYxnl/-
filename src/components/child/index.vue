<template>
	<div class="mark">
		<ul>
			<li class="goods" v-for="(item,parent) in goods">
				<h1 class="kind-name">{{item.name}}</h1>
				<ul>
					<li class="foods" v-for="(food,child) in item.foods">
						<h2 class="name">{{item.name}}名称{{food.name}}</h2>
						<p class="price">单价：{{food.price}}</p>
						<p class="price">数量：{{(food.count)?food.count:0}}</p>
						<div class="button-wrapper">
							<v-button :food="food" :index="child" :parentIndex="parent"></v-button>
						</div>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</template>

<script>
	import axios from 'axios'
	import button from '@/components/child/button'
	import Vue from 'vue'
	
	export default {
		components: {
			'v-button':button
		},
		data(){
			return {
				goods: []
			}
		},
		created() {
			axios.get('static/appData.json').then((response)=>{
				this.goods = response.data.goods;
			});
			this.$root.eventHub.$on('countFunc', this.countFunc);
		},
		methods:{
			countFunc(obj){
				if(!this.goods[obj.parent].foods[obj.index].count){
					Vue.set(this.goods[obj.parent].foods[obj.index], 'count', 1);
					
					
				}else{
					this.goods[obj.parent].foods[obj.index].count = obj.count;
				}
			}
		}
	}
</script>

<style lang="scss" scoped="" type="text/css">
.mark{
	position: fixed;
	left: 0;
	top: 0;
	z-index: 100;
	width: 100%;
	height: 100%;
	background: #fff;
	.goods{
		padding: 50px;
		.kind-name{
			padding-left: 5px;
			height: 40px;
			line-height: 40px;
			border-left: 2px solid #d9dde1;
			background-color: #f3f5f7;
			font-size: 20px;
			color: rgb(147, 153,159);
		}
		.foods{
			position: relative;
			padding: 10px 0;
			.name{
				font-size: 16px;
			}
			.price{
				font-size: 14px;
				margin-top: 5px;
			}
			.button-wrapper{
				position: absolute;
				right: 0;
				top: 7px;
			}
		}
	}
}
</style>