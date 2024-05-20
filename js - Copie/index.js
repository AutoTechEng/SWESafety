
   // TABS // 
   
    // MAIN TABS // 

    function openTab(event, tabName) {

        // Get all elements with class="tabPanel" and hide them
        let i, tabPanel, buttonContainer;
        tabPanel = document.getElementsByClassName("tabPanel");
        for (i = 0; i < tabPanel.length; i++) {
            tabPanel[i].style.display = "none";
        }

        // Get all elements with class="button" and remove the class "active"
        buttonContainer = document.getElementsByClassName("buttonContainer");
        for (i = 0; i < buttonContainer.length; i++) {
            buttonContainer[i].className = buttonContainer[i].className.replace(" active", "");
        }

        // Code to remove the "active" class from the previously active button
        let activeButtons = document.getElementsByClassName("active");
        for (i = 0; i < activeButtons.length; i++) {
            activeButtons[i].classList.remove("active");
        }

        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(tabName).style.display = "block";
        event.currentTarget.className += " active";
    }