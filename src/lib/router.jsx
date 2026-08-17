import { createContext, useContext, useEffect, useState } from "react";

const RouterContext = createContext(null);

export function Router({ children }) {
  const [location, setLocation] = useState(readLocation);

  useEffect(() => {
    const sync = () => setLocation(readLocation());
    window.addEventListener("popstate", sync);
    return () => window.removeEventListener("popstate", sync);
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, "", to);
    setLocation(readLocation());
  };

  return (
    <RouterContext.Provider value={{ ...location, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

function readLocation() {
  return {
    pathname: window.location.pathname,
    hash: window.location.hash,
    search: window.location.search,
  };
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error("useRouter must be used within Router");
  }
  return context;
}

export function Link({ to, children, className = "", onClick, ...props }) {
  const { navigate } = useRouter();

  return (
    <a
      href={to}
      className={className}
      onClick={(event) => {
        if (
          !event.metaKey &&
          !event.ctrlKey &&
          !event.shiftKey &&
          (to.startsWith("/") || to.startsWith("#"))
        ) {
          event.preventDefault();
          navigate(to);
        }
        onClick?.(event);
      }}
      {...props}
    >
      {children}
    </a>
  );
}
