import IconFacebook from "./IconFacebook";
import IconTwitter from "./IconTwitter";
import IconYoutube from "./IconYoutube";
import IconLinkedIn from "./IconLinkedIn";

export const menuSocial = [
  {
    link: "/",
    icon: <IconFacebook />
  },
  {
    link: "/",
    icon: <IconTwitter />
  },
  {
    link: "/",
    icon: <IconYoutube />
  },
  {
    link: "/",
    icon: <IconLinkedIn />
  }
]

export const menus = [
  {
    title: 'Liên kết',
    children: [
      { title: 'Tin tức', link: '/blogs' },
      { title: 'Bảng giá', link: '/pricing' },
    ]
  },
  {
    title: 'Điều kiện',
    children: [
      { title: 'Chính sách bảo mật', link: '/' },
      { title: 'Chính sách hoàn tiền', link: '/' }
    ]
  },
  {
    title: 'Hỗ trợ & Giúp đỡ',
    children: [
      { title: 'Kết nối', link: '/contact' },
      { title: 'Điều kiện sử dụng', link: '/' },
      { title: 'Thông báo', link: '/about' }
    ]
  }
]