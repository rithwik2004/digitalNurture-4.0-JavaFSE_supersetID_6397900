--sample customers
INSERT INTO customers (customer_id, name, age, balance)
VALUES (1, 'Alice', 65, 15000.00);

INSERT INTO customers (customer_id, name, age, balance)
VALUES (2, 'Bob', 45, 9500.00);

INSERT INTO customers (customer_id, name, age, balance)
VALUES (3, 'Charlie', 70, 12000.00);

--sample loans
INSERT INTO loans (loan_id, customer_id, interest_rate, due_date)
VALUES (101, 1, 7.5, SYSDATE + 10);

INSERT INTO loans (loan_id, customer_id, interest_rate, due_date)
VALUES (102, 2, 8.0, SYSDATE + 40);

INSERT INTO loans (loan_id, customer_id, interest_rate, due_date)
VALUES (103, 3, 6.5, SYSDATE + 20);

COMMIT;
