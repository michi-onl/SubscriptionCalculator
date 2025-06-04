export function H1({ children }: { children?: React.ReactNode }) {
  return (
    <h1 className="scroll-m-20 text-4xl tracking-tight text-balance">
      {children}
    </h1>
  );
}

export function H2({ children }: { children?: React.ReactNode }) {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {children}
    </h2>
  );
}

export function H3({ children }: { children?: React.ReactNode }) {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {children}
    </h3>
  );
}

export function H4({ children }: { children?: React.ReactNode }) {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {children}
    </h4>
  );
}

export function P({ children }: { children?: React.ReactNode }) {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>;
}

export function Blockquote({ children }: { children?: React.ReactNode }) {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>
  );
}

export function List({ children }: { children?: React.ReactNode }) {
  return <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>;
}

export function InlineCode({ children }: { children?: React.ReactNode }) {
  return (
    <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
      {children}
    </code>
  );
}

export function Lead() {
  return (
    <p className="text-muted-foreground text-xl">
      A modal dialog that interrupts the user with important content and expects
      a response.
    </p>
  );
}

export function Large() {
  return <div className="text-lg font-semibold">Are you absolutely sure?</div>;
}

export function Small() {
  return (
    <small className="text-sm leading-none font-medium">Email address</small>
  );
}

export function Muted() {
  return (
    <p className="text-muted-foreground text-sm">Enter your email address.</p>
  );
}
