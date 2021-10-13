import React, { FunctionComponent } from "react";
import Icon, { IconType } from "components/core/Icon";
import Link from "next/link";

interface LinkIconProps {
  icon: IconType;
  href: string;
}

const LinkIcon: FunctionComponent<LinkIconProps> = (props: LinkIconProps) => {
  return (
    <Link href={props.href}>
      <a target="_blank" rel="noopener">
        <Icon
          size={32}
          type={props.icon}
          className="fill-current text-gray-200 hover:text-white transition-all"
        />
      </a>
    </Link>
  );
};

export default LinkIcon;
