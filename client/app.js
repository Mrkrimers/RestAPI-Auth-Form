document.querySelector(`.btn-reg`).addEventListener(`click`, async () => {
    const email = document.querySelector(`.email`);
    const pass = document.querySelector(`.pass`);

    const obj = {
        email: email.value,
        pwd: pass.value
    };

    const response = await fetch("http://localhost:3000/api/register", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    });

    const json = await response.json();
    console.log(json);
});

document.querySelector('.btn-log').addEventListener(`click`, async () => {
    const emailLog = document.querySelector(`.email-log`);
    const pwdLog = document.querySelector(`.pass-log`);

    const objLogin = {
        email: emailLog.value,
        pwd: pwdLog.value
    }

    const responseLogin = await fetch('http://localhost:3000/api/authorize', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(objLogin)
    });

    const json = await responseLogin.json();
    console.log(json);
})