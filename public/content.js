/*
    - Background image or gradient - Done
    - Dark/light/custom themes & Sidebar colors - Done
    - // Video-page background
    - Card border radius
    - Font style and size
    - Accent color
    - Hide Shorts - Done
    - Hide comments - Done
    - Compact video cards
    - Blur or glassmorphism effects
*/
const STYLE_ID = "yt-skin-theme";
let currentTheme = null;
console.log(EFFECT_ID)
const style = document.createElement("style");
style.id = STYLE_ID
document.head.appendChild(style);

function applyTheme(theme) {
    let styles = document.getElementById(STYLE_ID);
    styles.textContent = getThemeStyles(theme)
    applyContentSettings(theme)

}

function applyContentSettings(theme) {
    if (!theme) return;

    if (theme.hideShorts) displayShorts("none");
    else displayShorts("");

    if (theme.hideComments) displayComments("none");
    else displayComments("")
    // Recommendations later
}

function displayShorts(value) {
    const isShorts = document.querySelectorAll("ytd-rich-shelf-renderer[is-shorts]");
    isShorts.forEach((element) => {
        element.style.display = value;
    });
}

function displayComments(value) {
    const commentsSection = document.querySelectorAll("ytd-comments");
    commentsSection.forEach((element) => {
        element.style.display = value;
    });
}

function startContentObserver() {
    if (!document.body) return;
    const observer = new MutationObserver(() => {
        if (!currentTheme) return;
        applyContentSettings(currentTheme);
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });
}


function getThemeStyles(theme) {
    const backgroundStyle = theme.backgroundImage
        ? `
            background-image: url("${theme.backgroundImage}") !important;
            background-size: contain !important;
            background-position: center !important;
            background-repeat: repeat !important;
            `
        : `
            background: ${theme.backgroundColor} !important;
            `;
    const themeStyles = `
        html, body, ytd-app{
            ${backgroundStyle}
            accent-color: ${theme.accentColor} !important;
        }
        #dismissible .button-container{
            background-color: transparent !important;
        }
        #dismissible .ytSpecButtonShapeNextMono.ytSpecButtonShapeNextOutline{
            background-color: #fff !important;
        }
        ${theme.backgroundImage ? `
            #page-manager.ytd-app{
                background-color: #ffffffb3 !important;
            }
        ` : ""}

        ${theme.NavHeaderBgColor ? `
            #frosted-glass, #guide-content.ytd-app, ytd-mini-guide-renderer, #masthead, button.ytSearchboxComponentSearchButton {
                background-color: ${theme.NavHeaderBgColor} !important;
            }
            tp-yt-app-drawer .yt-simple-endpoint:hover, #chip-shape-container .ytChipShapeActive{
               background-color: ${theme.NavHeaderHoverColor} !important;
            }
            .yt-simple-endpoint .yt-icon, .yt-simple-endpoint .title, #guide-section-title.ytd-guide-section-renderer, #footer a, #copyright, #masthead button.ytSearchboxComponentSearchButton{
                color: ${theme.NavHeaderTextColor} !important;
                fill:  ${theme.NavHeaderTextColor} !important;
            }
            #voice-search-button button, .ytd-masthead button, #guide-button button, #guide-icon.ytd-masthead, #masthead .ytSpecIconBadgeShapeHost{
                color: ${theme.NavHeaderTextColor} !important;
            }
            #chip-shape-container .ytChipShapeOnlyTextPadding{
                color: ${theme.NavHeaderTextColor} !important;
                font-weight: normal;
                border: 1px solid #ffffff3b;
                background: ${theme.NavHeaderBgColor};
            }
            ytd-menu-popup-renderer{
                background: ${theme.backgroundColor} !important;
            }
            ytd-menu-service-item-renderer[system-icons] .ytIconWrapperHost.ytd-menu-service-item-renderer, ytd-menu-service-item-renderer[system-icons] yt-icon.ytd-menu-service-item-renderer, .ytIconWrapperHost.ytd-menu-service-item-download-renderer, yt-icon.ytd-menu-service-item-download-renderer, .ytd-menu-service-item-renderer yt-formatted-string{
                color: ${theme.NavHeaderBgColor} !important;
            }
            reel-action-bar-view-model .ytSpecButtonShapeNextMono.ytSpecButtonShapeNextTonal, reel-action-bar-view-model .ytSpecButtonShapeWithLabelLabel, #navigation-button-down .ytSpecButtonShapeNextMono.ytSpecButtonShapeNextTonal, #navigation-button-up .ytSpecButtonShapeNextMono.ytSpecButtonShapeNextTonal {
                color: ${theme.NavHeaderBgColor} !important;
            }
        ` : ""}
        
        ytd-rich-item-renderer, ytd-video-renderer{
            border-radius: ${theme.borderRadius}px !important;
            accent: ${theme.accentColor} !important;
        }
        #actions-inner .ytSpecButtonShapeNextMono.ytSpecButtonShapeNextTonal, #actions-inner .ytSpecTouchFeedbackShapeTouchResponse .ytSpecTouchFeedbackShapeFill{
            color: ${theme.NavHeaderTextColor} !important;
            background-color: ${theme.NavHeaderBgColor} !important;
        }
        
        yt-subscribe-button-view-model .ytSpecButtonShapeNextMono.ytSpecButtonShapeNextFilled, ytd-subscribe-button-renderer .ytSpecButtonShapeNextMono.ytSpecButtonShapeNextFilled{
            background: ${theme.NavHeaderBgColor} !important;
            color: ${theme.NavHeaderTextColor} !important;
        }
    `;

    return themeStyles;
}

function applyBackgroundEffect(theme) {
    removeBackgroundEffect();
    if (theme.backgroundEffect === "rain") {
        createRainEffect();
    }
}

function removeBackgroundEffect() {
    document.getElementById(EFFECT_ID)?.remove();
}

function loadTheme() {
    chrome.storage.local.get(["YoutubeSkin"], (result) => {
        currentTheme = result.YoutubeSkin || null;
        if (!currentTheme) return;
        applyTheme(currentTheme);
        applyContentSettings(currentTheme);
        applyBackgroundEffect(currentTheme);
    });
}

chrome.storage.onChanged.addListener((changes, areaName) => {
    if (areaName === 'local' && changes.YoutubeSkin) {
        currentTheme = changes.YoutubeSkin.newValue
        if (currentTheme) {
            applyTheme(currentTheme);
            applyContentSettings(currentTheme);
            applyBackgroundEffect(currentTheme);
        }
        else {
            const styles = document.getElementById(STYLE_ID);
            styles.textContent = ''
            removeBackgroundEffect()
        }
    }
});

loadTheme();
startContentObserver();

