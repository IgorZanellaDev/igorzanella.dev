import React, { FunctionComponent } from "react";
import Image from "next/image";

export type IconType =
  | "bestondesk"
  | "customerly"
  | "database"
  | "display-grid"
  | "github"
  | "globe"
  | "google"
  | "linkedin"
  | "play"
  | "plus"
  | "racing-line-motorsport"
  | "terminal"
  | "twitter";

interface IconProps {
  size: number;
  type: IconType;
}

type Props = IconProps & React.SVGProps<SVGSVGElement>;

const Icon: FunctionComponent<Props> = (props: Props) => {
  switch (props.type) {
    case "bestondesk":
      return (
        <svg
          width={props.size}
          height={props.size}
          className={props.className}
          version="1.1"
          viewBox="0 0 1333.3 1333.3"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="linearGradient33"
              x2="1"
              gradientTransform="matrix(750.95 -661.07 -661.07 -750.95 159.28 799.11)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5468c9" offset="0" />
              <stop stopColor="#1fc5a8" offset="1" />
            </linearGradient>
            <clipPath id="clipPath43">
              <path d="m0 1e3h1e3v-1e3h-1e3z" />
            </clipPath>
            <clipPath id="clipPath7841">
              <circle
                transform="scale(1,-1)"
                cx="320.63"
                cy="-499.38"
                r="232.78"
                opacity=".88"
                strokeWidth=".4507"
              />
            </clipPath>
            <clipPath id="clipPath7845">
              <ellipse
                transform="scale(1,-1)"
                cx="500"
                cy="-499.81"
                rx="471.32"
                ry="471.14"
                opacity=".88"
                strokeWidth=".91238"
              />
            </clipPath>
          </defs>
          <g transform="matrix(1.3333 0 0 -1.3333 0 1333.3)">
            <g transform="translate(-1.9903 1.9902)">
              <g transform="matrix(1.0421 0 0 1.0425 -19.053 -23.034)">
                <g clipPath="url(#clipPath7845)">
                  <g>
                    <g>
                      <path
                        d="m0 0h1e3v999.62h-1e3z"
                        fill="url(#linearGradient33)"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g
                transform="matrix(2.11 0 0 2.11 -174.53 -555.67)"
                clipPath="url(#clipPath7841)"
              >
                <g clipPath="url(#clipPath43)">
                  <g transform="translate(408.98 521.81)">
                    <path
                      d="m0 0 81.928-180.87c0.281-0.658 0.927-1.085 1.643-1.085l336.44-1.613c1.724 0 2.449 2.2 1.063 3.225l-348.24 266.19c-0.693 0.513-1.653 0.458-2.283-0.131l-70.125-83.709c-0.549-0.514-0.718-1.316-0.423-2.008"
                      fill="#ffd364"
                    />
                  </g>
                  <g transform="translate(357.21 631.02)">
                    <path
                      d="m0 0c-26.129-30.419-27.059-73.965-4.721-105.18 6.201-8.666 18.858-9.283 25.802-1.199l87.26 101.59c6.947 8.087 4.426 20.513-5.081 25.336-34.231 17.367-77.133 9.877-103.26-20.54m-183.72-273.61c0-10.703 8.677-19.38 19.38-19.38h126.7c10.703 0 19.38 8.677 19.38 19.38s-8.677 19.38-19.38 19.38h-126.7c-10.703 0-19.38-8.677-19.38-19.38m41.896 178.47c6.45-8.542 18.603-10.237 27.144-3.787l81.358 61.438c8.542 6.45 10.237 18.603 3.787 27.145-6.45 8.541-18.603 10.236-27.144 3.786l-81.359-61.438c-8.541-6.45-10.236-18.603-3.786-27.144m-11.79-11.238 76.351-101.11c6.45-8.542 4.755-20.695-3.787-27.145-8.541-6.45-20.694-4.755-27.144 3.787l-76.351 101.11c-6.45 8.541-4.755 20.694 3.787 27.144 8.541 6.45 20.694 4.755 27.144-3.786"
                      fill="#fff"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
      );
    case "customerly":
      return (
        <svg
          width={props.size}
          height={props.size}
          className={props.className}
          viewBox="0 0 762 780"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="78.607009%"
              y1="110.495563%"
              x2="14.5671015%"
              y2="-23.7471956%"
              id="linearGradient-1"
            >
              <stop stopColor="#2589FF" offset="0%" />
              <stop stopColor="#78DAFF" offset="100%" />
            </linearGradient>
          </defs>
          <g
            id="blue_fill_notification"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <ellipse
              id="Oval-4"
              fill="#FFFFFF"
              cx="403"
              cy="422.5"
              rx="276"
              ry="268.5"
            />
            <g
              id="Rectangle-6"
              transform="translate(63.000000, 81.000000)"
              fill="url(#linearGradient-1)"
            >
              <path
                d="M35.3017134,455.850434 C34.4343647,454.421104 33.530941,452.989393 32.5903487,451.555553 L33.5267258,452.414859 C12.0778512,410.256577 0,362.628205 0,312.208332 C0,139.780431 141.254161,0 315.5,0 C489.745839,0 631,139.780431 631,312.208332 C631,484.636232 489.745839,624.416663 315.5,624.416663 C271.287927,624.416663 229.199887,615.417476 191.004414,599.169183 C-93.2909361,691.485378 102.192195,590.389124 41.0183634,466.259001 C39.0485389,462.829486 37.1424573,459.359437 35.3017134,455.850434 Z M222.231719,207.757256 C206.5465,207.757256 193.831117,220.472638 193.831117,236.157858 C193.831117,251.843077 206.5465,264.558459 222.231719,264.558459 L374.237119,264.558459 C389.922338,264.558459 402.63772,251.843077 402.63772,236.157858 C402.63772,220.472638 389.922338,207.757256 374.237119,207.757256 L222.231719,207.757256 Z M222.231719,372.416924 C206.5465,372.416924 193.831117,385.132306 193.831117,400.817526 C193.831117,416.502745 206.5465,429.218127 222.231719,429.218127 L374.237119,429.218127 C389.922338,429.218127 402.63772,416.502745 402.63772,400.817526 C402.63772,385.132306 389.922338,372.416924 374.237119,372.416924 L222.231719,372.416924 Z M253.584062,290.08709 C237.898842,290.08709 225.18346,302.802472 225.18346,318.487692 C225.18346,334.172911 237.898842,346.888293 253.584062,346.888293 L405.589462,346.888293 C421.274681,346.888293 433.990063,334.172911 433.990063,318.487692 C433.990063,302.802472 421.274681,290.08709 405.589462,290.08709 L253.584062,290.08709 Z"
                id="Mask"
              />
            </g>
            <g id="Group-2" transform="translate(495.000000, 64.000000)">
              <g
                id="Group"
                transform="translate(5.000000, 20.000000)"
                fill="#FF2E2E"
              >
                <rect
                  id="Rectangle-7"
                  x="0"
                  y="0"
                  width="195"
                  height="195"
                  rx="97.5"
                />
              </g>
              <path
                d="M80.6083984,98.0917969 L105.303711,76.7382812 L113.743164,76.7382812 L113.743164,152.126953 L130.055664,152.126953 L130.055664,160 L85.5361328,160 L85.5361328,152.126953 L103.37793,152.126953 L103.37793,95.4296875 C103.37793,93.7304603 103.43457,92.0123785 103.547852,90.2753906 L88.7080078,102.962891 C88.3304018,103.264975 87.9433614,103.491536 87.546875,103.642578 C87.1503886,103.793621 86.7822283,103.869141 86.4423828,103.869141 C85.8759737,103.869141 85.3567732,103.73698 84.8847656,103.472656 C84.4127581,103.208332 84.0634777,102.906252 83.8369141,102.566406 L80.6083984,98.0917969 Z"
                id="1"
                fill="#FFFFFF"
                fillRule="nonzero"
              />
            </g>
          </g>
        </svg>
      );
    case "database":
      return (
        <svg
          width={props.size}
          height={props.size}
          className={props.className}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 9V7H7V9H5Z" fill="currentColor" />
          <path d="M9 9H19V7H9V9Z" fill="currentColor" />
          <path d="M5 15V17H7V15H5Z" fill="currentColor" />
          <path d="M19 17H9V15H19V17Z" fill="currentColor" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V6ZM4 5H20C20.5523 5 21 5.44772 21 6V11H3V6C3 5.44772 3.44772 5 4 5ZM3 13V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V13H3Z"
            fill="currentColor"
          />
        </svg>
      );
    case "display-grid":
      return (
        <svg
          width={props.size}
          height={props.size}
          className={props.className}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7 7V11H11V7H7Z" fill="currentColor" />
          <path d="M13 7H17V11H13V7Z" fill="currentColor" />
          <path d="M13 13V17H17V13H13Z" fill="currentColor" />
          <path d="M7 13H11V17H7V13Z" fill="currentColor" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 3H21V21H3V3ZM5 5V19H19V5H5Z"
            fill="currentColor"
          />
        </svg>
      );
    case "github":
      return (
        <svg
          width={props.size}
          height={props.size}
          className={props.className}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="inherit"
            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
          />
        </svg>
      );
    case "globe":
      return (
        <svg
          width={props.size}
          height={props.size}
          className={props.className}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM14.8055 18.4151C17.1228 17.4003 18.7847 15.1667 18.9806 12.525C18.1577 12.9738 17.12 13.3418 15.9371 13.598C15.7882 15.4676 15.3827 17.1371 14.8055 18.4151ZM9.1945 5.58487C7.24725 6.43766 5.76275 8.15106 5.22208 10.244C5.4537 10.4638 5.84813 10.7341 6.44832 11.0008C6.89715 11.2003 7.42053 11.3798 8.00537 11.5297C8.05853 9.20582 8.50349 7.11489 9.1945 5.58487ZM10.1006 13.9108C10.2573 15.3675 10.5852 16.6202 10.9992 17.5517C11.2932 18.2133 11.5916 18.6248 11.8218 18.8439C11.9037 18.9219 11.9629 18.9634 12 18.9848C12.0371 18.9634 12.0963 18.9219 12.1782 18.8439C12.4084 18.6248 12.7068 18.2133 13.0008 17.5517C13.4148 16.6202 13.7427 15.3675 13.8994 13.9108C13.2871 13.9692 12.6516 14 12 14C11.3484 14 10.7129 13.9692 10.1006 13.9108ZM8.06286 13.598C8.21176 15.4676 8.61729 17.1371 9.1945 18.4151C6.8772 17.4003 5.21525 15.1666 5.01939 12.525C5.84231 12.9738 6.88001 13.3418 8.06286 13.598ZM13.9997 11.8896C13.369 11.9609 12.6993 12 12 12C11.3008 12 10.631 11.9609 10.0003 11.8896C10.0135 9.66408 10.4229 7.74504 10.9992 6.44832C11.2932 5.78673 11.5916 5.37516 11.8218 5.15605C11.9037 5.07812 11.9629 5.03659 12 5.01516C12.0371 5.03659 12.0963 5.07812 12.1782 5.15605C12.4084 5.37516 12.7068 5.78673 13.0008 6.44832C13.5771 7.74504 13.9865 9.66408 13.9997 11.8896ZM15.9946 11.5297C15.9415 9.20582 15.4965 7.11489 14.8055 5.58487C16.7528 6.43766 18.2373 8.15107 18.7779 10.244C18.5463 10.4638 18.1519 10.7341 17.5517 11.0008C17.1029 11.2003 16.5795 11.3798 15.9946 11.5297Z"
            fill="currentColor"
          />
        </svg>
      );
    case "google":
      return (
        <svg
          width={props.size}
          height={props.size}
          className={props.className}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 12C6 15.3137 8.68629 18 12 18C14.6124 18 16.8349 16.3304 17.6586 14H12V10H21.8047V14H21.8C20.8734 18.5645 16.8379 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C15.445 2 18.4831 3.742 20.2815 6.39318L17.0039 8.68815C15.9296 7.06812 14.0895 6 12 6C8.68629 6 6 8.68629 6 12Z"
            fill="currentColor"
          />
        </svg>
      );
    case "linkedin":
      return (
        <svg
          width={props.size}
          height={props.size}
          className={props.className}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            fill="inherit"
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
          />
        </svg>
      );
    case "play":
      return (
        <svg
          width={props.size}
          height={props.size}
          className={props.className}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3ZM5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5Z"
            fill="currentColor"
          />
          <path d="M16 12L10 16.3301V7.66987L16 12Z" fill="currentColor" />
        </svg>
      );
    case "plus":
      return (
        <svg
          width={props.size}
          height={props.size}
          className={props.className}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
        </svg>
      );
    case "racing-line-motorsport":
      return (
        <Image
          src="/icons/rlm.png"
          width={props.size}
          height={props.size}
          className={props.className}
        />
      );
    case "terminal":
      return (
        <svg
          width={props.size}
          height={props.size}
          className={props.className}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.0333 14.8284L6.44751 16.2426L10.6902 12L6.44751 7.75733L5.0333 9.17155L7.86172 12L5.0333 14.8284Z"
            fill="currentColor"
          />
          <path d="M15 14H11V16H15V14Z" fill="currentColor" />
          <path
            d="M2 2C0.895431 2 0 2.89543 0 4V20C0 21.1046 0.89543 22 2 22H22C23.1046 22 24 21.1046 24 20V4C24 2.89543 23.1046 2 22 2H2ZM22 4H2L2 20H22V4Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      );
    case "twitter":
      return (
        <svg
          width={props.size}
          height={props.size}
          className={props.className}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="inherit"
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
          />
        </svg>
      );
  }
};

export default Icon;
