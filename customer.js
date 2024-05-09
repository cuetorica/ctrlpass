const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});





// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})


// JavaScript to add data dynamically and handle edit/delete
const addButton = document.querySelector('.btn-download');
const customerList = document.getElementById('customer-list');

let id = 1; // Starting ID for the data
// Function to handle edit action
function editRow(row) {
    const cells = row.querySelectorAll('td');
    const name = prompt('Enter Name:', cells[1].textContent);
    const email = prompt('Enter Email:', cells[2].textContent);
    const phone = prompt('Enter Phone:', cells[3].textContent);

    if (name !== null && email !== null && phone !== null) {
        cells[1].textContent = name;
        cells[2].textContent = email;
        cells[3].textContent = phone;

        // Update the sidebar menu if the edited row is the visitor list
        const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');
        allSideMenu.forEach(item => {
            if (item.textContent.trim() === cells[1].textContent) {
                item.textContent = name;
            }
        });

    } else {
        alert('Please enter all fields.');
    }
}


// Function to handle delete action
function deleteRow(row) {
    if (confirm('Are you sure you want to delete this entry?')) {
        row.remove();
    }
}

addButton.addEventListener('click', function() {
    const name = prompt('Enter Name:');
    const email = prompt('Enter Email:');
    const phone = prompt('Enter Phone:');
    const date = new Date().toISOString().slice(0, 10);

    if (name && email && phone) {
        id++;

        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${id}</td>
            <td>${name}</td>
            <td>${email}</td>
            <td>${phone}</td>
            <td>${date}</td>
            <td>
                <button class="btn-edit">Edit</button>
                <button class="btn-delete">Delete</button>
            </td>
        `;

        // Add event listeners for edit and delete buttons
        const editButton = newRow.querySelector('.btn-edit');
        const deleteButton = newRow.querySelector('.btn-delete');

        editButton.addEventListener('click', () => editRow(newRow));
        deleteButton.addEventListener('click', () => deleteRow(newRow));

        customerList.appendChild(newRow);
    } else {
        alert('Please enter all fields.');
    }
});
















// Search Bar

const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})












if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})