import React from 'react';
import { Button, Container } from '../ui';

const NotFound = () => (
  <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
    <p className="font-display text-7xl font-semibold text-gold-500">404</p>
    <h1 className="mt-4 font-display text-3xl font-semibold text-ink">This page has moved or doesn’t exist.</h1>
    <p className="mt-3 max-w-md text-ink-soft">The AARTI website was recently redesigned. Try the home page or the menu above.</p>
    <div className="mt-8 flex flex-wrap justify-center gap-3">
      <Button to="/" variant="navy">
        Go to home
      </Button>
      <Button to="/contact" variant="outline">
        Contact us
      </Button>
    </div>
  </Container>
);

export default NotFound;
