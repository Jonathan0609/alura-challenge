interface Route {
  key: string;
  label: string;
  href: string;
}

export const routes: Route[] = [
  { key: "home", label: "Inicio", href: "/home" },
  { key: "post", label: "Blog", href: "/blog" },
];
