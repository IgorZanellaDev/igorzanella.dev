import React, { FunctionComponent } from "react";
import Icon, { IconType } from "components/core/Icon";

interface FooterLinkProps {
  name: string;
  link: string;
  icon: IconType;
}

const FooterLink: FunctionComponent<FooterLinkProps> = (
  props: FooterLinkProps
) => {
  return (
    <a
      key={props.name}
      href={props.link}
      className="cursor-pointer text-base hover:text-white focus:outline-none focus:text-white font-semibold leading-none transition fill-current text-gray-500"
    >
      <span className="sr-only">{props.name}</span>
      <Icon
        type={props.icon}
        size={16}
        className="h-6 w-6"
        aria-hidden="true"
      />
    </a>
  );
};

export default FooterLink;
