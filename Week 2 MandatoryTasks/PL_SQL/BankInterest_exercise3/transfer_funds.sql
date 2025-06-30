CREATE OR REPLACE PROCEDURE TransferFunds(
   p_from_account IN NUMBER,
   p_to_account   IN NUMBER,
   p_amount       IN NUMBER
) AS
   v_balance NUMBER;
BEGIN
   -- Check balance
   SELECT balance INTO v_balance FROM accounts WHERE account_id = p_from_account;

   IF v_balance < p_amount THEN
      RAISE_APPLICATION_ERROR(-20001, 'Insufficient balance.');
   END IF;

   -- Debit source
   UPDATE accounts
   SET balance = balance - p_amount
   WHERE account_id = p_from_account;

   -- Credit destination
   UPDATE accounts
   SET balance = balance + p_amount
   WHERE account_id = p_to_account;

   COMMIT;
END;
/
