const changeFocus1 = () => {

  let phone1 = document.getElementById("p1").value
  if(phone1.length === 3) {
    document.getElementById("p2").focus()
  }
}

const changeFocus2 = () => {
  
  let phone2 = document.getElementById("p2").value
  if(phone2.length === 4) {
    document.getElementById("p3").focus()
  }
}

const changeFocus3 = () => {
  let phone3 = document.getElementById("p3").value
  if(phone3.length === 4) {
    document.getElementById("check__btn").disabled = false
  }
}

let isStarted = false

let getToken = () => {
  if(isStarted === false) {
    isStarted = true
    document.getElementById("submit__btn").disabled = false
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    const text = document.getElementById("check")
    text.innerText = token

    let time = 180
    let timer
    
    timer = setInterval(function() {
      if(time >= 0) {
        let min = Math.floor( time / 60 )
        let sec = String( time % 60 ).padStart(2, "0")
        document.getElementById("timer").innerText = min + ":" + sec
        time = time - 1
        document.getElementById("submit__btn").onclick = function() {
          alert('인증이 완료되었습니다.')
          document.getElementById("submit__btn").innerText = "인증 완료"
          document.getElementById("submit__btn").disabled = true
          document.getElementById("register__btn").disabled = false
          isStarted = false
          clearInterval(timer)  
        }
      }
      else {
        document.getElementById("submit__btn").disabled = true
        isStarted = false
        clearInterval(timer)
      }
    }, 1000) 
  }
}

const signup = () => {
  const register = document.getElementById("register__btn")
  const email = document.getElementById("email").value
  const username = document.getElementById("username").value
  const pw1 = document.getElementById("pw1").value
  const pw2 = document.getElementById("pw2").value
  const location = document.getElementById("location").value
  const genderMale = document.getElementById("male__circle").checked
  const genderFemale = document.getElementById("female__circle").checked

  if(email&&username&&pw1&&pw2) {
    register.onclick = function () {
      register.disabled = false
      alert("회원가입을 완료하였습니다.")
    } 
  } 
 
  if(email.includes("@") === false) {
    document.getElementById("error__email").innerText = "이메일을 입력해 주세요."
  } else {
    document.getElementById("error__email").innerText = ""
  }

  if(username === "") {
    document.getElementById("error__username").innerText = "이름을 입력해 주세요."
  } else {
    document.getElementById("error__username").innerText = ""
  }

  if(pw1 === "") {
    document.getElementById("error__password1").innerText = "비밀번호를 입력해 주세요."
  } else {
    document.getElementById("error__password1").innerText = ""
  }

  if(pw2 === "") {
    document.getElementById("error__password2").innerText = "비밀번호를 다시 입력해 주세요."
  } else {
    document.getElementById("error__password2").innerText = ""
  }

  if(pw1 !== pw2) {
    document.getElementById("error__password1").innerText = "비밀번호가 일치하지 않습니다."
    document.getElementById("error__password2").innerText = "비밀번호가 일치하지 않습니다."
  } 
  if(location !== "부산" && location !== "대구" && location !== "서울") {
    document.getElementById("error__location").innerText = "지역을 선택해 주세요."
  } else {
    document.getElementById("error__location").innerText = ""
  }
  if(genderMale === false && genderFemale === false) {
    document.getElementById("error__gender").innerText = "성별을 선택해주세요."
  } else {
    document.getElementById("error__gender").innerText = ""
  }
}