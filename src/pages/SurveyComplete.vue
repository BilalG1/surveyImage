<template>
	<div id="full-img">
		<div style="height: 100%">
			<img 
				id="img-main"
				src="@/assets/cert2Cleared.jpeg" 
			/>
		</div>
		<div id="date" class="center-x">
			{{getFormattedDate()}}
		</div>
		<div id="uclaid" class="center-x">
			UCLA ID:&nbsp;{{uid}}
		</div>
	</div>
</template>

<script>
import html2canvas from 'html2canvas'
export default {
	props: ["uid"],
	methods: {
		getFormattedDate(){
			const d = new Date()
			const formattedMonth = (d.getMonth()+1 > 9) ? d.getMonth()+1 : '0'+(d.getMonth()+1)
			const formattedDay = (d.getDate() > 9) ? d.getDate() : '0'+(d.getDate())
			return formattedMonth + '/' + formattedDay + '/' + new Date().getFullYear() 
		},
		setFontSizes(){
			const height = isNaN(window.innerHeight) ? window.clientHeight : window.innerHeight;
			const imgWidth = (height*207/448) + 'px'
			document.getElementById('date').style.fontSize = Math.min(0.04*height, 40) + 'px'
			document.getElementById('date').style.width = imgWidth
			document.getElementById('uclaid').style.fontSize = Math.min(0.02*height, 19) + 'px'
			document.getElementById('uclaid').style.width = imgWidth
		}
	},
	mounted() {
		this.setFontSizes()
		const imgFilled = document.getElementById('full-img')
		html2canvas(imgFilled)
		.then(canvas => {
            canvas.style.display = 'none'
            document.body.appendChild(canvas)
            return canvas
        })
        .then(canvas => {
            const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream')
            const a = document.createElement('a')
            a.setAttribute('download', 'my-image.png')
            a.setAttribute('href', image)
            a.click()
            canvas.remove()
        })
	}
}
</script>

<style scoped>
#full-img{
	height: 100%;
	width: fit-content;
	margin: 0 auto;
}
#img-main{
	height: 100%;
	position: relative;
}
#date{
	/* font-size: min(4vh, 40px); */
	font-weight: 800;
	font-family: arial;
	position: absolute;
	top: 29.7%
}
#uclaid{
	position: absolute;
	/* font-size: min(2vh,19px); */
	top: 59.6%;
}
.center-x{
	/* left: 50%; */
    margin: 0 auto;
	color: black;
}
</style>