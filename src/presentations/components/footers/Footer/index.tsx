import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Image } from '@components';
import { useBlog } from '@hooks';

const FOOTER_MENUS = [
  {
    id: 1,
    title: 'About',
    url: '/about'
  },
  {
    id: 2,
    title: 'Disclaimer',
    url: '/disclaimer'
  },
  {
    id: 3,
    title: 'Github',
    url: 'https://github.com/itokun99/react-template-blogger'
  },
  {
    id: 4,
    title: 'References',
    url: '/references'
  }
];

function Component() {
  const blog = useBlog();

  return (
    <>
      <div className="border-t border-slate-300 bg-white">
        <Container className="block sm:flex">
          <div className="basis-8/12 border-b border-slate-300 px-6 pb-14 pt-14 sm:border-b-0 sm:pb-6">
            <div className="flex max-w-[375px] gap-4">
              <div className="">
                <Image
                  src={blog.config.data?.app.logo}
                  loading={blog.isLoading}
                  className="h-[72px] w-[72px] overflow-hidden rounded-full"
                />
              </div>
              <div className="">
                <h2 className="mb-1 text-2xl font-semibold text-slate-700">
                  {blog.data?.name}
                </h2>
                <p className="text-sm text-slate-700">
                  {blog.data?.description}
                </p>
              </div>
            </div>
          </div>
          <div className="basis-4/12 p-6 pb-14 pt-14 sm:pb-6">
            <ul>
              {FOOTER_MENUS.map(menu => (
                <li key={menu.id}>
                  <Link
                    className="text-sm font-semibold text-slate-700"
                    to={menu.url}
                  >
                    {menu.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div>
      <div className="border-t border-slate-300 bg-white">
        <Container className="px-6">
          <div className="py-4 text-center">
            <p className="text-sm text-slate-700">Made with Love by Ito</p>
          </div>
        </Container>
      </div>
    </>
  );
}

const Footer = React.memo(Component);

export default Footer;
