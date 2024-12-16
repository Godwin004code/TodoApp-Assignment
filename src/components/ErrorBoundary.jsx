import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const FallbackComponent = ({ error, resetErrorBoundary }) => (
  <div>
    <h1>Something went wrong!</h1>
    <pre>{error.message}</pre>
    <button onClick={resetErrorBoundary}>Try again</button>
  </div>
);

export default function MyErrorBoundary({ children }) {
  return (
    <ErrorBoundary FallbackComponent={FallbackComponent}>
      {children}
    </ErrorBoundary>
  );
}
