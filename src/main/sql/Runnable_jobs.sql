-- noinspection SqlNoDataSourceInspectionForFile
CREATE TABLE runnable_jobs(ID INT PRIMARY KEY,
   NAME VARCHAR(255),
   url VARCHAR(255),
   job_group VARCHAR(255));

insert into runnable_jobs values (1, 'Sim Change', 'http://localhost:9095/mw/open/simchange', 'mccs_jobs');

insert into runnable_jobs values (2, 'Gsm number Change', 'http://localhost:9095/mw/open/simchange', 'mw_jobs');

insert into runnable_jobs values (3, 'Commissioning', 'http://localhost:9095/mw/open/simchange', 'scheduled_jobs');
