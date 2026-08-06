// =========================================
// EduVault Dashboard JavaScript
// =========================================

// Wait until page loads
document.addEventListener("DOMContentLoaded", function () {

    // ===============================
    // Counter Animation
    // ===============================

    const counters = document.querySelectorAll(".card h1");

    counters.forEach(counter => {

        const text = counter.innerText;

        const target = Number(text.replace(/[₹,]/g, ""));

        if (isNaN(target)) return;

        let count = 0;

        const speed = target / 80;

        function updateCounter() {

            count += speed;

            if (count < target) {

                counter.innerText = "₹" + Math.floor(count).toLocaleString();

                requestAnimationFrame(updateCounter);

            }

            else {

                counter.innerText = "₹" + target.toLocaleString();

            }

        }

        updateCounter();

    });

    // ===============================
    // Expense Chart
    // ===============================

    const expenseChart = document.getElementById("expenseChart");

    if (expenseChart) {

        new Chart(expenseChart, {

            type: "bar",

            data: {

                labels: [

                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun"

                ],

                datasets: [{

                    label: "Expenses",

                    data: [

                        12000,
                        18000,
                        15000,
                        22000,
                        16000,
                        20000

                    ],

                    backgroundColor: [

                        "#2563EB",
                        "#3B82F6",
                        "#4F46E5",
                        "#60A5FA",
                        "#2563EB",
                        "#3B82F6"

                    ],

                    borderRadius: 10

                }]

            },

            options: {

                responsive: true,

                plugins: {

                    legend: {

                        display: false

                    }

                }

            }

        });

    }

    // ===============================
    // Fee Payment Chart
    // ===============================

    const paymentChart = document.getElementById("paymentChart");

    if (paymentChart) {

        new Chart(paymentChart, {

            type: "doughnut",

            data: {

                labels: [

                    "Paid",

                    "Pending"

                ],

                datasets: [{

                    data: [

                        75,

                        25

                    ],

                    backgroundColor: [

                        "#22C55E",

                        "#EF4444"

                    ]

                }]

            }

        });

    }

});

// =========================================
// Dark Mode
// =========================================

const darkButton = document.querySelector(".dark-btn");

if (darkButton) {

    darkButton.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            darkButton.innerHTML =

            '<i class="fa-solid fa-sun"></i>';

        }

        else {

            darkButton.innerHTML =

            '<i class="fa-solid fa-moon"></i>';

        }

    });

}

// =========================================
// Search Function
// =========================================

const searchInput = document.querySelector(".search input");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        const sidebarItems = document.querySelectorAll(".sidebar li");

        sidebarItems.forEach(item => {

            const text = item.innerText.toLowerCase();

            if (text.includes(value)) {

                item.style.display = "flex";

            }

            else {

                item.style.display = "none";

            }

        });

    });

}

// =========================================
// Sidebar Active
// =========================================

const menuItems = document.querySelectorAll(".sidebar li");

menuItems.forEach(item => {

    item.addEventListener("click", () => {

        menuItems.forEach(i =>

            i.classList.remove("active"));

        item.classList.add("active");

    });

});

// =========================================
// Logout
// =========================================

const logout = document.querySelector(".logout");

if (logout) {

    logout.addEventListener("click", () => {

        const confirmLogout = confirm(

            "Do you really want to Logout?"

        );

        if (confirmLogout) {

            window.location.href = "login.html";

        }

    });

}

// =========================================
// Notification
// =========================================

const notification = document.querySelector(".notification");

if (notification) {

    notification.addEventListener("click", () => {

        alert(

`Notifications

• Scholarship Approved

• Hostel Fee Due

• EMI Tomorrow

• Budget Updated`

        );

    });

}

// =========================================
// Welcome Message
// =========================================

const hour = new Date().getHours();

let greeting = "";

if (hour < 12) {

    greeting = "Good Morning";

}

else if (hour < 17) {

    greeting = "Good Afternoon";

}

else {

    greeting = "Good Evening";

}

const heading = document.querySelector(".welcome h1");

if (heading) {

    heading.innerHTML = `${greeting}, <span>Naveen 👋</span>`;

}

// =========================================
// Live Date
// =========================================

const footer = document.querySelector("footer");

if (footer) {

    const today = new Date();

    footer.innerHTML =

    `© ${today.getFullYear()} EduVault Student Finance Management System`;

}

// =========================================
// Hover Animation
// =========================================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});

// =========================================
// Quick Action Buttons
// =========================================

const buttons = document.querySelectorAll(".quick-actions button");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const text = button.innerText.trim();

        alert(text + " page will open soon.");

    });

});

// =========================================
// Firebase Ready Functions
// =========================================

// Replace with Firestore later

function loadStudentData() {

    console.log("Loading Student Data...");

}

function loadTransactions() {

    console.log("Loading Transactions...");

}

function loadNotifications() {

    console.log("Loading Notifications...");

}

function loadWallet() {

    console.log("Loading Wallet...");

}

loadStudentData();

loadTransactions();

loadNotifications();

loadWallet();