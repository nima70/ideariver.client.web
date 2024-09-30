"use strict";(self.webpackChunkideariver_client_web=self.webpackChunkideariver_client_web||[]).push([[168],{"./src/stories/components/BlogGalleryUI.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{PageOne:()=>PageOne,PageTwo:()=>PageTwo,__namedExportsOrder:()=>__namedExportsOrder,default:()=>BlogGalleryUI_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),next_link=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./node_modules/next/link.js")),link_default=__webpack_require__.n(next_link),next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs");function cov_1b6jesr2l8(){var path="E:\\projects\\hope_v2\\ideariver.client.web\\src\\components\\BlogCard.tsx",global=new Function("return this")(),gcv="__coverage__",coverageData={path:"E:\\projects\\hope_v2\\ideariver.client.web\\src\\components\\BlogCard.tsx",statementMap:{0:{start:{line:6,column:17},end:{line:51,column:1}},1:{start:{line:7,column:25},end:{line:13,column:5}},2:{start:{line:8,column:8},end:{line:8,column:42}},3:{start:{line:8,column:32},end:{line:8,column:42}},4:{start:{line:9,column:8},end:{line:11,column:9}},5:{start:{line:10,column:12},end:{line:10,column:52}},6:{start:{line:12,column:8},end:{line:12,column:20}},7:{start:{line:14,column:4},end:{line:50,column:7}},8:{start:{line:53,column:0},end:{line:94,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:6,column:17},end:{line:6,column:18}},loc:{start:{line:6,column:67},end:{line:51,column:1}},line:6},1:{name:"(anonymous_1)",decl:{start:{line:7,column:25},end:{line:7,column:26}},loc:{start:{line:7,column:44},end:{line:13,column:5}},line:7}},branchMap:{0:{loc:{start:{line:8,column:8},end:{line:8,column:42}},type:"if",locations:[{start:{line:8,column:8},end:{line:8,column:42}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:8},1:{loc:{start:{line:9,column:8},end:{line:11,column:9}},type:"if",locations:[{start:{line:9,column:8},end:{line:11,column:9}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:9},2:{loc:{start:{line:9,column:12},end:{line:9,column:43}},type:"binary-expr",locations:[{start:{line:9,column:12},end:{line:9,column:16}},{start:{line:9,column:20},end:{line:9,column:43}}],line:9},3:{loc:{start:{line:38,column:16},end:{line:47,column:18}},type:"binary-expr",locations:[{start:{line:38,column:16},end:{line:38,column:26}},{start:{line:38,column:44},end:{line:47,column:18}}],line:38}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0},f:{0:0,1:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0,0]},inputSourceMap:{version:3,sources:["E:/projects/hope_v2/ideariver.client.web/src/components/BlogCard.tsx"],sourcesContent:['// src/components/BlogCard.tsx\r\nimport React from "react";\r\nimport Link from "next/link";\r\nimport Image from "next/image";\r\n\r\ntype BlogCardProps = {\r\n  title: string;\r\n  coverPhoto?: string;\r\n  date?: string;\r\n  description?: string;\r\n  href: string;\r\n};\r\n\r\nconst BlogCard: React.FC<BlogCardProps> = ({\r\n  title,\r\n  coverPhoto,\r\n  href,\r\n  date,\r\n  description,\r\n}) => {\r\n  const truncateText = (maxLength: number, text?: string) => {\r\n    if (text === undefined) return "";\r\n    if (text && text.length > maxLength) {\r\n      return text.slice(0, maxLength) + "...";\r\n    }\r\n    return text;\r\n  };\r\n\r\n  return (\r\n    <Link href={href} className="w-full px-2 h-96 md:h-60">\r\n      <div className="bg-card text-card-foreground w-full h-full p-6 mb-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col-reverse md:flex-row items-center">\r\n        <div className="text-2xl font-bold flex-grow text-center md:text-left flex flex-col space-y-4 ">\r\n          <h2 className="align-text-top ">{title}</h2>\r\n          {coverPhoto}\r\n          <p className="text-muted-foreground text-lg">\r\n            {truncateText(150, description)}\r\n          </p>\r\n          <p className="text-muted-foreground text-sm">{date}</p>\r\n        </div>\r\n        {coverPhoto && (\r\n          <div className="relative  w-full  h-32 md:w-40 md:h-40 flex-shrink-0 rounded-lg overflow-hidden   md:mt-0 md:ml-4">\r\n            <Image\r\n              src={coverPhoto}\r\n              alt={title}\r\n              layout="fill"\r\n              objectFit="cover"\r\n              className="rounded-lg pb-4 pt-2 md:pt-0 md:pb-0"\r\n            />\r\n          </div>\r\n        )}\r\n      </div>\r\n    </Link>\r\n  );\r\n};\r\n\r\nexport default BlogCard;\r\n'],names:["React","Link","Image","BlogCard","title","coverPhoto","href","date","description","truncateText","maxLength","text","undefined","length","slice","className","div","h2","p","src","alt","layout","objectFit"],mappings:"AAAA,8BAA8B;;AAC9B,OAAOA,WAAW,QAAQ;AAC1B,OAAOC,UAAU,YAAY;AAC7B,OAAOC,WAAW,aAAa;AAU/B,MAAMC,WAAoC,CAAC,EACzCC,KAAK,EACLC,UAAU,EACVC,IAAI,EACJC,IAAI,EACJC,WAAW,EACZ;IACC,MAAMC,eAAe,CAACC,WAAmBC;QACvC,IAAIA,SAASC,WAAW,OAAO;QAC/B,IAAID,QAAQA,KAAKE,MAAM,GAAGH,WAAW;YACnC,OAAOC,KAAKG,KAAK,CAAC,GAAGJ,aAAa;QACpC;QACA,OAAOC;IACT;IAEA,qBACE,KAACV;QAAKK,MAAMA;QAAMS,WAAU;kBAC1B,cAAA,MAACC;YAAID,WAAU;;8BACb,MAACC;oBAAID,WAAU;;sCACb,KAACE;4BAAGF,WAAU;sCAAmBX;;wBAChCC;sCACD,KAACa;4BAAEH,WAAU;sCACVN,aAAa,KAAKD;;sCAErB,KAACU;4BAAEH,WAAU;sCAAiCR;;;;gBAE/CF,4BACC,KAACW;oBAAID,WAAU;8BACb,cAAA,KAACb;wBACCiB,KAAKd;wBACLe,KAAKhB;wBACLiB,QAAO;wBACPC,WAAU;wBACVP,WAAU;;;;;;AAOxB;AAEA,eAAeZ,SAAS"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"57e3e892c2da70d000f0b799eefe45917c3a12a3"},coverage=global[gcv]||(global[gcv]={});coverage[path]&&"57e3e892c2da70d000f0b799eefe45917c3a12a3"===coverage[path].hash||(coverage[path]=coverageData);var actualCoverage=coverage[path];return cov_1b6jesr2l8=function(){return actualCoverage},actualCoverage}cov_1b6jesr2l8(),cov_1b6jesr2l8().s[0]++;const BlogCard=({title,coverPhoto,href,date,description})=>{cov_1b6jesr2l8().f[0]++,cov_1b6jesr2l8().s[1]++;return cov_1b6jesr2l8().s[7]++,(0,jsx_runtime.jsx)(link_default(),{href,className:"w-full px-2 h-96 md:h-60",children:(0,jsx_runtime.jsxs)("div",{className:"bg-card text-card-foreground w-full h-full p-6 mb-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col-reverse md:flex-row items-center",children:[(0,jsx_runtime.jsxs)("div",{className:"text-2xl font-bold flex-grow text-center md:text-left flex flex-col space-y-4 ",children:[(0,jsx_runtime.jsx)("h2",{className:"align-text-top ",children:title}),coverPhoto,(0,jsx_runtime.jsx)("p",{className:"text-muted-foreground text-lg",children:(maxLength=150,text=description,cov_1b6jesr2l8().f[1]++,cov_1b6jesr2l8().s[2]++,void 0===text?(cov_1b6jesr2l8().b[0][0]++,cov_1b6jesr2l8().s[3]++,""):(cov_1b6jesr2l8().b[0][1]++,cov_1b6jesr2l8().s[4]++,cov_1b6jesr2l8().b[2][0]++,text&&(cov_1b6jesr2l8().b[2][1]++,text.length>maxLength)?(cov_1b6jesr2l8().b[1][0]++,cov_1b6jesr2l8().s[5]++,text.slice(0,maxLength)+"..."):(cov_1b6jesr2l8().b[1][1]++,cov_1b6jesr2l8().s[6]++,text)))}),(0,jsx_runtime.jsx)("p",{className:"text-muted-foreground text-sm",children:date})]}),(cov_1b6jesr2l8().b[3][0]++,coverPhoto&&(cov_1b6jesr2l8().b[3][1]++,(0,jsx_runtime.jsx)("div",{className:"relative  w-full  h-32 md:w-40 md:h-40 flex-shrink-0 rounded-lg overflow-hidden   md:mt-0 md:ml-4",children:(0,jsx_runtime.jsx)(next_image.A,{src:coverPhoto,alt:title,layout:"fill",objectFit:"cover",className:"rounded-lg pb-4 pt-2 md:pt-0 md:pb-0"})})))]})});var maxLength,text},components_BlogCard=BlogCard;cov_1b6jesr2l8().s[8]++,BlogCard.__docgenInfo={description:"",methods:[],displayName:"BlogCard",props:{title:{required:!0,tsType:{name:"string"},description:""},coverPhoto:{required:!1,tsType:{name:"string"},description:""},date:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},href:{required:!0,tsType:{name:"string"},description:""}}};var pagination=__webpack_require__("./src/components/ui/pagination.tsx");function cov_21ctqu9m7g(){var path="E:\\projects\\hope_v2\\ideariver.client.web\\src\\components\\BlogGalleryUI.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"2756282feb4228a21aa206905a313750a9737ae5"===coverage[path].hash||(coverage[path]={path:"E:\\projects\\hope_v2\\ideariver.client.web\\src\\components\\BlogGalleryUI.tsx",statementMap:{0:{start:{line:6,column:22},end:{line:63,column:1}},1:{start:{line:7,column:4},end:{line:62,column:7}},2:{start:{line:21,column:77},end:{line:27,column:41}},3:{start:{line:45,column:56},end:{line:51,column:37}},4:{start:{line:65,column:0},end:{line:139,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:6,column:22},end:{line:6,column:23}},loc:{start:{line:6,column:60},end:{line:63,column:1}},line:6},1:{name:"(anonymous_1)",decl:{start:{line:21,column:48},end:{line:21,column:49}},loc:{start:{line:21,column:77},end:{line:27,column:41}},line:21},2:{name:"(anonymous_2)",decl:{start:{line:45,column:34},end:{line:45,column:35}},loc:{start:{line:45,column:56},end:{line:51,column:37}},line:45}},branchMap:{0:{loc:{start:{line:38,column:28},end:{line:42,column:30}},type:"binary-expr",locations:[{start:{line:38,column:28},end:{line:38,column:43}},{start:{line:38,column:61},end:{line:42,column:30}}],line:38},1:{loc:{start:{line:48,column:51},end:{line:48,column:88}},type:"cond-expr",locations:[{start:{line:48,column:75},end:{line:48,column:83}},{start:{line:48,column:86},end:{line:48,column:88}}],line:48},2:{loc:{start:{line:52,column:28},end:{line:56,column:30}},type:"binary-expr",locations:[{start:{line:52,column:28},end:{line:52,column:52}},{start:{line:52,column:70},end:{line:56,column:30}}],line:52}},s:{0:0,1:0,2:0,3:0,4:0},f:{0:0,1:0,2:0},b:{0:[0,0],1:[0,0],2:[0,0]},inputSourceMap:{version:3,sources:["E:/projects/hope_v2/ideariver.client.web/src/components/BlogGalleryUI.tsx"],sourcesContent:['// src/components/BlogGalleryUI.tsx\r\n\r\nimport React from "react";\r\nimport BlogCard from "@/components/BlogCard";\r\nimport {\r\n  Pagination,\r\n  PaginationContent,\r\n  PaginationItem,\r\n  PaginationLink,\r\n  PaginationNext,\r\n  PaginationPrevious,\r\n} from "@/components/ui/pagination";\r\n\r\nexport interface BlogGalleryUIProps {\r\n  currentPage: number;\r\n  totalPages: number;\r\n  blogs: {\r\n    title: string;\r\n    date?: string;\r\n    description?: string;\r\n    coverPhoto?: string;\r\n    id: string;\r\n  }[];\r\n}\r\n\r\nconst BlogGalleryUI = ({\r\n  currentPage,\r\n  totalPages,\r\n  blogs,\r\n}: BlogGalleryUIProps) => {\r\n  return (\r\n    <main className="flex flex-col min-h-screen bg-background">\r\n      <section className="flex flex-col flex-grow items-center justify-center bg-card py-16 w-full">\r\n        <div className="container mx-auto px-6 text-center w-full flex-grow">\r\n          <h1 className="text-4xl font-bold mb-24 text-foreground  md:mb-8 ">\r\n            Blog Gallery\r\n          </h1>\r\n          <div className="flex flex-col items-center space-y-4">\r\n            {blogs.map((blog, index) => (\r\n              <BlogCard\r\n                key={index}\r\n                title={blog.title}\r\n                date={blog.date}\r\n                description={blog.description}\r\n                coverPhoto={blog.coverPhoto}\r\n                href={`/pages/blogs/${blog.id}`}\r\n              />\r\n            ))}\r\n          </div>\r\n        </div>\r\n      </section>\r\n      <section className="w-full bg-card py-4">\r\n        <Pagination className="flex justify-center">\r\n          <PaginationContent>\r\n            {currentPage > 1 && (\r\n              <PaginationItem>\r\n                <PaginationPrevious\r\n                  href={`/pages/blog-gallery/${Math.max(currentPage - 1, 1)}`}\r\n                />\r\n              </PaginationItem>\r\n            )}\r\n            {[...Array(totalPages)].map((_, i) => (\r\n              <PaginationItem key={i}>\r\n                <PaginationLink\r\n                  href={`/pages/blog-gallery/${i + 1}`}\r\n                  className={i + 1 === currentPage ? "active" : ""}\r\n                >\r\n                  {i + 1}\r\n                </PaginationLink>\r\n              </PaginationItem>\r\n            ))}\r\n            {currentPage < totalPages && (\r\n              <PaginationItem>\r\n                <PaginationNext\r\n                  href={`/pages/blog-gallery/${Math.min(\r\n                    currentPage + 1,\r\n                    totalPages\r\n                  )}`}\r\n                />\r\n              </PaginationItem>\r\n            )}\r\n          </PaginationContent>\r\n        </Pagination>\r\n      </section>\r\n    </main>\r\n  );\r\n};\r\n\r\nexport default BlogGalleryUI;\r\n'],names:["React","BlogCard","Pagination","PaginationContent","PaginationItem","PaginationLink","PaginationNext","PaginationPrevious","BlogGalleryUI","currentPage","totalPages","blogs","main","className","section","div","h1","map","blog","index","title","date","description","coverPhoto","href","id","Math","max","Array","_","i","min"],mappings:"AAAA,mCAAmC;;AAEnC,OAAOA,WAAW,QAAQ;AAC1B,OAAOC,cAAc,wBAAwB;AAC7C,SACEC,UAAU,EACVC,iBAAiB,EACjBC,cAAc,EACdC,cAAc,EACdC,cAAc,EACdC,kBAAkB,QACb,6BAA6B;AAcpC,MAAMC,gBAAgB,CAAC,EACrBC,WAAW,EACXC,UAAU,EACVC,KAAK,EACc;IACnB,qBACE,MAACC;QAAKC,WAAU;;0BACd,KAACC;gBAAQD,WAAU;0BACjB,cAAA,MAACE;oBAAIF,WAAU;;sCACb,KAACG;4BAAGH,WAAU;sCAAqD;;sCAGnE,KAACE;4BAAIF,WAAU;sCACZF,MAAMM,GAAG,CAAC,CAACC,MAAMC,sBAChB,KAAClB;oCAECmB,OAAOF,KAAKE,KAAK;oCACjBC,MAAMH,KAAKG,IAAI;oCACfC,aAAaJ,KAAKI,WAAW;oCAC7BC,YAAYL,KAAKK,UAAU;oCAC3BC,MAAM,CAAC,aAAa,EAAEN,KAAKO,EAAE,CAAC,CAAC;mCAL1BN;;;;;0BAWf,KAACL;gBAAQD,WAAU;0BACjB,cAAA,KAACX;oBAAWW,WAAU;8BACpB,cAAA,MAACV;;4BACEM,cAAc,mBACb,KAACL;0CACC,cAAA,KAACG;oCACCiB,MAAM,CAAC,oBAAoB,EAAEE,KAAKC,GAAG,CAAClB,cAAc,GAAG,GAAG,CAAC;;;4BAIhE;mCAAImB,MAAMlB;6BAAY,CAACO,GAAG,CAAC,CAACY,GAAGC,kBAC9B,KAAC1B;8CACC,cAAA,KAACC;wCACCmB,MAAM,CAAC,oBAAoB,EAAEM,IAAI,EAAE,CAAC;wCACpCjB,WAAWiB,IAAI,MAAMrB,cAAc,WAAW;kDAE7CqB,IAAI;;mCALYA;4BAStBrB,cAAcC,4BACb,KAACN;0CACC,cAAA,KAACE;oCACCkB,MAAM,CAAC,oBAAoB,EAAEE,KAAKK,GAAG,CACnCtB,cAAc,GACdC,YACA,CAAC;;;;;;;;;AASrB;AAEA,eAAeF,cAAc"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"2756282feb4228a21aa206905a313750a9737ae5"});var actualCoverage=coverage[path];return cov_21ctqu9m7g=function(){return actualCoverage},actualCoverage}cov_21ctqu9m7g(),cov_21ctqu9m7g().s[0]++;const BlogGalleryUI=({currentPage,totalPages,blogs})=>(cov_21ctqu9m7g().f[0]++,cov_21ctqu9m7g().s[1]++,(0,jsx_runtime.jsxs)("main",{className:"flex flex-col min-h-screen bg-background",children:[(0,jsx_runtime.jsx)("section",{className:"flex flex-col flex-grow items-center justify-center bg-card py-16 w-full",children:(0,jsx_runtime.jsxs)("div",{className:"container mx-auto px-6 text-center w-full flex-grow",children:[(0,jsx_runtime.jsx)("h1",{className:"text-4xl font-bold mb-24 text-foreground  md:mb-8 ",children:"Blog Gallery"}),(0,jsx_runtime.jsx)("div",{className:"flex flex-col items-center space-y-4",children:blogs.map(((blog,index)=>(cov_21ctqu9m7g().f[1]++,cov_21ctqu9m7g().s[2]++,(0,jsx_runtime.jsx)(components_BlogCard,{title:blog.title,date:blog.date,description:blog.description,coverPhoto:blog.coverPhoto,href:`/pages/blogs/${blog.id}`},index))))})]})}),(0,jsx_runtime.jsx)("section",{className:"w-full bg-card py-4",children:(0,jsx_runtime.jsx)(pagination.dK,{className:"flex justify-center",children:(0,jsx_runtime.jsxs)(pagination.Iu,{children:[(cov_21ctqu9m7g().b[0][0]++,currentPage>1&&(cov_21ctqu9m7g().b[0][1]++,(0,jsx_runtime.jsx)(pagination.cU,{children:(0,jsx_runtime.jsx)(pagination.Eb,{href:`/pages/blog-gallery/${Math.max(currentPage-1,1)}`})}))),[...Array(totalPages)].map(((_,i)=>(cov_21ctqu9m7g().f[2]++,cov_21ctqu9m7g().s[3]++,(0,jsx_runtime.jsx)(pagination.cU,{children:(0,jsx_runtime.jsx)(pagination.n$,{href:`/pages/blog-gallery/${i+1}`,className:i+1===currentPage?(cov_21ctqu9m7g().b[1][0]++,"active"):(cov_21ctqu9m7g().b[1][1]++,""),children:i+1})},i)))),(cov_21ctqu9m7g().b[2][0]++,currentPage<totalPages&&(cov_21ctqu9m7g().b[2][1]++,(0,jsx_runtime.jsx)(pagination.cU,{children:(0,jsx_runtime.jsx)(pagination.WA,{href:`/pages/blog-gallery/${Math.min(currentPage+1,totalPages)}`})})))]})})})]})),components_BlogGalleryUI=BlogGalleryUI;cov_21ctqu9m7g().s[4]++,BlogGalleryUI.__docgenInfo={description:"",methods:[],displayName:"BlogGalleryUI",props:{currentPage:{required:!0,tsType:{name:"number"},description:""},totalPages:{required:!0,tsType:{name:"number"},description:""},blogs:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\r\n  title: string;\r\n  date?: string;\r\n  description?: string;\r\n  coverPhoto?: string;\r\n  id: string;\r\n}",signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"date",value:{name:"string",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"coverPhoto",value:{name:"string",required:!1}},{key:"id",value:{name:"string",required:!0}}]}}],raw:"{\r\n  title: string;\r\n  date?: string;\r\n  description?: string;\r\n  coverPhoto?: string;\r\n  id: string;\r\n}[]"},description:""}}};const BlogGalleryUI_stories={title:"Components/BlogGalleryUI",component:components_BlogGalleryUI,argTypes:{currentPage:{control:"number"},totalPages:{control:"number"},blogs:{control:"object"}}},PageOne={args:{currentPage:1,totalPages:2,blogs:[{title:"AI in Marketing",date:"2024-09-29",description:"Explore how AI is transforming marketing strategies.",coverPhoto:"coverPhotos/ai-icon.jpg",id:"ai-marketing"},{title:"Content Marketing Tips",date:"2024-09-28",description:"Learn how to create effective content marketing strategies.",coverPhoto:"coverPhotos/content-marketing-icon.jpg",id:"content-marketing-tips"},{title:"SEO Best Practices",date:"2024-09-27",description:"A guide to effective SEO strategies.",coverPhoto:"coverPhotos/seo-icon.jpg",id:"seo-best-practices"}]}},PageTwo={args:{currentPage:2,totalPages:2,blogs:[{title:"Social Media Strategy",date:"2024-09-26",description:"Boost your brand presence with a solid social media strategy.",coverPhoto:"coverPhotos/social-media-icon.jpg",id:"social-media-strategy"},{title:"Video Marketing Trends",date:"2024-09-25",description:"Discover the latest trends in video marketing.",coverPhoto:"coverPhotos/video-marketing-icon.jpg",id:"video-marketing-trends"},{title:"Voice Search Optimization",date:"2024-09-24",description:"Optimize your content for voice search to reach a broader audience.",coverPhoto:"coverPhotos/voice-search-icon.jpg",id:"voice-search-optimization"}]}},__namedExportsOrder=["PageOne","PageTwo"];PageOne.parameters={...PageOne.parameters,docs:{...PageOne.parameters?.docs,source:{originalSource:'{\n  args: {\n    currentPage: 1,\n    totalPages: 2,\n    // Assume 2 pages of blog posts\n    blogs: [{\n      title: "AI in Marketing",\n      date: "2024-09-29",\n      description: "Explore how AI is transforming marketing strategies.",\n      coverPhoto: "coverPhotos/ai-icon.jpg",\n      id: "ai-marketing"\n    }, {\n      title: "Content Marketing Tips",\n      date: "2024-09-28",\n      description: "Learn how to create effective content marketing strategies.",\n      coverPhoto: "coverPhotos/content-marketing-icon.jpg",\n      id: "content-marketing-tips"\n    }, {\n      title: "SEO Best Practices",\n      date: "2024-09-27",\n      description: "A guide to effective SEO strategies.",\n      coverPhoto: "coverPhotos/seo-icon.jpg",\n      id: "seo-best-practices"\n    }]\n  }\n}',...PageOne.parameters?.docs?.source}}},PageTwo.parameters={...PageTwo.parameters,docs:{...PageTwo.parameters?.docs,source:{originalSource:'{\n  args: {\n    currentPage: 2,\n    totalPages: 2,\n    // Assume 2 pages of blog posts\n    blogs: [{\n      title: "Social Media Strategy",\n      date: "2024-09-26",\n      description: "Boost your brand presence with a solid social media strategy.",\n      coverPhoto: "coverPhotos/social-media-icon.jpg",\n      id: "social-media-strategy"\n    }, {\n      title: "Video Marketing Trends",\n      date: "2024-09-25",\n      description: "Discover the latest trends in video marketing.",\n      coverPhoto: "coverPhotos/video-marketing-icon.jpg",\n      id: "video-marketing-trends"\n    }, {\n      title: "Voice Search Optimization",\n      date: "2024-09-24",\n      description: "Optimize your content for voice search to reach a broader audience.",\n      coverPhoto: "coverPhotos/voice-search-icon.jpg",\n      id: "voice-search-optimization"\n    }]\n  }\n}',...PageTwo.parameters?.docs?.source}}}}}]);