import React from "react";

const OffersIcon = (props) => {
    const {color = "white", width = "22", height = "22"} = props;
        return(
                <svg width={width} 
                height={height}
                viewBox="0 0 22 22" 
                fill="none"     
                >
                 <path 
                 fillrrule="evenodd" 
                 cliprrule="evenodd" d="M21.1158 8.63996L20.3041 7.68898C20.0722 7.41065 19.933 7.08593 19.9099 6.73801L19.8171 5.4855C19.6779 3.69953 18.2864 2.30785 16.5007 2.16869L15.2484 2.07591C14.9005 2.05271 14.5526 1.91355 14.2975 1.6816L13.3467 0.869794C11.9784 -0.289931 10.0071 -0.289931 8.63881 0.869794L7.68796 1.6816C7.40966 1.91355 7.08498 2.05271 6.73711 2.07591L5.48478 2.16869C3.69903 2.30785 2.30755 3.69953 2.1684 5.4855L2.07563 6.73801C2.05244 7.08593 1.91329 7.43384 1.68138 7.68898L0.869679 8.63996C-0.289893 10.0084 -0.289893 11.98 0.869679 13.3484L1.68138 14.2994C1.91329 14.5778 2.05244 14.9025 2.07563 15.2504L2.1684 16.5029C2.30755 18.2889 3.69903 19.6805 5.48478 19.8197L6.73711 19.9125C7.08498 19.9357 7.43286 20.0749 7.68796 20.3068L8.63881 21.1186C9.31136 21.6985 10.1463 22 10.9811 22C11.816 22 12.6509 21.6985 13.3235 21.1186L14.2743 20.3068C14.5526 20.0749 14.8773 19.9357 15.2252 19.9125L16.4775 19.8197C18.2633 19.6805 19.6547 18.2889 19.7939 16.5029L19.8867 15.2504C19.9099 14.9025 20.049 14.5546 20.2809 14.2994L21.0926 13.3484C22.2986 11.98 22.2986 9.98524 21.1158 8.63996ZM19.6316 12.0727L18.8199 13.0237C18.3096 13.6036 18.0313 14.3226 17.9618 15.088L17.869 16.3405C17.7994 17.1755 17.1501 17.8018 16.3384 17.8714L15.086 17.9642C14.3207 18.0337 13.6018 18.3121 13.022 18.8224L12.0711 19.6342C11.445 20.1676 10.5173 20.1676 9.89115 19.6342L8.9403 18.8224C8.36051 18.3121 7.64158 18.0337 6.87626 17.9642L5.62392 17.8714C4.78903 17.8018 4.16286 17.1523 4.09329 16.3405L4.00052 15.088C3.93095 14.3226 3.65265 13.6036 3.14244 13.0237L2.33074 12.0727C1.79734 11.4465 1.79734 10.5187 2.33074 9.89246L3.14244 8.94149C3.65265 8.36162 3.93095 7.64259 4.00052 6.87717L4.09329 5.62467C4.16286 4.78967 4.81222 4.16342 5.62392 4.09383L6.87626 4.00105C7.64158 3.93147 8.36051 3.65314 8.9403 3.14286L9.89115 2.33105C10.2158 2.05271 10.5869 1.93674 10.9811 1.93674C11.3754 1.93674 11.7465 2.07591 12.0711 2.33105L13.022 3.14286C13.6018 3.65314 14.3207 3.93147 15.086 4.00105L16.3384 4.09383C17.1733 4.16342 17.7994 4.81286 17.869 5.62467L17.9618 6.87717C18.0313 7.64259 18.3096 8.36162 18.8199 8.94149L19.6316 9.89246C20.1881 10.5187 20.1881 11.4465 19.6316 12.0727ZM13.6945 6.90037C14.0656 6.52926 14.6918 6.52926 15.0628 6.90037C15.4571 7.27148 15.4571 7.89773 15.086 8.26885L8.29094 15.0648C8.08222 15.2504 7.8503 15.3432 7.5952 15.3432C7.34009 15.3432 7.08498 15.2504 6.89945 15.0648C6.52839 14.6937 6.52839 14.0675 6.89945 13.6964L13.6945 6.90037ZM9.4737 7.82815C9.4737 8.73766 8.7365 9.47496 7.82711 9.47496C6.91772 9.47496 6.18052 8.73766 6.18052 7.82815C6.18052 6.91864 6.91772 6.18134 7.82711 6.18134C8.7365 6.18134 9.4737 6.91864 9.4737 7.82815ZM14.1352 15.7839C15.0446 15.7839 15.7818 15.0466 15.7818 14.1371C15.7818 13.2275 15.0446 12.4902 14.1352 12.4902C13.2258 12.4902 12.4886 13.2275 12.4886 14.1371C12.4886 15.0466 13.2258 15.7839 14.1352 15.7839Z" 
                 fill={color}
                 />
                </svg>

        );

};

export default OffersIcon;