const calculateBMI = ()=>{
    const form = document.getElementById('form')
    console.log(form);
    form.addEventListener('submit', (e)=>{
        e.preventDefault();

        const inputWeight = document.getElementById('weight');
        const inputHeight = document.getElementById('height');

        if(!inputWeight.value.trim()){
            alert("Cân nặng không được để trống!")
            inputWeight.focus();
            return
        }
        if(!inputHeight.value.trim()){
            alert("Chiều cao không được để trống!")
            inputHeight.focus();
            return
        }

        const data={
            weight: parseFloat(inputWeight.value),
            height: parseFloat(inputHeight.value)
        }
        if (data.height > 10) {
            data.height = data.height / 100;
        }

        const BMI = data.weight / (data.height * data.height)
        console.log(BMI);
        if(BMI>30){
            alert(`BMI: ${BMI.toFixed(2)} - Béo phì`)
        }else if(BMI<29.9){
            alert(`BMI: ${BMI.toFixed(2)} - Thừa cân`)
        }else if(BMI<24.9 && BMI>18.5){
            alert(`BMI: ${BMI.toFixed(2)} - Bình thường`)
        }else{
            alert(`BMI: ${BMI.toFixed(2)} - Thiếu cân`)
        }
    })
}
calculateBMI();