
// Encapsulación:
// a. Crea una clase "BankAccount" con propiedades privadas como "balance" y métodos públicos para depositar y retirar dinero.
// b. Implementa la encapsulación utilizando métodos públicos para acceder y modificar el saldo de la cuenta.
// c. Crea una instancia de "BankAccount" y realiza operaciones de depósito y retiro para probar la encapsulación.


class BankAccount {
    private balance: number = 0; 

    deposit (amount: number): void {
        this.balance += amount
    }

    withdraw (amount: number): void {
        this.balance -= amount
    }

    checkBalance (): void {
        console.log("current balance:", this.balance)
    }
}

const account = new BankAccount();
account.deposit(1000);
account.checkBalance();
account.withdraw(1000);
account.checkBalance();
