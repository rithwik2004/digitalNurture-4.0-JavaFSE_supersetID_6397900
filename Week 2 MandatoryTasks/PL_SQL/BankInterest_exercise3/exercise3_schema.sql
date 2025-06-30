-- savings accounts
CREATE TABLE savings_accounts (
    account_id     NUMBER PRIMARY KEY,
    customer_id    NUMBER,
    balance        NUMBER(12, 2)
);

-- employees
CREATE TABLE employees (
    employee_id    NUMBER PRIMARY KEY,
    name           VARCHAR2(100),
    department_id  NUMBER,
    salary         NUMBER(10, 2)
);

-- general accounts
CREATE TABLE accounts (
    account_id     NUMBER PRIMARY KEY,
    customer_id    NUMBER,
    balance        NUMBER(12, 2)
);
