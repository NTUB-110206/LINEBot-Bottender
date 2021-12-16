const arrUnique = (arr, key) => {
    const result = arr.filter((thing, index, self) =>
        index === self.findIndex((t) => (
            t[key] === thing[key]
        ))
    )
    return result
};

module.exports = { arrUnique }
