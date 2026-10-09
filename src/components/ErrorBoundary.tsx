import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    // If the error comes from an external browser extension (e.g. MetaMask), ignore it
    const msg = error?.message || '';
    const stack = error?.stack || '';
    if (
      msg.includes('MetaMask') ||
      msg.includes('chrome-extension://') ||
      stack.includes('chrome-extension://')
    ) {
      return { hasError: false };
    }
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const msg = error?.message || '';
    const stack = (error?.stack || '') + (errorInfo?.componentStack || '');
    if (
      msg.includes('MetaMask') ||
      msg.includes('chrome-extension://') ||
      stack.includes('chrome-extension://')
    ) {
      return;
    }
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#08080a] text-stone-200 flex flex-col items-center justify-center p-6 text-center">
          <div className="w-16 h-16 rounded-full bg-amber-950/40 border border-[#cca578] flex items-center justify-center text-[#cca578] mb-4">
            <span className="text-2xl font-serif">!</span>
          </div>
          <h2 className="text-2xl font-serif text-white mb-2">Something went wrong</h2>
          <p className="text-sm text-stone-400 mb-6 max-w-md">
            We encountered a temporary display issue. Click below to refresh the experience.
          </p>
          <button
            onClick={() => {
              this.setState({ hasError: false });
              window.location.reload();
            }}
            className="px-6 py-3 rounded-full bg-[#cca578] text-stone-950 font-bold text-sm tracking-wider uppercase"
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
