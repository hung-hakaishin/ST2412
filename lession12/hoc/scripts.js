// Xây dựng chương trình quản lý kho hàng như sau:
// -Cửa hàng gồm các thông tin: tên kho hàng, địa chỉ, người sở hữu, các mặt hàng trong kho.
// -Mỗi mặt hàng gồm: mã mặt hàng, tên, loại mặt hàng, giá cả.

const initStorage = {
	name: "Fake Storage",
	address: "HN",
	owner: "Dung Tien",
	description: "Mô tả kho hàng",
	items: [],
  };
  
  const CATEGORIES = {
	  1: "Đồ siêu nội thất",
	  2: "Đồ gia dụng",
	  3: "Đồ trang trí"
  }
  
  let storage = initStorage;
  if (localStorage.getItem("storage")) {
	storage = JSON.parse(localStorage.getItem("storage"));
  }
  
  // Thông tin kho hàng
  const nameStorage = document.getElementById("name_storage");
  const addressStorage = document.getElementById("address_storage");
  const ownerStorage = document.getElementById("owner_storage");
  const descriptionStorage = document.getElementById("description_storage");
  
  // Các form input trong modal cập nhật thông tin kho hàng
  const inputNameStorage = document.getElementById("input_name_storage");
  const inputAddressStorage = document.getElementById("input_address_storage");
  const inputOwnerStorage = document.getElementById("input_owner_storage");
  const inputDescriptionStorage = document.getElementById(
	"input_description_storage"
  );
  // Các form input trong modal thêm sản phẩm
  const inputNameItem = document.getElementById("input_name_item");
  const inputCategoryItem = document.getElementById("input_category_item");
  const inputQuantityItem = document.getElementById("input_quantity_item");
  const inputPriceItem = document.getElementById("input_price_item");
  // Thẻ input nhập keyword tìm kiếm
  const inputKeyword = document.getElementById("keyword");
  // Các thẻ text báo lỗi validate
  const errorNameStorage = document.getElementById("error_name_storage");
  const errorOwnerStorage = document.getElementById("error_owner_storage");
  const errorAddressStorage = document.getElementById("error_address_storage");
  
  // Các button
  // Button cập nhật thông tin kho hàng
  const btnUpdateStorage = document.getElementById("btn_update_storage");
  const btnCloseModalUpdateStorage = document.getElementById(
	"btn-close-modal-update"
  );
  // Button thêm mới sản phẩm
  const btnCreateItem = document.getElementById("btn_create_item");
  // Button cập nhật sản phẩm (trong modal);
  const btnUpdateItem = document.getElementById("btn_update_item");
  // Button tìm kiếm sản phẩm
  const btnSearchProduct = document.getElementById("btn-search-product")
  
  // Bootstrap
  const myModal = new bootstrap.Modal("#staticBackdrop", {
	keyboard: false,
  });
  const modalItem = new bootstrap.Modal("#modal_create_item", {
	keyboard: false,
  });
  
  // Hàm in ra thông tin kho hàng dựa trên dữ liệu
  function printInformationStorage() {
	descriptionStorage.innerText = storage.description;
	nameStorage.innerText = storage.name;
	addressStorage.innerText = storage.address;
	ownerStorage.innerText = storage.owner;
  }
  printInformationStorage();
  
  // -Mô tả chi tiết
  // Sửa thông tin kho hàng → Yêu cầu nhập lại tên kho hàng, địa chỉ, người sở hữu. In ra thông tin mới của kho hàng sau khi cập nhật giá trị mới.
  btnUpdateStorage.onclick = function () {
	const newNameStorage = inputNameStorage.value;
	const newAddressStorage = inputAddressStorage.value;
	const newOwnerStorage = inputOwnerStorage.value;
	const newDescriptionStorage = inputDescriptionStorage.value;
  
	// Kiểm tra xem thông tin đã có chưa
	if (
	  newNameStorage.length < 1 ||
	  newAddressStorage.length < 1 ||
	  newOwnerStorage.length < 1
	) {
	  if (newNameStorage.length < 1) {
		errorNameStorage.innerText = "Tên kho hàng là bắt buộc.";
	  }
	  if (newAddressStorage.length < 1) {
		document.getElementById("error_address_storage").innerText =
		  "Địa chỉ kho hàng là bắt buộc.";
	  }
	  if (newOwnerStorage.length < 1) {
		errorAddressStorage.innerText = "Tên người sở hữu là bắt buộc.";
	  }
	} else {
	  storage.name = newNameStorage;
	  storage.address = newAddressStorage;
	  storage.owner = newOwnerStorage;
	  storage.description = newDescriptionStorage;
  
	  // Sau khi sửa thông tin kho hàng => cập nhật vào local storage
	  const storageSaved = JSON.stringify(storage); // => chuyển sang định dạng json
	  localStorage.setItem("storage", storageSaved);
  
	  printInformationStorage();
	  myModal.hide();
	}
  };
  
  // In mặt hàng trong kho
  function printItems(items) {
	let data = storage.items;
	if(items){
	  data = items;
	}
  
	let htmlItems = "";
	for (let item of data) {
	  htmlItems += `
		  <tr>
			  <th scope="row">${item.id}</th>
			  <td>${item.name}</td>
			  <td>${CATEGORIES[item.category]}</td>
			  <td>${item.quantity}</td>
			  <td>${item.price}</td>
			  <td>
				  <button class="btn btn-success" onclick="updateItem(${item.id})">Chỉnh sửa</button>
				  <button class="btn btn-danger" onclick="deleteItem(${item.id})">Xóa</button>
			  </td>
		  </tr>
		  `;
	}
  
	document.getElementById("tbody").innerHTML = htmlItems;
  }
  printItems();
  
  // Function clear lỗi validate
  function clearErrors() {
	errorAddressStorage.innerHTML = "";
	errorNameStorage.innerHTML = "";
	errorOwnerStorage.innerHTML = "";
  }
  
  // Function clear inputs trong form modal
  function clearInputs(){
	  inputNameItem.value = "";
	  inputCategoryItem.value = "";
	  inputQuantityItem.value = "";
	  inputPriceItem.value = "";
  }
  
  // Tạo mặt hàng trong kho → Yêu cầu nhập mã mặt hàng, tên, loại, giá cả. In ra thông tin các mặt hàng đang có trong kho. Nếu mã mặt hàng đã tồn tại → yêu cầu nhập lại.
  btnCreateItem.onclick = function () {
	const nameItem = inputNameItem.value;
	const categoryItem = inputCategoryItem.value;
	const quantityItem = inputQuantityItem.value;
	const priceItem = inputPriceItem.value;
  
	const newItem = {
	  id: Date.now(),
	  name: nameItem,
	  category: categoryItem,
	  quantity: quantityItem,
	  price: priceItem,
	};
  
	storage.items.push(newItem);
	printItems();
  
	const storageSaved = JSON.stringify(storage); // => chuyển sang định dạng json
	localStorage.setItem("storage", storageSaved);
  
	// clear input
	clearInputs();
  
	// đóng modal
	modalItem.hide();
  };
  
  btnCloseModalUpdateStorage.onclick = clearErrors;
  
  // Tìm kiếm mặt hàng = 3 → Yêu cầu nhập từ khóa tìm kiếm. In ra thông tin các mặt hàng có tên chứa từ khóa tìm kiếm.  
  // Nếu không có từ khóa tìm kiếm → in ra toàn bộ mặt hàng.
  // Bước 1: Gán sự kiện onclick cho button Tìm kiếm
  btnSearchProduct.onclick = function(){
	  // Bước 2: Khi click vào button Tìm kiếm thì sẽ gọi hàm onclick và
	  // lấy được từ khóa người dùng vừa nhập
	  const keyword = inputKeyword.value;
	  // Bước 3: Duyệt mảng sản phẩm check xem sản phẩm nào có chứa từ khóa
	  const results = [];
	  console.log("initStorage.items: ", initStorage.items)
	  for(let product of storage.items){
		  console.log("product: ", product)
		  if(product.name.includes(keyword)){
			  results.push(product);
		  }
	  }
	  console.log(results);
	  // Bước 4: In ra các sản phẩm thỏa mãn điều kiện
	  printItems(results)
  }
  
  // Ý nghĩa: Xóa mặt hàng = 4 → Yêu cầu nhập mã mặt hàng. Xóa mặt hàng có mã tương ứng. Nếu không tìm thấy mã mặt hàng cần xóa → kết thúc.
  function findIndexById(id){
	  for(let i = 0; i < storage.items.length; i++){
		  if(storage.items[i].id === id){
			  return i;
		  }
	  }
  
	  return -1;
  }
  // Bước 1: Gán được sự kiện onclick cho button Xóa
  function deleteItem(id){
	  // Bước 2: Lấy được chính xác cái id của sản phẩm muốn xóa
	  // Bước 3: Dựa vào id để tìm index (vị trí) của sản phẩm đó trong mảng
	  let index = findIndexById(id);
	  // Bước 4: Xóa sản phẩm đấy khỏi mảng
	  storage.items.splice(index, 1);
	  // Bước 5: Gọi lại hàm printItems để in ra danh sách sản phẩm mới nhất
	  printItems();
	  // Bước 6: Cập nhật dữ liệu vào trong local storage
	  const storageSaved = JSON.stringify(storage); // => chuyển sang định dạng json
	  localStorage.setItem("storage", storageSaved);
  }
  
  // Chỉnh sửa
  let indexItemUpdate = -1;
  // Hành động 1: Lấy thông tin và show lên modal
  // Bước 1: Gán được sự kiện onclick cho button Chỉnh sửa
  function updateItem(id){
	  // Bước 2: Lấy được chính xác cái id của sản phẩm muốn xóa
	  // Bước 3: Dựa vào id để tìm index (vị trí) của sản phẩm đó trong mảng
	  indexItemUpdate = findIndexById(id);
	  // Bước 4: Lấy thông tin sản phẩm, bật modal và in fill thông tin sản phẩm vào form trong modal
	  inputNameItem.value = storage.items[indexItemUpdate].name;
	  inputCategoryItem.value = storage.items[indexItemUpdate].category;
	  inputQuantityItem.value = storage.items[indexItemUpdate].quantity;
	  inputPriceItem.value = storage.items[indexItemUpdate].price;
	  modalItem.show();
	  // Ẩn button "Thêm mới" và 
	  btnCreateItem.style.display = "none"
	  // Hiện button "Cập nhật"
	  btnUpdateItem.style.display = "inline"
	  // Sửa title
	  document.getElementById("title-modal-item").innerText = "Chỉnh sửa sản phẩm"
  }
  
  // Hành động 2: Khi người dùng nhấn button cập nhật
  // Bước 1: Gán sự kiện cho button Cập nhật trong modal
  btnUpdateItem.onclick = function(){
	  // Bước 2: Lấy thông tin người dùng vừa cập nhật
	  const nameItemUpdate = inputNameItem.value;
	  const categoryItemUpdate = inputCategoryItem.value;
	  const quantityItemUpdate = inputQuantityItem.value;
	  const priceItemUpdate = inputPriceItem.value;
	  
	  storage.items[indexItemUpdate].name = nameItemUpdate
	  storage.items[indexItemUpdate].category = categoryItemUpdate
	  storage.items[indexItemUpdate].quantity = quantityItemUpdate
	  storage.items[indexItemUpdate].price = priceItemUpdate
	  // Bước 3: Lưu thông tin mới nhất vào local storage
	  const storageSaved = JSON.stringify(storage); // => chuyển sang định dạng json
	  localStorage.setItem("storage", storageSaved);
  
	  // Bước 4: Gọi lại hàm printItems để in ra dữ liệu mới nhất
	  printItems();
  
	  // Bước 5: Ẩn modal và khôi phục lại trạng thái modal
	  modalItem.hide();
	  // Ẩn button "Cập nhật" và 
	  btnUpdateItem.style.display = "none"
	  // Hiện button "Thêm mới"
	  btnCreateItem.style.display = "inline"
	  // Sửa title
	  document.getElementById("title-modal-item").innerText = "Chỉnh sửa sản phẩm"
  
	  // Bước 6: clear input trong forms
	  clearInputs();
  }