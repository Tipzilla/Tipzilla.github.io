from random import *

# Asks the user for their pin number
while True:
    print("Please enter a 4 digit code:")
    pin = input()
# If the pin number is 4 digits, the code continues
    if pin.isdigit() and len(pin) == 4:
        print("Log in successful")
# Gives the user's pin number a random balance amount
        balance = randint(100, 999)
        print(f"Your total balance is: ${balance}")
        break
# If their pin number is not accepted, the program asks again
    else:
        print("Please try again")

# Associates the following letters as text to let the user decide on their option      
a = "Deposit"
b = "Withdraw"
c = "Balance"
d = "Exit"
# Adds the letters to a list to call upon
atm = [("A: " + a),("B: " + b),("C: " + c),("D: " + d)]

#Loop statement.
while True:
# Calls upon the previous list and prints it out
    for x in atm:
        print(x)
# Asks the user what they would like to do
    print("What would you like to do? ")
    choice = input()
    if choice == "a":
        print("How much would you like to deposit?")
        deposit = int(input("$"))
# Adds the balance amount with the desired deposit amount, then prints the updated balance
        balance = balance + deposit
        print(f"Balance: ${balance}")
# Subtracts the balance amount with the desired withdrawal amount, then prints the updated balance
    elif choice == "b":
        print("How much would you like to withdraw? ")
        withdraw = int(input("$"))
        balance = balance - withdraw
# If the user attempts to withdraw too much money, they are given an error and asked to select a new option again
        if balance < 0:
            print("Error! You cannot withdraw that amount")
            balance = balance + withdraw
        else:
            print(f"Balance: ${balance}")
# Prints the user's balance
    elif choice == "c":
        print(f"Your total balance is: ${balance}")
# Logs the user out and starts the process over again
    elif choice == "d":
        print("Logging out...")
        while True:
            print("Please enter a 4 digit code:")
            pin = input()
            if pin.isdigit() and len(pin) == 4:
                print("Log in successful")
                balance = randint(100, 999)
                print(f"Your total balance is: ${balance}")
                break
            else:
                print("Please try again")
    else:
        print("Please select a valid option.")
# End of program