const btn = document.querySelector(`.btn`).addEventListener(`click`, async () => {
    const email = document.querySelector(`.email`);
    const pass = document.querySelector(`.pass`);

    const obj = { email: email.value, pwd: pass.value };

    const response = await fetch("http://localhost:3000/api/register", {
        method: `POST`,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    });

    const json = await response.json();
    console.log(json);
})