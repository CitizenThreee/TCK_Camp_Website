import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const handler = async (event) => {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [{
                price: 'price_1PiPEXL8W1i3hvWFRHYVlIuq',
                quantity: 1,
            }],
            mode: 'payment',
            success_url: 'http://localhost:5173/Register',
            cancel_url: 'http://localhost:5173',
            client_reference_id: event.body.id
        });

        return {
            statusCode: 200,
            body: { id: session.id },
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: { error: error.message },
        };
    }
};