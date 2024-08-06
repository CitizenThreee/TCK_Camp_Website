import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const handler = async (event) => {
    let stripeEvent;

    // Construct the event
    try {
        stripeEvent = stripe.webhooks.constructEvent(
            event.body,
            event.headers['Stripe-Signature'],
            process.env.STRIPE_WEBHOOK_SECRET
        );
    } catch (err) {
        return {
            statusCode: 400,
            body: `Webhook Error: ${err.message}`,
        };
    }

    // Handle the event
    const session = stripeEvent.data.object
    switch (stripeEvent.type) {
        case 'checkout.session.completed':
            // Fulfill the purchase...
            console.log(`Checkout session completed: ${session.id}`);
            break;
        case 'checkout.session.expired':
            // Cancel the purchase...
            console.log(`Checkout session expired: ${session.id}`);
            break;
        case 'checkout.session.async_payment_succeeded':
            // Fulfill the purchase...
            console.log(`Checkout session completed: ${session.id}`);
            break;
        case 'checkout.session.async_payment_failed':
            // Cancel the purchase...
            console.log(`Checkout session expired: ${session.id}`);
            break;
        default:
            console.log(`Unhandled event type ${stripeEvent.type}`);
    }

    return {
        statusCode: 200,
        body: 'Success',
    };
};