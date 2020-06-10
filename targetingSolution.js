class TargetingSolution {
    constructor(ob) {
        this.x = ob.x,
        this.y = ob.y,
        this.z = ob.z
    }

    target() {
        return `(${this.x}, ${this.y}, ${this.z})`;
    }
}
