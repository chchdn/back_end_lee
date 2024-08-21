// 회원 정보 
const member = {
  id: "user123",
  name: "천국",
  email: "imverysed",
  phone: "010-8888-2020",
  address: "인천시 연수구",
  joinedDate: "2024-08-20",
};

// 제품 정보 
const product = {
  id: "P001",
  name: "노트북",
  price: 1500000,
  category: "전자제품",
  stock: 50,

  };

// 주문 정보 
const order = {
  orderId: "O12345",
  memberId: member.id, // 회원 ID 참조
  productId: product.id, // 제품 ID 참조
  quantity: 2,
  orderDate: "2024-08-20",
  status: "배송중",
};

// 정보 출력 예시
member.getDetails();
product.getDetails();
order.getOrderSummary();

