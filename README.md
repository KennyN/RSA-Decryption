# RSA Decryption Program

This program demonstrates the process of decrypting a ciphertext using the RSA algorithm. The program first factors the modulus `n` to find the prime numbers `p` and `q`, then calculates the decryption key `d` and finally uses it to decrypt the given ciphertext.

## How It Works

1. **Factorize n**: The program calculates the factors `p` and `q` by finding the values of `a` and `b` such that `a^2 - b^2 = n`.
2. **Compute φ(n)**: Once `p` and `q` are found, the Euler's Totient function φ(n) is calculated as `(p-1) * (q-1)`.
3. **Find the decryption key d**: Using the Extended Euclidean Algorithm, the program finds the modular inverse of `e` modulo φ(n), which gives the decryption key `d`.
4. **Decrypt the ciphertext**: The program can then use `d` to decrypt the given ciphertext.

## Requirements
The program requires a JavaScript runtime environment, such as Node.js, to run.

##Usage
Copy the code into a JavaScript file, e.g., rsa.js.
Run the file using Node.js:
```
node rsa_decrypt.js
```

## Explanation
The program first defines the given cipherText, modulus n, and encryption key e. It then proceeds to factorize n by finding the values of a and b. Once the prime factors p and q are determined, it calculates the decryption key d using the Extended Euclidean Algorithm. Finally, it prints the values of p, q, φ(n), and d.
