"use strict"

const id = document.querySelector("#id"),
    email = document.querySelector("#email"),
    psword = document.querySelector("#psword"),
    confirmPsword = document.querySelector("#confirm-psword"),
    registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

psword.addEventListener('keyup', function(event) {
    if (event.code === 'Enter') {
        register();
    }
});

confirmPsword.addEventListener('keyup', function(event) {
    if (event.code === 'Enter') {
        register();
    }
});

function register() {
    if (!id.value) return alert("아이디를 입력해주세요.");
    if (!email.value) return alert("이메일을 입력해주세요.");
    if (!psword.value) return alert("비밀번호를 입력해주세요.");
    if (psword.value !== confirmPsword.value) return alert("비밀번호가 일치하지 않습니다.");

    const req = {
        id: id.value,
        email: email.value,
        psword: psword.value,
    };
    // console.log(req);
    
    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.success) {
                location.href = "/login";
                alert("회원가입을 축하드립니다!");
            } else {
                // if (res.err) return alert(res.err);
                // alert(res.msg);
                document.getElementById("error-msg-holder").style.display='block';
                document.getElementById("error-msg").innerHTML = res.msg;
            }
        })
        .catch((err) => {
            console.error("회원가입 중 에러 발생");
        });
}
