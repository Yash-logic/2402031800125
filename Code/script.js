$(document).ready(function() {
    // 1. Initialize Transactions Data
    const data = [
        { name: 'Apple Subscription', cat: 'Entertainment', date: 'Apr 12, 2026', status: 'Completed', amt: -14.99 },
        { name: 'Monthly Salary', cat: 'Income', date: 'Apr 01, 2026', status: 'Completed', amt: 5200.00 },
        { name: 'Starbucks Coffee', cat: 'Food', date: 'Apr 13, 2026', status: 'Pending', amt: -5.50 },
        { name: 'Amazon Web Services', cat: 'Work', date: 'Apr 10, 2026', status: 'Completed', amt: -120.00 }
    ];

    function renderTable() {
        let rows = "";
        data.forEach(item => {
            const amtClass = item.amt > 0 ? 'text-success' : 'text-danger';
            const icon = item.amt > 0 ? 'bi-plus-circle' : 'bi-dash-circle';
            rows += `
                <tr>
                    <td><i class="bi ${icon} me-2"></i>${item.name}</td>
                    <td><span class="badge bg-light text-dark border">${item.cat}</span></td>
                    <td>${item.date}</td>
                    <td><span class="text-muted small">${item.status}</span></td>
                    <td class="fw-bold ${amtClass}">${item.amt > 0 ? '+' : ''}${item.amt.toFixed(2)}</td>
                </tr>`;
        });
        $('#txnTable tbody').html(rows);
    }

    // 2. Main Analysis Chart (Line Chart)
    const ctxMain = document.getElementById('mainAnalysisChart').getContext('2d');
    new Chart(ctxMain, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Income',
                data: [400, 600, 500, 900, 700, 1100, 1300],
                borderColor: '#4e73df',
                tension: 0.4,
                fill: true,
                backgroundColor: 'rgba(78, 115, 223, 0.05)'
            }, {
                label: 'Expenses',
                data: [300, 400, 350, 500, 450, 600, 550],
                borderColor: '#e74a3b',
                tension: 0.4
            }]
        },
        options: { plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
    });

    // 3. Category Pie Chart
    const ctxPie = document.getElementById('categoryPieChart').getContext('2d');
    new Chart(ctxPie, {
        type: 'doughnut',
        data: {
            labels: ['Rent', 'Food', 'Entertainment', 'Others'],
            datasets: [{
                data: [45, 25, 15, 15],
                backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc', '#f6c23e'],
                hoverOffset: 4
            }]
        },
        options: { cutout: '70%', plugins: { legend: { position: 'bottom' } } }
    });

    // 4. Theme Toggle Logic
    $('#themeToggle').click(function() {
        $('body').toggleClass('dark-mode');
        const isDark = $('body').hasClass('dark-mode');
        $(this).html(isDark ? '<i class="bi bi-sun"></i>' : '<i class="bi bi-moon-stars"></i>');
    });

    renderTable();
});