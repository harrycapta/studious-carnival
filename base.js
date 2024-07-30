;(function () {
    // Dark mode toggle
    // Look specifically for 'false' so we don't break existing sites that don't have this attribute
    const showDarkModeSwitch =
      document.body.getAttribute('data-dark-mode-toggle') !== 'false'
  
    if (showDarkModeSwitch) {
      const themeButtonContents = `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
        class="theme-toggle__icon theme-toggle__icon--light"
        style="width: 1.5rem; height: 1.5rem;"
      >
        <path
          stroke-linecap="round" stroke-linejoin="round"
          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25
            12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"/>
      </svg>
  
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
        class="theme-toggle__icon theme-toggle__icon--dark"
        style="width: 1.5rem; height: 1.5rem;"
      >
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003
            11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"/>
      </svg>
    `
      const themeButton = document.createElement('button')
      themeButton.classList.add('theme-toggle')
      themeButton.setAttribute('aria-label', 'Toggle theme')
      themeButton.innerHTML = themeButtonContents
      document.body.prepend(themeButton)
  
      const osTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      document.body.dataset.theme = localStorage.getItem('theme') ?? osTheme
  
      themeButton.addEventListener('click', () => {
        if (
          document.body.dataset.theme === 'dark' ||
          (!localStorage.getItem('theme') && osTheme === 'dark')
        ) {
          document.body.dataset.theme = 'light'
          localStorage.setItem('theme', 'light')
        } else {
          document.body.dataset.theme = 'dark'
          localStorage.setItem('theme', 'dark')
        }
      })
    }
  
    // Mobile menu
    const hamburgerButton = document.querySelector('.navbar__hamburger button')
    const hamburgerIcon = document.querySelector(
      '.navbar__mobile-dropdown-open-icon'
    )
    const closeIcon = document.querySelector(
      '.navbar__mobile-dropdown-close-icon'
    )
    const mobileDropdown = document.querySelector('.navbar__mobile-dropdown')
  
    if (hamburgerButton && hamburgerIcon && closeIcon && mobileDropdown) {
      hamburgerButton.onclick = () => {
        const isOpen =
          hamburgerButton.getAttribute('aria-expanded') === 'true' || false
        hamburgerButton.setAttribute('aria-expanded', !isOpen)
        mobileDropdown.style.gridTemplateRows = isOpen ? '0fr' : '1fr'
        mobileDropdown.style.visibility = isOpen ? 'hidden' : 'visible'
        hamburgerIcon.style.display = isOpen ? 'block' : 'none'
        closeIcon.style.display = isOpen ? 'none' : 'block'
      }
    }
  
    // Ensure CK Top Bar height is set correctly for browsers that don't support CSS :has() selector
    const ckBar = document.querySelector('#coinkite-banner')
    if (ckBar) {
      document.documentElement.style.setProperty('--ck-top-bar-height', '35px')
    }
  })()