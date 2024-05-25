import os
import sys
import time

def autoketik(s):
    for c in s + '\n':
        sys.stdout.write(c)
        sys.stdout.flush()
        time.sleep(0.050)

def hitungTKBK():
    angka1 = int(input('Angka Pertama: '))
    Operator = input('Operator(+ - / *): ')
    angka2 = int(input('Angka Kedua: '))
    hasil = 0
    if Operator == '+' :
         hasil = angka1 + angka2
    elif Operator == '-':
        hasil = angka1 - angka2
    elif Operator == '*':
        hasil = angka1 * angka2
    elif Operator == '/':
        hasil = angka1 / angka2
    else:
        print(' Gak tau apa ini '+ Operator)

    print(f"Hasil dari {angka1} {Operator} {angka2} adalah {hasil}")

def hitungPanjangKata():
    data = str(input('user# '))
    print(f"Panjang Kata yang kamu kirim ituu adaaaa {len(data)}")

def hitungHutang():
    print("Hutangnya berapa?")
    #ayo buat logikanya bagimana 

def sayHalloRandom():
    import random
    hallo = ["Hallo", "Hai", "Hi", "Hey"]
    print(random.choice(hallo))

def membuatPassword():
    panjang = int(input("Panjang password: "))
    import random
    import string
    password = ''.join(random.choice(string.ascii_uppercase + string.ascii_lowercase + string.digits) for _ in range(panjang))
    print("Passwordnya adalah: " + password)

opsi ="""
    Jadi Gini kita kan mau membuat sebuag warung dengan fungsi yang banyak gitu fungsi pertama
      
      1. hitung tambah, kali, bagi, kurang
      2. hitung panjang kata
      3. hitung hutang
      4. say hallo random
      5. membuat password dengan panjang semaunya user

      keluar
      opsi 

Pilih opsi yang ada di atas menggunakan angka: 
"""

print(opsi)

while True:
    user =  input('user# ')
    if user == '1':
        hitungTKBK()
    elif user == '2':
        hitungPanjangKata()
    elif user == '3':
        hitungHutang()
    elif user == '4':
        sayHalloRandom()
    elif user == '5':
        membuatPassword()
    elif user == 'clear':
        os.system('clear')
    elif user == 'opsi':
        print(opsi)
    elif user == 'keluar':
        sys.exit()
    else:
        print('pilihan kaga ada bro pilih lagi!!')
