function $ajax(option) {
    let {
        url,
        type,
        data,
    } = option
    return new Promise((resolve, reject) => {
        var xhr = null;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest()
        } else {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }

        if (type == "post") {
            xhr.open(type, url)
            xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
            xhr.send(data)
        } else {
            xhr.open(type, url)
            xhr.send()
        }

        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                if (xhr.status == "200") {
                    resolve(JSON.parse(xhr.responseText))
                } else {
                    reject("status=" + xhr.status)
                }
            }
        }
    })
}
export default $ajax