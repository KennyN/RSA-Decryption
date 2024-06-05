let cipherText = 1752250961597817717354193551289991914255165831796991646688814926420116284171845378592258094909171939891752084664418588496770570024821921011361028072060818354315541430701657029579837315359733079875030109911222381486914003429676177793922535079600987641909513973472105362482812524940225900268861892;
console.log(cipherText);
let n = 27299026172500142606639;
let e = 7455573413522025488689;

let a = parseInt(Math.sqrt(n) + 1);
let b_function = (a) => {
    while (true) {
        let b2 = (a**2) - n;
        if (Math.sqrt(b2) % 1 == 0) { // checks if b2 is perfect square
            let b = Math.sqrt(b2);
            console.log("a: " + a);
            console.log("b: " + b);
            return b;
        } else {
            a += 1;
        }
    }
    
}
let b = b_function(a);
let p = a + b;
let q = a - b;
let phi_n = (p-1) * (q-1);

let modInverse = (a, m) => {
    let m0 = m;
    let y = 0;
    let x = 1;
    if (m == 1)
        return 0;

    while (a > 1) {
        
        let q = parseInt(a / m);
        let t = m;

        m = a % m;
        a = t;
        t = y;

        y = x - q * y;
        x = t;
        }

    if (x < 0)
        x += m0;

    return x;
}
console.log(`P: ${p}`);
console.log(`q: ${q}`);
console.log(`Phi n: ${phi_n}`);
let d = modInverse(e, phi_n);
console.log(`Decryption Key: ${d.toLocaleString()}`);