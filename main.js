let $ = document.querySelector.bind(document);
let listStudent = [];
function start() {
    render(listStudent);
}
start();
//hàm render
function render(listStudent) {
    let html = '';
    listStudent.forEach((e, index) => {
        html += `
        <tr>
            <td>${index + 1}</td>
            <td>${e.name}</td>
            <td>${e.age}</td>
            <td>${e.address}</td>
            <td><button onclick="edit(${index})">Edit</button></td>
            <td><button onclick="deleteStudent(${index})">Delete</button></td>
        </tr>
        `

    })
    $('#table-body').innerHTML = html
}
//create
function createStudent() {
    let name = $('.input-name').value;
    let age = $('.input-age').value;
    let address = $('.input-address').value;
    if (name == '' || age == '' || address == '') {
        alert('The name is required! Please try again!')
    } else {
        let info = {
            name: name,
            age: age,
            address: address
        }
        listStudent.push(info); 
        alert('Create Student Success!')
        render(listStudent);
    }
    $('.input-name').value = '';
    $('.input-age').value = '';
    $('.input-address').value = '';
}
//hàm delete
function deleteStudent(index) {
    listStudent.splice(index, 1)
    render(listStudent);
    alert('Delete Student success!')
}
//hàm edit
function edit(index) {
    let name = prompt('nhập tên muốn chuyển:')
    let age = prompt('Nhập tuổi:');
    let address = prompt('Nhập địa chỉ:');
    if (name == '' || age == '' || address == '') {
        alert('The name is required! Please try again!')
    } else {
        if (listStudent[index].name.toUpperCase() == name.toUpperCase()) {
            alert('The name is existed! Please try again!')
        } else {
            listStudent[index] = {
                name: name,
                age: age,
                address: address
            }
            render(listStudent);
            alert('Create Student Success!')
        }
    }
}
//tạo hàm render riêng cho search
let newList;
function renderSearch(listStudent) {
    let html = '';
    listStudent.forEach((e, index) => {
        html += `
        <tr>
            <td>${index + 1}</td>
            <td>${e.name}</td>
            <td>${e.age}</td>
            <td>${e.address}</td>
            <td><button onclick="edit(${index})">Edit</button></td>
            <td><button onclick="deleteStudentSearch(${index})">Delete</button></td>
        </tr>
        `

    })
    $('#table-body').innerHTML = html
}
function deleteStudentSearch(index) {
    newList.splice(index, 1)
    renderSearch(newList);
    alert('Delete Student success!')
}

//search
function search() {
    let inputSearch = $('.input-search').value.trim();
    if (!inputSearch == '') {
        newList = listStudent.filter((e) => {
            return e.name.includes(inputSearch);
        })
        if(newList.length != 0) {
            renderSearch(newList);
        }else {
            render(listStudent);
            alert('Not found!')
        }
    } else {
        render(listStudent)
    }
}