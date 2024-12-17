import React from "react";
import SidebarButton from "./SidebarButton";
import SidebarSingleButton from "./SidebarSingleButton";

const Sidebar = () => {
  const productsSubButtons = [
    { name: "All Products", link: "/products" },
    { name: "Add Product", link: "/add-product" },
    { name: "Categories", link: "/product-categories" },
  ];

  const ordersSubButtons = [
    { name: "All Orders", link: "/orders" },
    { name: "Order Management", link: "/order-management" },
  ];

  const usersSubButtons = [{ name: "All Users", link: "/users" }];

  const categoriesSubButtons = [
    { name: "View Categories", link: "/categories" },
  ];

  const vouchersSubButtons = [{ name: "View Vouchers", link: "/vouchers" }];

  const deliverySubButtons = [{ name: "Delivery Settings", link: "/delivery" }];

  const employeeRolesSubButtons = [
    { name: "All Roles", link: "/employee-roles" },
  ];

  const packagingSubButtons = [
    { name: "Packaging Details", link: "/packaging" },
  ];

  const orderManagementSubButtons = [
    { name: "Order Management", link: "/order-management" },
  ];

  const settingsSubButtons = [{ name: "System Settings", link: "/settings" }];

  const shippingSubButtons = [{ name: "Shipping Settings", link: "/shipping" }];

  const promoCodesSubButtons = [
    { name: "View Promo Codes", link: "/promo-codes" },
  ];

  const giftCardsSubButtons = [
    { name: "View Gift Cards", link: "/gift-cards" },
  ];

  return (
    <div
      className="d-flex flex-column bg-dark text-white"
      style={{
        height: "100vh",
        overflowY: "auto",
        width: "250px",
        padding: "20px",
      }}
    >
      <h3 className="text-left mb-4">Menu</h3>

      <SidebarSingleButton title="Dashboard" link="/" />
      <SidebarButton title="Products" subButtons={productsSubButtons} />
      <SidebarButton title="Orders" subButtons={ordersSubButtons} />
      <SidebarButton title="Users" subButtons={usersSubButtons} />
      <SidebarButton title="Categories" subButtons={categoriesSubButtons} />
      <SidebarButton title="Vouchers" subButtons={vouchersSubButtons} />
      <SidebarButton title="Delivery" subButtons={deliverySubButtons} />
      <SidebarButton
        title="Employee Roles"
        subButtons={employeeRolesSubButtons}
      />
      <SidebarButton title="Packaging" subButtons={packagingSubButtons} />
      <SidebarButton
        title="Order Management"
        subButtons={orderManagementSubButtons}
      />

      <SidebarSingleButton title="Reports" link="/reports" />
      <SidebarSingleButton title="Settings" link="/settings" />
      <SidebarSingleButton title="Shipping" link="/shipping" />
      <SidebarSingleButton title="Promo Codes" link="/promo-codes" />
      <SidebarSingleButton title="Gift Cards" link="/gift-cards" />
    </div>
  );
};

export default Sidebar;
