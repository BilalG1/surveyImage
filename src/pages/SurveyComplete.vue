<template>
	<div style="height: 100%">
		<img 
			id="img-main"
			src="@/assets/cert2Cleared.jpeg" 
		/>
	</div>
	<div id="date" class="center-x">
		{{getFormattedDate()}}
	</div>
	<div id="uclaId" class="center-x">
		UCLA ID:&nbsp;{{uid}}
	</div>
</template>

<script>
export default {
	props: ["uid"],
	methods: {
		getFormattedDate(){
			const d = new Date()
			const formattedMonth = (d.getMonth()+1 > 9) ? d.getMonth()+1 : '0'+(d.getMonth()+1)
			const formattedDay = (d.getDate() > 9) ? d.getDate() : '0'+(d.getDate())
			return formattedMonth + '/' + formattedDay + '/' + new Date().getFullYear() 
		}
	}
}
</script>

<style scoped>
#img-main{
	height: 100%;
	position: relative;
}
#date{
	font-size: min(4vh, 40px);
	font-weight: 800;
	font-family: arial;
	position: absolute;
	top: 29.7%
}
#uclaId{
	position: absolute;
	font-size: min(2vh,19px);
	top: 59.6%;
}
.center-x{
	left: 50%;
    transform: translate(-50%, 0);
	color: black;
}
</style>