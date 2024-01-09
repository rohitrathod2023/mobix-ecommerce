const  CheckMarkIcon = (props) => {

 const {color ="#FF2C91", width = "20", height="20" } = props;

    return(
        
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect 
                width={width} 
                height={height}
                rx="10" 
                fill={color}
                />

                <path d="M5 10.8462L7.75 14L15 7" 
                    stroke="white" 
                    stroke-width="2" 
                    stroke-linecap="round"/>
                </svg>
            );

        };

        export default CheckMarkIcon;

