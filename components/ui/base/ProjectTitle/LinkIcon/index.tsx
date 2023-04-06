import React, { FunctionComponent } from "react";
import Icon, { IconType } from "components/core/Icon";
import Link from "next/link";

interface LinkIconProps {
  icon: IconType;
  href: string;
}

const LinkIcon: FunctionComponent<LinkIconProps> = (props: LinkIconProps) => {
  return (
    <Link href={props.href} target="_blank" rel="noopener">
      <Icon
        size={32}
        type={props.icon}
        className="fill-current text-gray-200 hover:text-white transition-all h-6 md:h-7 lg:h-8"
      />
    </Link>
  );
};

export default LinkIcon;
