BEGIN
   FOR rec IN (SELECT customer_id, loan_id, interest_rate 
               FROM customers c 
               JOIN loans l ON c.customer_id = l.customer_id 
               WHERE c.age > 60) 
   LOOP
      UPDATE loans
      SET interest_rate = interest_rate - 1
      WHERE loan_id = rec.loan_id;
   END LOOP;

   COMMIT;
END;
/
