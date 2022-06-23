export const submitRequest = () => {
    const url = $('#reqUrl').val()
    const method = $('#reqType').val()
    const headers = $('#reqHeaders').val()
    const body = $('#reqbody').val()

    const fetchTemplate = `
    <textarea>
    fetch('${url}', {
        method: '${method}',
        headers: {
            '${headers}'
        },
        body: JSON.stringify(${body})
    }).then(response => {
        if (response.status !== 200) {
            return ('Something went wrong, please try again.')
        } else {
            response.json()
        }
    }).catch(error => console.error(error))
    </textarea>
    `

    $('#fetchTemplate').removeAttr('hidden')
    $('#fetchTemplate').append(fetchTemplate)
}