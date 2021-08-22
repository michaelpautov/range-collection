const rangeCollection = require("./rangeCollection")
// @ponicode
describe("_findIndexOrClosestIndex", () => {
    let inst

    beforeEach(() => {
        inst = new rangeCollection()
    })

    test("0", () => {
        let callFunction = () => {
            inst._findIndexOrClosestIndex(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst._findIndexOrClosestIndex(100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst._findIndexOrClosestIndex(-100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst._findIndexOrClosestIndex(-5.48)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst._findIndexOrClosestIndex(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst._findIndexOrClosestIndex(NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("add", () => {
    let inst

    beforeEach(() => {
        inst = new rangeCollection()
    })

    test("0", () => {
        let callFunction = () => {
            inst.add([-5.48, 1])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.add([1, 0])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.add([0, -10])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.add([0.0, -5.48])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.add([-5.48, -10])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.add([Infinity, Infinity])
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("remove", () => {
    let inst

    beforeEach(() => {
        inst = new rangeCollection()
    })

    test("0", () => {
        let callFunction = () => {
            inst.remove([-5.48, -5.48])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.remove([-5.48, 100])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.remove([-5.48, 1])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.remove([0, -5.48])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.remove([100, -100])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.remove([Infinity, Infinity])
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("print", () => {
    let inst

    beforeEach(() => {
        inst = new rangeCollection()
    })

    test("0", () => {
        let callFunction = () => {
            inst.print()
        }
    
        expect(callFunction).not.toThrow()
    })
})
