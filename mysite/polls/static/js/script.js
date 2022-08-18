// nav toggle - select buttons and links
const navOpen = document.querySelector("#navOpen") // save the hamburger button element as a variable
const navClose = document.querySelector("#navClose") // save the hamburger button element as a variable
const navbar = document.querySelector("#navbar") // save the navbar element as a variable
const navbarMobile = document.querySelector("#navbarMobile") // save the mobile navbar element as a variable
const content = document.querySelector("#content") // save the content element as a variable
const footer = document.querySelector("#footer") // save the footer element as a variable


// add event listener to hamburger
// AND add event listener to dim the area behind the mobile navbar as it opens
navOpen.addEventListener("click", function() { // when navToggle (the hamburger) button is clicked: ...
    navbarMobile.classList.add("navbar-mobile-opening") // toggle the class of the nav element to be nav-open
    navbarMobile.classList.remove("navbar-mobile-closing") // toggle the class of the nav element to be nav-open

    navOpen.classList.toggle("navbar-open-hidden")

    navbar.classList.add("dimmed")
    content.classList.add("dimmed")
    footer.classList.add("dimmed")
    navbar.classList.remove("undimmed")
    content.classList.remove("undimmed")
    footer.classList.remove("undimmed")
})


// add event listener to close button
// AND add event listener to undim the area behind the mobile navbar as it closes
navClose.addEventListener("click", function() { // when navToggle (the hamburger) button is clicked: ...
    navbarMobile.classList.add("navbar-mobile-closing") // toggle the class of the nav element to be nav-open
    navbarMobile.classList.remove("navbar-mobile-opening") // toggle the class of the nav element to be nav-open
    
    navOpen.classList.toggle("navbar-open-hidden")

    navbar.classList.add("undimmed")
    content.classList.add("undimmed")
    footer.classList.add("undimmed")
    navbar.classList.remove("dimmed")
    content.classList.remove("dimmed")
    footer.classList.remove("dimmed")
})


// Dropdown menu for "Filter Posts" button
let dropdownBtn = document.querySelector("#dropdown-menu-button")
let dropdownMenu = document.querySelector("#dropdown-menu")

    if (dropdownBtn != null) {
    // Add event listener to the "Load more" button
    dropdownBtn.addEventListener("click", function() {
        // Toggle the drop down menu hidden/unhidden
        dropdownMenu.classList.toggle("post-card-hidden")
    })

    // Apply filters based on which dropdown options selected
    let filterAllBtn = document.querySelector("#filter-all")
    let filterPressReleasesBtn = document.querySelector("#filter-press-releases")
    let filterArticlesBtn = document.querySelector("#filter-articles")

    let currentFilter = "filter-all"
    let colPosition = 0 // the next column slot available for a grid item

    // Add event listeners to each of the filter buttons
    filterAllBtn.addEventListener("click", function() {
        loadMoreBtn.classList.remove("post-card-hidden")
        colPosition = 0
        currentFilter = "filter-all"

        // Hide all the posts
        let posts = postsContainer.children
        for (const post of posts) {
            post.classList.add("post-card-hidden")
        }

        // Unhide the first 6 posts of any type
        let unhidden = 0 // the number we have unhidden so far
        for (const post of posts) {
            post.classList.remove("post-card-bordered")

            if (unhidden < initialNumPostsDisplayed) {
                post.classList.remove("post-card-hidden")
                unhidden++

                if (colPosition==0 || colPosition == 1) {
                    post.classList.add("post-card-bordered")
                }
                colPosition = (colPosition + 1) % 3
            }
        }

        // Unhide all li elems in the menu and then hide just the filter-all one
        let dropdownMenu = document.querySelector("#dropdown-menu")
        menuFilters = dropdownMenu.querySelectorAll("li")
        for (const filter of menuFilters) {
            if (filter.id == currentFilter) {
                filter.classList.add("post-card-hidden")
            } else {
                filter.classList.remove("post-card-hidden")
            }
        }

        // Hide all the divs in the menu button and then unhide just the filter-all one
        let dropdownMenuButton = document.querySelector("#dropdown-menu-button")
        menuFilterButtons = dropdownMenuButton.querySelectorAll("div")
        for (const filterButton of menuFilterButtons) {
            if (filterButton.classList.contains(currentFilter)) {
                filterButton.classList.remove("post-card-hidden")
            } else {
                filterButton.classList.add("post-card-hidden")
            }
        }

        // Finally close the filter menu
        dropdownMenu.classList.toggle("post-card-hidden")
    })

    filterPressReleasesBtn.addEventListener("click", function() {
        loadMoreBtn.classList.remove("post-card-hidden")
        colPosition = 0
        currentFilter = "filter-press-releases"

        // Hide all the posts
        let posts = postsContainer.children
        for (const post of posts) {
            post.classList.add("post-card-hidden")
        }

        // Unhide the first 6 filter-press-releases posts
        articlePosts = postsContainer.querySelectorAll(".filter-press-releases")
        let unhidden = 0 // the number we have unhidden so far
        for (const post of articlePosts) {
            post.classList.remove("post-card-bordered")

            if (unhidden < initialNumPostsDisplayed) {
                post.classList.remove("post-card-hidden")
                unhidden++

                if (colPosition==0 || colPosition == 1) {
                    post.classList.add("post-card-bordered")
                }
                colPosition = (colPosition + 1) % 3
            }
        }

        // Unhide all li elems in the menu and then hide just the filter-press-releases one
        let dropdownMenu = document.querySelector("#dropdown-menu")
        menuFilters = dropdownMenu.querySelectorAll("li")
        for (const filter of menuFilters) {
            if (filter.id == currentFilter) {
                filter.classList.add("post-card-hidden")
            } else {
                filter.classList.remove("post-card-hidden")
            }
        }

        // Hide all the divs in the menu button and then unhide just the filter-press-releases one
        let dropdownMenuButton = document.querySelector("#dropdown-menu-button")
        menuFilterButtons = dropdownMenuButton.querySelectorAll("div")
        for (const filterButton of menuFilterButtons) {
            if (filterButton.classList.contains(currentFilter)) {
                filterButton.classList.remove("post-card-hidden")
            } else {
                filterButton.classList.add("post-card-hidden")
            }
        }

        // Finally close the filter menu
        dropdownMenu.classList.toggle("post-card-hidden")
    })

    filterArticlesBtn.addEventListener("click", function() {
        loadMoreBtn.classList.remove("post-card-hidden")
        colPosition = 0
        currentFilter = "filter-articles"

        // Hide all the posts
        let posts = postsContainer.children
        for (const post of posts) {
            post.classList.add("post-card-hidden")
        }

        // Unhide the first 6 filter-article posts
        articlePosts = postsContainer.querySelectorAll(".filter-articles")
        let unhidden = 0 // the number we have unhidden so far
        for (const post of articlePosts) {
            post.classList.remove("post-card-bordered")

            if (unhidden < initialNumPostsDisplayed) {
                post.classList.remove("post-card-hidden")
                unhidden++

                if (colPosition==0 || colPosition == 1) {
                    post.classList.add("post-card-bordered")
                }
                colPosition = (colPosition + 1) % 3
            }
        }

        // Unhide all li elems in the menu and then hide just the filter-articles one
        let dropdownMenu = document.querySelector("#dropdown-menu")
        menuFilters = dropdownMenu.querySelectorAll("li")
        for (const filter of menuFilters) {
            if (filter.id == currentFilter) {
                filter.classList.add("post-card-hidden")
            } else {
                filter.classList.remove("post-card-hidden")
            }
        }

        // Hide all the divs in the menu button and then unhide just the filter-articles one
        let dropdownMenuButton = document.querySelector("#dropdown-menu-button")
        menuFilterButtons = dropdownMenuButton.querySelectorAll("div")
        for (const filterButton of menuFilterButtons) {
            if (filterButton.classList.contains(currentFilter)) {
                filterButton.classList.remove("post-card-hidden")
            } else {
                filterButton.classList.add("post-card-hidden")
            }
        }

        // Finally close the filter menu
        dropdownMenu.classList.toggle("post-card-hidden")
    })


    // News page show more arcicles functionality:
    let loadMoreBtn = document.querySelector("#load-more-btn")
    let postsContainer = document.querySelector("#posts-container")

    // let numberDisplayedPosts = posts.length - hiddenPosts.length; // initial number of posts displayed
    let additionalPostsPerClick = 3 // add 3 posts each time load more is clicked
    let initialNumPostsDisplayed = 6 // start with displaying 6 posts

    // Add event listener to the "Load more" button
    loadMoreBtn.addEventListener("click", function() {
        // Get the list of currently hidden posts
        hiddenPosts = postsContainer.querySelectorAll(".post-card-hidden")
        let unhidden = 0 // the number we have unhidden so far

        // Unhide 3 more posts each time the button is clicked
        for (const post of hiddenPosts) {
            if (unhidden < 3) {
                if (currentFilter == "filter-all") {
                    post.classList.remove("post-card-hidden")
                    unhidden++

                    if (colPosition==0 || colPosition == 1) {
                        post.classList.add("post-card-bordered")
                    }
                    colPosition = (colPosition + 1) % 3

                } else if (post.classList.contains(currentFilter)) {
                    post.classList.remove("post-card-hidden")
                    unhidden++

                    if (colPosition==0 || colPosition == 1) {
                        post.classList.add("post-card-bordered")
                    }
                    colPosition = (colPosition + 1) % 3
                }
            }
        }

        // Re-check the number of the hidden posts now we have unhidden some
        hiddenPosts = postsContainer.querySelectorAll(".post-card-hidden")

        // If we are out of unhidden posts (i.e. all are shown), then hide the load more btn
        loadMoreBtn.classList.add("post-card-hidden")
        for (const post of hiddenPosts) {
            if (currentFilter == "filter-all") {
                loadMoreBtn.classList.remove("post-card-hidden")

            } else if (post.classList.contains(currentFilter)) {            // Hide the show more button
                loadMoreBtn.classList.remove("post-card-hidden")
            }
        }
    });



    // Hide the filter menu on clickoff
    document.addEventListener("click", function(event) {
        if (! (event.target.classList.contains("dropdown-menu-button") || event.target.parentNode.classList.contains("dropdown-menu-button"))) {    
            // If we have clicked anywhere except dropdown button itself, try and close the menu

            let menu_closed = dropdownMenu.classList.contains("post-card-hidden");
            if (menu_closed === false) {      
                // If the menu is not already closed, ten close it    
                dropdownMenu.classList.add("post-card-hidden")
            }
        }
    });

    // Rework the lines if we change in/out of mobile size
    function updateLines() {
        let desktop_mode = window.matchMedia("(min-width: 1300px)").matches

        // Find all the non-hidden posts of the current filter
        if (currentFilter == "filter-all") {
            articlePosts = postsContainer.querySelectorAll(".post-card")
        } else {
            articlePosts = postsContainer.querySelectorAll(".".concat(currentFilter))
        }

        colPosition = 0
        for (const post of articlePosts) {
            if (!(post.classList.contains("post-card-hidden"))) {

                post.classList.remove("post-card-bordered")

                if (desktop_mode) {
                    if (colPosition==0 || colPosition == 1) {
                        post.classList.add("post-card-bordered")
                    }
                } else {
                    post.classList.add("post-card-bordered") 
                }

                colPosition = (colPosition + 1) % 3
            }
        }
    }

    // Update the lnes on first load and any time we change the screen size
    updateLines()
    window.onresize = updateLines;
}


// Add a flippling effect to the user testimonials
let card1 = document.querySelector("#test-card-1")
let card2 = document.querySelector("#test-card-2")
let card3 = document.querySelector("#test-card-3")

if (card1 != null) {
    card1.addEventListener("click", function() {
        card1.classList.toggle("card-flipped")
        card1.classList.toggle("card-unflipped")
    });
    
    card2.addEventListener("click", function() {
        card2.classList.toggle("card-flipped")
        card2.classList.toggle("card-unflipped")
    });
    
    card3.addEventListener("click", function() {
        card3.classList.toggle("card-flipped")
        card3.classList.toggle("card-unflipped")
    });    
}

// Highlight the current page in the navbar/mobile nav to help the user understand where they are
let title = document.title.split("|")[0].trim()
let navLinks = document.querySelectorAll("nav a")

for (let navLink of navLinks) {
    if (navLink.innerHTML === title) {
        navLink.classList.add("navbar-underlined")
    }
}


// Sign Up Form Submission
if (document.title === "Sign Up | Reefly") {
    const form = document.querySelector("form")
    const password = document.querySelector("#password")
    const passwordConfirm = document.querySelector("#passwordConfirm")
    const invalidMsg = document.querySelector(".invalid-msg")

    function signupSubmit(event) {
        // Check that the two passwords match and then...
        if (password.value === passwordConfirm.value) {
            // Redirect the user to a "Success! You're almost almost ready to go, just click the link we've sent to your email to verify your account"
            window.location.href = "success.html";
            event.preventDefault(); // stop the form submitting
        } else {
            // Show error message and prevent form submit
            password.classList.add("field-textbox-invalid")
            passwordConfirm.classList.add("field-textbox-invalid")
            invalidMsg.classList.remove("invalid-msg-hidden")
            event.preventDefault(); // stop the form submitting
        }
    }
    form.addEventListener('submit', signupSubmit);
}


// Log In Form Submission
if (document.title === "Log In | Reefly") {
    const form = document.querySelector("form")
    const email = document.querySelector("#email")
    const password = document.querySelector("#password")
    const invalidMsg = document.querySelector(".invalid-msg")

    function loginSubmit(event) {
        // Simply keep all of the data held in the form and say "Incorrect username or password"
        email.classList.add("field-textbox-invalid")
        password.classList.add("field-textbox-invalid")
        invalidMsg.classList.remove("invalid-msg-hidden")

        console.log(`Error! Incorrect email or password`)
        event.preventDefault(); // stop the form submitting
    }
    form.addEventListener('submit', loginSubmit);
}