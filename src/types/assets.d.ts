// svg以无状态组件方式导入
declare interface SvgrComponent extends React.StatelessComponent<React.SVGAttributes<SVGElement>> {}

declare module '*.svg' {
    const content: SvgrComponent
    export default content
}
