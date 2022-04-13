const getTitles = async () => {
    const url = "https://jsonplaceholder.typicode.com/photos";
    try {
        const response = await fetch(url);
        const albums = await response.json();
        albums.forEach(element => {
            if (element.id <= 20) {
                console.log(`${element.id}: ${element.title}`)
            };
        })
    } catch (error) {
        console.log('Hubo un error: ' + error);
    }
}
const sendMessage = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Información enviada')
        }, 3000)
    })
}
const showMessage = async () => {
    getTitles();
    sendMessage();
    const res = await sendMessage();
    console.log(res);
}

showMessage();