# ShowSphere

A polished BookMyShow-style cinema and live-events booking platform.

## Delivered

- Responsive discovery: hero, search, event catalogue, city picker, event detail and showtimes
- Interactive seat map with unavailable, selected and transactional temporary holds
- Checkout flow and an explicitly simulated payment gateway
- E-ticket receipt with booking ID, payment reference and venue scan indicator
- Venue-manager operational dashboard
- Typed Next.js API routes for catalogue, availability, holds and booking confirmation

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Architecture

The Next.js API implements the booking flow and keeps the front end independent of the inventory implementation. The starter uses an in-memory store so it runs without credentials; 8-minute holds prevent a user from paying for seats already selected by someone else.

For production, replace `lib/store.ts` with PostgreSQL and Redis. Seat locking must be transactional and protected by uniqueness constraints; process payment webhooks idempotently. Add authentication, organiser/venue CRUD, real event inventory, refunds/cancellation policy, notifications, invoicing/tax, search, analytics, observability, PCI-compliant payment tokenisation, and managed image storage before taking real payment.

## Payment safety

The checkout UI is a demo. It does not send card data or charge money. Integrate a merchant-owned gateway (for example Razorpay or Stripe) only after configuring server-side secret storage and signed webhook verification.