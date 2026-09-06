/*
    - Background image or gradient
    - Dark/light/custom themes & Sidebar colors - done
    - // Video-page background
    - Card border radius
    - Font style and size
    - Accent color
    - Hide Shorts
    - Hide comments
    - Hide recommendations
    - Compact video cards
    - Blur or glassmorphism effects
*/
const STYLE_ID = "yt-skin-theme";
const style = document.createElement("style");
style.id = STYLE_ID
document.head.appendChild(style);

function applyTheme(theme){
    let styles = document.getElementById(STYLE_ID);
    const backgroundStyle = theme.backgroundImage
        ? `
            background-image: url("${theme.backgroundImage}") !important;
            background-size: cover !important;
            background-position: center !important;
            background-repeat: no-repeat !important;
            `
        : `
            background: ${theme.backgroundColor} !important;
            `;
    styles.textContent = `
        html, body, ytd-app, .expand-collapse-button{
            ${backgroundStyle}
            accent-color: ${theme.accentColor} !important;
        }

        ${theme.NavHeaderBgColor ? `
            #frosted-glass, #guide-content.ytd-app, ytd-mini-guide-renderer, #masthead, button.ytSearchboxComponentSearchButton {
                background-color: ${theme.NavHeaderBgColor} !important;
            }
            .yt-simple-endpoint:hover, #chip-shape-container .ytChipShapeActive{
               background-color: ${theme.NavHeaderHoverColor} !important;

            }
            .yt-simple-endpoint .yt-icon, .yt-simple-endpoint .title, #guide-section-title.ytd-guide-section-renderer, #footer a, #copyright, #masthead button.ytSearchboxComponentSearchButton {
                color: ${theme.NavHeaderTextColor} !important;
            }
            #voice-search-button button, .ytd-masthead button, #guide-button button, #guide-icon.ytd-masthead, #masthead .ytSpecIconBadgeShapeHost{
                color: ${theme.NavHeaderTextColor} !important;
            }
            #chip-shape-container .ytChipShapeOnlyTextPadding{
                color: ${theme.NavHeaderTextColor} !important;
                font-weight: normal;
                border: 1px solid #ffffff3b;
                background-color: ${theme.backgroundColor}
            }
        ` : ""}

        ytd-rich-item-renderer, ytd-video-renderer{
            border-radius: ${theme.borderRadius}px !important;
            accent: ${theme.accentColor} !important;
        }
        ${theme.hideShorts ? `
            ytd-reel-shelf-renderer,
            ytd-rich-section-renderer {
                display: none !important;
            }
        ` : ""}
    `;
}

// .ytSpecTouchFeedbackShapeHovered{
//             background-color: ${theme.cardHoverBgColor} !important;
//             border-radius: ${theme.cardHoverBorderRadius}px !important;
//             transition: backgroun-color 0.5s ease-in-out;
//         }
//         .ytSpecTouchFeedbackShapeHovered + a + .ytLockupViewModelMetadata a, .ytSpecTouchFeedbackShapeHovered + a + .ytLockupViewModelMetadata .ytContentMetadataViewModelMetadataRow {
//             color: ${theme.cardHoverTextColor} !important;
//             transition: color 0.3s ease-in-out;
//         }

chrome.storage.local.get(['YoutubeSkin'], (result)=>{
    const theme = result.YoutubeSkin
    if(!theme) return;
    applyTheme(theme)
})

chrome.storage.onChanged.addListener((changes, areaName)=>{
    if(areaName === 'local' && changes.YoutubeSkin){
        const newTheme = changes.YoutubeSkin.newValue
        if (newTheme){
            applyTheme(newTheme)
        }
        else {
            const styles = document.getElementById(STYLE_ID);
            styles.textContent = ''
        }
    }
})

function updateBackground(){

}

function headerTransparency(){

}

function thumbnailCardStyle(){

}

function fontStyles(){

}

function hideShorts(){

}

function hideComments(){

}

function blurEffects(){
    
}

