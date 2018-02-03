-- $1 = username 
-- $2 = password
select * from houserusers
where username = $1 and password = $2
