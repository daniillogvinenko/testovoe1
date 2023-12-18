declare module "*.module.css";
declare module "*.module.scss";

declare module "*.svg" {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}

declare const _IS_DEV_: boolean;
declare const _API_: string;
