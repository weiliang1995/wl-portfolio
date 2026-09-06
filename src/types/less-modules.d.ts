// Next.js ships ambient declarations for `*.module.css` and `*.module.scss`
// only; Less modules need their own.
declare module "*.module.less" {
  const classes: { readonly [key: string]: string };
  export default classes;
}
