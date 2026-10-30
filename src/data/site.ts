/**
 * 全站文字都在这个文件里。改完保存，重新构建后再发布，朋友就能看到新内容。
 *
 * - 换名字、介绍、邮箱：改下面的字段
 * - 增删作品：在 projects 里复制一段，再改文字
 * - 暂时没有链接：把 href 留成空字符串 ""
 * - 想在页脚加一句说明：把 note 写成那段话
 *
 * 注意保留英文引号和逗号，少一个都会导致页面报错。
 */

export type Project = {
  title: string;
  year: string;
  summary: string;
  /** 没有链接就留空字符串 */
  href: string;
};

export const site = {
  name: "示例站点",
  headline: "一个可以慢慢填写的个人站",
  intro: "现在这些文字都是示例，方便先看页面长什么样。",
  description: "个人站示例。介绍、作品和联系方式都集中在一个文件里，之后可以直接替换。",
  email: "hello@example.com",
  note: "",
  nav: [
    { label: "首页", href: "/" },
    { label: "关于", href: "/about" },
    { label: "作品", href: "/work" },
    { label: "联系", href: "/contact" },
  ],
  about: [
    "这段用来介绍你自己。可以写你在做什么、关心什么，或者希望别人怎么认识你。",
    "不需要一次写完。先留一两段，以后想到了再补。",
  ],
  now: "正在试用这个站点，准备以后换成自己的内容。",
  workIntro: "按你想展示的顺序排列，新的放在前面。",
  contactIntro: "想联系时，可以从下面的方式里选一个。地址都是占位，换成你自己的即可。",
  projects: [
    {
      title: "示例项目一",
      year: "2026",
      summary: "用一两句话说明这是什么、你做了哪一部分。有地址就把 href 换成真实链接。",
      href: "https://example.com",
    },
    {
      title: "示例项目二",
      year: "2025",
      summary: "还没有链接也没关系，href 留空即可，标题会显示成普通文字。",
      href: "",
    },
    {
      title: "示例写作",
      year: "2024",
      summary: "作品不限于代码。文章、设计、照片也可以按同样的格式放进来。",
      href: "",
    },
  ] satisfies Project[],
  links: [
    { label: "GitHub", href: "https://github.com" },
    { label: "示例链接", href: "https://example.com" },
  ],
};
