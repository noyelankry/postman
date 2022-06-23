const url = "http://localhost:8080/register"

export const register = () => {
    let userName = $('#userName').val()
    let email = $('#email').val()
    let password = $('#password').val()
    let password2 = $('#password2').val()

    if (password === password2) {
        const data = {
            userName,
            email,
            password
        }
        console.log(data)
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => {
            if (response.status !== 200) {
                if ($('#error-msg').val() !== undefined) {
                    $('#error-msg').remove()
                }
                const signupdiv = $('#signup')
                signupdiv.append('<div> Username already in use</div>')
                $('#signup>div').last().attr('id', 'error-msg')
            } else {
                response.json()
                const url = new URL('http://localhost:8080/login.html')
                location.href = url
            }
        }).catch(error => {
            console.error(error)
        })
    } else {
        if ($('#error-msg').val() !== undefined) {
            $('#error-msg').remove()
        }
        const signupdiv = $('#signup')
        signupdiv.append('<div>Passwords are not matching, please try again</div>')
        $('#signup>div').last().attr('id', 'error-msg')
    }
}