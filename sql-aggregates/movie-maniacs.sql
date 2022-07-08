select "customers"."firstName" || ' ' || "customers"."lastName" as "fullName",
       sum("payments"."amount") as "totalAmount"
  from "customers"
  join "rentals" using ("customerId")
  join "payments" using ("rentalId")
 group by "fullName"
 order by "totalAmount" desc
