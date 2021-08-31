class Pokemon {
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.sprite = data.sprite.front_default
        this.type = data.types[0].type.name
        this.height = data.height
        this.weight = data.weight
    }
}

export default Pokemon