function willUMarryMe(FightCount) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (FightCount > 100) {
                return rej('not marry')
            } res('getting married')
        }, 3000)
    })
}

willUMarryMe(13)
    .then((msg) => {
        console.log("success", msg)
    })

    .catch((err) => {
        console.log("oh no", err)
    })