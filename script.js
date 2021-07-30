var img= document.getElementById('img')
function promise(){
    axios.get('https://reqres.in/api/users/5').then(result=>{
        let profile = document.querySelector('.profile');
        profile.src = result.data.data.avatar
        document.getElementById('fname').innerText=result.data.data.first_name;
        document.getElementById('lname').innerText=result.data.data.last_name;
        document.getElementById('email').innerText=result.data.data.email;

    }) .catch(error=>{
        console.log('error',error)
    })
}

const await = async()=>{
    try{
        let response = await axios.get('https://reqres.in/api/users/5')
        let profile = document.querySelector('.profile');
        profile.src = result.data.data.avatar
        document.getElementById('fname').innerText=result.data.data.first_name;
        document.getElementById('lname').innerText=result.data.data.last_name;
        document.getElementById('email').innerText=result.data.data.email;
    }catch{
        console.log('error=>',error)
    }
}
promise()

