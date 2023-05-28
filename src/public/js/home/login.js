"use strict"

const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("#button");

loginBtn.addEventListener("click", login);

id.addEventListener('keyup', function(event) {
    if (event.code === 'Enter') {
        login();
    }
});

psword.addEventListener('keyup', function(event) {
    if (event.code === 'Enter') {
        login();
    }
});

function login() {
    if (!id.value) return alert("아이디를 입력해주세요.");
    if (!psword.value) return alert("비밀번호를 입력해주세요.");

    const req = {
        id: id.value,
        psword: psword.value,
    };

    // const data = req;
    
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
            // console.log(res.data);
            fetch("/makeSession", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(res.data),
            })
              .then((res) => res.json())
              .then((res) => {
                location.href = "/";
                alert("환영합니다!");
                // console.log(res.msg);
              })

        } else {
            if (res.err) {
                alert(res.err);
            } else {
                // if (res.err) return alert(res.err);
                // alert(res.msg);
                document.getElementById("error-msg-holder").style.display='block';
                document.getElementById("error-msg").innerHTML = res.msg;
            }
        }
      })
      .catch((err) => {
        console.error("로그인 중 에러 발생");
      });
}
