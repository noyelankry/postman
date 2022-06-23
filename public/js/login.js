const url = "http://localhost:8080/login"

export const login = () => {
    let userID = $('#userID').val()
    let password = $('#password').val()

    const data = {
        userID,
        password
    }

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
            const logindiv = $('#login')
            logindiv.append('<div> Something went wrong, please try again.</div>')
            $('#login>div').last().attr('id', 'error-msg')
        } else {
            response.json()
            const url = new URL('http://localhost:8080')
            location.href = url
        }
    }).catch(error => console.error(error))
}