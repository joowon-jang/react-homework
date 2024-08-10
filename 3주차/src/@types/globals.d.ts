// CSS Modules 사용
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}
