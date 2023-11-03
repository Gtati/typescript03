// Crear una clase CuentaBancaria con propiedades como número de cuenta, titular y saldo. Agregar métodos para
// depositar, retirar y consultar saldo. Crear varias cuentas y probar los métodos

class CuentaBancaria{
    NumeroCuenta: number;
    titular: string;
    saldo: number;

    constructor(NumeroCuenta: number, titular: string, saldo: number){
        this.NumeroCuenta=NumeroCuenta;
        this.titular=titular;
        this.saldo=saldo
    }
    depositar(cantidad: number) {
        if (cantidad < 0) {
          throw new Error("No se puede depositar una cantidad negativa");
        }
    
        this.saldo += cantidad;
      }
    
      retirar(cantidad: number) {
        if (cantidad < 0) {
          throw new Error("No se puede retirar una cantidad negativa");
        }
    
        if (this.saldo < cantidad) {
          throw new Error("No hay saldo suficiente");
        }
    
        this.saldo -= cantidad;
      }
    
      consultarSaldo() {
        return this.saldo;
      }
}

const user1 = new CuentaBancaria(234516, 'Lorena', 2200000)
const user2 = new CuentaBancaria(12342, 'Martin', 12000000)
user1.retirar(2000);
console.log('tu saldo es de ' + user1.consultarSaldo());
user2.depositar(500000);
console.log( 'Tu saldo es de ' + user2.consultarSaldo())

