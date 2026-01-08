/**
 * Open/Closed Principle (OCP)
 * 
 * Definition: Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification.
 * 
 * Meaning: You should be able to add new functionality without changing existing code.
 * - "Open for extension": We can add new features (e.g., a new payment method).
 * - "Closed for modification": We shouldn't have to change the existing, working code (e.g., the PaymentProcessor class) to add that feature.
 */

// ==========================================
// ❌ BAD EXAMPLE: Violating OCP
// ==========================================
// In this example, if we want to add a new payment method (e.g., 'ApplePay'),
// we have to MODIFY the 'pay' method by adding another 'else if'.
// This increases the risk of introducing bugs in already working code.

class BadPaymentProcessor {
    pay(method, amount) {
        if (method.name === 'creditCard') {
            console.log(`Paying ${amount} using Credit Card`);
        } else if (method.name === 'paypal') {
            console.log(`Paying ${amount} using PayPal`);
        } else if (method.name === 'bankTransfer') {
            console.log(`Paying ${amount} using Bank Transfer`);
        } else {
            throw new Error('Payment method not found');
        }
    }
}

// const badProcessor = new BadPaymentProcessor();
// badProcessor.pay({ name: 'creditCard' }, 100);


// ==========================================
// ✅ GOOD EXAMPLE: Following OCP
// ==========================================
// Here, we use polymorphism. We define a common interface (conceptually) for payments.
// To add a new payment method, we simply create a NEW class.
// We DO NOT modify the existing PaymentProcessor or other payment classes.

class PaymentMethod {
    pay(amount) {
        throw new Error("Method 'pay()' must be implemented.");
    }
}

class CreditCardPayment extends PaymentMethod {
    pay(amount) {
        console.log(`Paying ${amount} using Credit Card`);
    }
}

class PayPalPayment extends PaymentMethod {
    pay(amount) {
        console.log(`Paying ${amount} using PayPal`);
    }
}

class BankTransferPayment extends PaymentMethod {
    pay(amount) {
        console.log(`Paying ${amount} using Bank Transfer`);
    }
}

// 🆕 EXTENSION: Adding a new method without touching existing code
class GooglePayPayment extends PaymentMethod {
    pay(amount) {
        console.log(`Paying ${amount} using Google Pay`);
    }
}

class PaymentProcessor {
    // This method works with ANY object that follows the PaymentMethod interface.
    // We never need to change this code, even if we add 100 new payment types.
    process(paymentMethod, amount) {
        paymentMethod.pay(amount);
    }
}

// Usage
const processor = new PaymentProcessor();

const creditCard = new CreditCardPayment();
const paypal = new PayPalPayment();
const googlePay = new GooglePayPayment();

console.log("--- Open/Closed Principle Example ---");
processor.process(creditCard, 100);
processor.process(paypal, 200);
processor.process(googlePay, 300);
