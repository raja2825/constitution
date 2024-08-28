document.addEventListener("DOMContentLoaded", function () {
    const progressListItems = document.querySelectorAll("#progressbar li");
    const progressBar = document.querySelector(".progress-bar");
    let currentStep = 0;

    function updateProgress() {
        const percent = (currentStep / (progressListItems.length - 1)) * 100;
        progressBar.style.width = percent + "%";

        progressListItems.forEach((item, index) => {
            if (index === currentStep) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });
    }

    function showStep(stepIndex) {
        const steps = document.querySelectorAll(".step-container fieldset");
        steps.forEach((step, index) => {
            if (index === stepIndex) {
                step.style.display = "block";
            } else {
                step.style.display = "none";
            }
        });
    }

    function nextStep() {
        if (currentStep === 0) {
            // Validate Step 1
            const category = document.getElementById("category").value;
            if (!category) {
                alert("Please select a category.");
                return;
            }
        } else if (currentStep === 1) {
            // Validate Step 2
            const difficulty = document.getElementById("difficulty").value;
            if (!difficulty) {
                alert("Please select a difficulty.");
                return;
            }
        } else if (currentStep === 2) {
            // Validate Step 3
            const timeLimit = document.getElementById("time-limit").value;
            if (!timeLimit) {
                alert("Please enter a time limit.");
                return;
            }
        }

        if (currentStep < progressListItems.length - 1) {
            currentStep++;
            showStep(currentStep);
            updateProgress();

            // Update Step 4 with selected values
            if (currentStep === 3) {
                const category = document.getElementById("category").value;
                const difficulty = document.getElementById("difficulty").value;
                const timeLimit = document.getElementById("time-limit").value;

                document.getElementById("selected-category").textContent = category === "category1" ? "Below 18" : "Above 18";
                document.getElementById("selected-difficulty").textContent = difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
                document.getElementById("selected-time-limit").textContent = timeLimit;
            }
        }
    }

    function prevStep() {
        if (currentStep > 0) {
            currentStep--;
            showStep(currentStep);
            updateProgress();
        }
    }

    function handleStartGame() {
        const category = document.getElementById("category").value;
        const difficulty = document.getElementById("difficulty").value;
        const timeLimit = document.getElementById("time-limit").value;

        document.getElementById("selected-category").textContent = category === "category1" ? "Below 18" : "Above 18";
        document.getElementById("selected-difficulty").textContent = difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
        document.getElementById("selected-time-limit").textContent = timeLimit;

        let gamePageUrl;

        if (category === "category1") {
            gamePageUrl = "games/games_below/index.html";
        } else if (category === "category2") {
            gamePageUrl = "games/games_above/index.html";
        }

        if (gamePageUrl) {
            window.location.href = gamePageUrl;
        }
    }

    // Initial setup
    showStep(currentStep);
    updateProgress();

    // Event listeners
    document.querySelectorAll(".next-step").forEach(button => {
        button.addEventListener("click", nextStep);
    });

    document.querySelectorAll(".previous-step").forEach(button => {
        button.addEventListener("click", prevStep);
    });

    document.getElementById("start-game").addEventListener("click", handleStartGame);
});
