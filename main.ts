function xyz2labCOMP (x: number) {
    if (x > 0.008856) {
        x = x ** (1 / 3)
    } else {
        x = x * 7.787 + 16 / 116
    }
    return x
}
function showNumberArray (list: Array[][]) {
    for (let index = 0; index <= list.length; index++) {
        basic.showNumber(list[index])
    }
}
function rgb2xyzCOMP (list: Array[][], index: number) {
    r[0] = list[index]
    r[0] = r[0] / 255
    if (r[0] > 0.04045) {
        r[0] = ((r[0] + 0.055) / 1.055) ** 2.4
    } else {
        r[0] = r[0] / 12.92
    }
    return r[0] * 100
}
function computeLab (list: any[]) {
    let result: Array[][] = []
    let bstar: Array[][] = []
    let astar: Array[][] = []
    let Lstar: Array[][] = []
    let z: Array[][] = []
    let y: Array[][] = []
    let b: Array[][] = []
    let g: Array[][] = []
    r[0] = rgb2xyzCOMP(list, 0)
    g[0] = rgb2xyzCOMP(list, 1)
    b[0] = rgb2xyzCOMP(list, 2)
    x[0] = r[0] * 0.4124 + (g[0] * 0.3576 + b[0] * 0.1805)
    x[0] = x[0] / 95.047
    x[0] = xyz2labCOMP(x[0])
    y[0] = r[0] * 0.2126 + (g[0] * 0.7152 + b[0] * 0.0722)
    y[0] = y[0] / 100
    y[0] = xyz2labCOMP(y[0])
    z[0] = r[0] * 0.0193 + (g[0] * 0.1192 + b[0] * 0.9505)
    z[0] = z[0] / 108.883
    z[0] = xyz2labCOMP(z[0])
    Lstar[0] = y[0] * 116 - 16
    astar[0] = y[0] * 500 - x[0] * 500
    bstar[0] = x[0] * 200 - y[0] * 200
    result.push(Lstar[0])
    result.push(astar[0])
    result.push(bstar[0])
    return result
}
function concatenate (list: Array[][], list2: Array[][]) {
    for (let index2 = 0; index2 <= list2.length; index2++) {
        list.push(list2.shift())
    }
    return list
}
let r: Array[][] = []
let x: Array[] = []
basic.showIcon(IconNames.Heart)
let leafrgb = [1, 2, 3]
leafrgb = concatenate(leafrgb, [4, 5, 66])
leafrgb = concatenate(leafrgb, [7, 8, 9])
let stemrgb = [99, 98, 97]
stemrgb = concatenate(stemrgb, [96, 95, 94])
stemrgb = concatenate(stemrgb, [93, 92, 91])
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    showNumberArray(leafrgb)
})
