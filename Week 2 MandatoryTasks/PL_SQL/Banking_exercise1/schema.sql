-- Drop existing tables (optional for clean setup)
DROP TABLE loans CASCADE CONSTRAINTS;
DROP TABLE customers CASCADE CONSTRAINTS;

-- Create customers table
CREATE TABLE customers (
    customer_id   NUMBER PRIMARY KEY,
    name          VARCHAR2(100),
    age           NUMBER,
    balance       NUMBER(12,2),
    isVIP         VARCHAR2(5) DEFAULT 'FALSE'
);

-- Create loans table
CREATE TABLE loans (
    loan_id       NUMBER PRIMARY KEY,
    customer_id   NUMBER,
    interest_rate NUMBER(5,2),
    due_date      DATE,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);
