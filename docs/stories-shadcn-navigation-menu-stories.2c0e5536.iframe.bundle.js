"use strict";(self.webpackChunkideariver_client_web=self.webpackChunkideariver_client_web||[]).push([[563],{"./node_modules/@radix-ui/react-direction/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{jH:()=>useDirection});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),DirectionContext=(__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_0__.createContext(void 0));function useDirection(localDir){const globalDir=react__WEBPACK_IMPORTED_MODULE_0__.useContext(DirectionContext);return localDir||globalDir||"ltr"}},"./node_modules/@radix-ui/react-id/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;__webpack_require__.d(__webpack_exports__,{B:()=>useId});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs"),useReactId=(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache||(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache=__webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__,2)))["useId".toString()]||(()=>{}),count=0;function useId(deterministicId){const[id,setId]=react__WEBPACK_IMPORTED_MODULE_0__.useState(useReactId());return(0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__.N)((()=>{deterministicId||setId((reactId=>reactId??String(count++)))}),[deterministicId]),deterministicId||(id?`radix-${id}`:"")}},"./src/lib/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs");function cov_20snjvsr4a(){var path="E:\\projects\\hope_v2\\ideariver.client.web\\src\\lib\\utils.ts",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"4e6b8fd2c8df6616789f9f25c6a297957a42791f"===coverage[path].hash||(coverage[path]={path:"E:\\projects\\hope_v2\\ideariver.client.web\\src\\lib\\utils.ts",statementMap:{0:{start:{line:4,column:4},end:{line:4,column:33}}},fnMap:{0:{name:"cn",decl:{start:{line:3,column:16},end:{line:3,column:18}},loc:{start:{line:3,column:30},end:{line:5,column:1}},line:3}},branchMap:{},s:{0:0},f:{0:0},b:{},inputSourceMap:{version:3,sources:["E:\\projects\\hope_v2\\ideariver.client.web\\src\\lib\\utils.ts"],sourcesContent:['import { type ClassValue, clsx } from "clsx"\nimport { twMerge } from "tailwind-merge"\n\nexport function cn(...inputs: ClassValue[]) {\n  return twMerge(clsx(inputs))\n}\n'],names:["clsx","twMerge","cn","inputs"],mappings:"AAAA,SAA0BA,IAAI,QAAQ,OAAM;AAC5C,SAASC,OAAO,QAAQ,iBAAgB;AAExC,OAAO,SAASC,GAAG,GAAGC,MAAoB;IACxC,OAAOF,QAAQD,KAAKG;AACtB"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"4e6b8fd2c8df6616789f9f25c6a297957a42791f"});var actualCoverage=coverage[path];return cov_20snjvsr4a=function(){return actualCoverage},actualCoverage}function cn(...inputs){return cov_20snjvsr4a().f[0]++,cov_20snjvsr4a().s[0]++,(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}cov_20snjvsr4a()},"./src/stories/shadcn/navigation-menu.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomStyle:()=>CustomStyle,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/navigation-menu.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Shadcn/NavigationMenu",component:_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_1__.KS,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{className:{control:"text",description:"Optional additional class names for styling."}}},Default={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_1__.KS,{className:"w-full",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_1__.SK,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_1__.JD,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_1__.wd,{children:"Menu 1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_1__.hA,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_1__.Ws,{href:"/link1",children:"Link 1"})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_1__.JD,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_1__.wd,{children:"Menu 2"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_1__.hA,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_1__.Ws,{href:"/link2",children:"Link 2"})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_1__.JD,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_1__.wd,{children:"Menu 3"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_1__.hA,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_1__.Ws,{href:"/link3",children:"Link 3"})})]})]})})},CustomStyle={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_1__.KS,{className:"bg-blue-500 text-white w-full",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_1__.SK,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_1__.JD,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_1__.wd,{children:"Custom Menu 1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_1__.hA,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_1__.Ws,{href:"/custom-link1",children:"Custom Link 1"})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_1__.JD,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_1__.wd,{children:"Custom Menu 2"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_1__.hA,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_1__.Ws,{href:"/custom-link2",children:"Custom Link 2"})})]})]})})},__namedExportsOrder=["Default","CustomStyle"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: () => <NavigationMenu className="w-full">\r\n      <NavigationMenuList>\r\n        <NavigationMenuItem>\r\n          <NavigationMenuTrigger>Menu 1</NavigationMenuTrigger>\r\n          <NavigationMenuContent>\r\n            <NavigationMenuLink href="/link1">Link 1</NavigationMenuLink>\r\n          </NavigationMenuContent>\r\n        </NavigationMenuItem>\r\n        <NavigationMenuItem>\r\n          <NavigationMenuTrigger>Menu 2</NavigationMenuTrigger>\r\n          <NavigationMenuContent>\r\n            <NavigationMenuLink href="/link2">Link 2</NavigationMenuLink>\r\n          </NavigationMenuContent>\r\n        </NavigationMenuItem>\r\n        <NavigationMenuItem>\r\n          <NavigationMenuTrigger>Menu 3</NavigationMenuTrigger>\r\n          <NavigationMenuContent>\r\n            <NavigationMenuLink href="/link3">Link 3</NavigationMenuLink>\r\n          </NavigationMenuContent>\r\n        </NavigationMenuItem>\r\n      </NavigationMenuList>\r\n    </NavigationMenu>\n}',...Default.parameters?.docs?.source}}},CustomStyle.parameters={...CustomStyle.parameters,docs:{...CustomStyle.parameters?.docs,source:{originalSource:'{\n  render: () => <NavigationMenu className="bg-blue-500 text-white w-full">\r\n      <NavigationMenuList>\r\n        <NavigationMenuItem>\r\n          <NavigationMenuTrigger>Custom Menu 1</NavigationMenuTrigger>\r\n          <NavigationMenuContent>\r\n            <NavigationMenuLink href="/custom-link1">\r\n              Custom Link 1\r\n            </NavigationMenuLink>\r\n          </NavigationMenuContent>\r\n        </NavigationMenuItem>\r\n        <NavigationMenuItem>\r\n          <NavigationMenuTrigger>Custom Menu 2</NavigationMenuTrigger>\r\n          <NavigationMenuContent>\r\n            <NavigationMenuLink href="/custom-link2">\r\n              Custom Link 2\r\n            </NavigationMenuLink>\r\n          </NavigationMenuContent>\r\n        </NavigationMenuItem>\r\n      </NavigationMenuList>\r\n    </NavigationMenu>\n}',...CustomStyle.parameters?.docs?.source}}}}}]);