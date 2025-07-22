const template = document.createElement("template");
template.innerHTML = `
      <header class="yt_header">

        <!--Left header div-->
        <div class="yt_header_left">
            <img src="hamburger_icon.svg" alt="Menu" height="24" width="24" class="hamburger_icon">
            <img src="youtube_logo.png" alt="YouTube Logo" class="yt_logo">
        </div>
        <!--Center header div-->
        <div class="yt_header_center">
            <input type="text" class="searchbar" placeholder="Search">
            <button class="search_btn">
                <img src="search_icon.svg" alt="Search Icon" height="24" width="24" />
            </button>
            <button class="mic_btn">
                <img src="mic_icon.svg" alt="Mic Icon" height="24" width="24" />
            </button>
        </div>

        </div>
        <!--Right header div-->
        <div class="yt_header_right">
            <button class="More_icon">
                <img src="ellipsis-vertical-solid.svg" alt="More Icon" height="20" width="20" />
            </button>
            <button class="signin_btn">
                <img src="user.svg" alt="User Icon" height="24" width="24" style="margin-right:8px;" />
                <span>Sign in</span>
            </button>
        </div>
    </header>`;
document.body.appendChild(template.content);
