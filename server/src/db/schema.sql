DROP DATABASE IF EXISTS scheduler_db;
CREATE DATABASE scheduler_db;

\c scheduler_db;


CREATE TABLE appointment_part_types (
  appointment_part_type_id SERIAL PRIMARY KEY,
  appointment_part_name VARCHAR(30) NOT NULL
); 

CREATE TABLE appointment_parts (
  appointment_part_id SERIAL PRIMARY KEY,
  appointment_part_type_id INTEGER NOT NULL,
  on_site BOOLEAN NOT NULL,
  time_block_set_id INTEGER NOT NULL,
  FOREIGN KEY (appointment_part_type_id)
  REFERENCES appointment_part_types (appointment_part_type_id)
  ON DELETE SET NULL
);

CREATE TABLE dwelling_types (
  dwelling_type_id SERIAL PRIMARY KEY,
  dwelling_type_name VARCHAR(30) NOT NULL,
  base_sq_ft INTEGER NOT NULL,
  ui_description_set_id VARCHAR(60) NOT NULL
);

CREATE TABLE time_block_sets (
  time_block_set_id SERIAL PRIMARY KEY,
  base_time INTEGER NOT NULL,
  rate_over_base_time INTEGER NOT NULL,
  base_fee INTEGER NOT NULL,
  rate_over_base_fee INTEGER NOT NULL
);

CREATE TABLE ui_description_sets (
  ui_description_set_id SERIAL PRIMARY KEY,
  buyer_description VARCHAR(100) NOT NULL,
  agent_description VARCHAR(100) NOT NULL,
  owner_description VARCHAR(100) NOT NULL
);

CREATE TABLE addresses (
  address_id SERIAL PRIMARY KEY,
  title VARCHAR(60) NOT NULL,
  house_number INTEGER NOT NULL,
  street VARCHAR(100) NOT NULL,
  apt VARCHAR(30),
  city VARCHAR(30) NOT NULL,
  us_state VARCHAR(30) NOT NULL,
  zip_code INTEGER NOT NULL
);

CREATE TABLE participant_type (
  participant_type_id SERIAL PRIMARY KEY,
  participant_type VARCHAR(100) NOT NULL,
  participant_description VARCHAR(100) NOT NULL,
  visibility BOOLEAN NOT NULL
);

CREATE TABLE properties (
  property_id SERIAL PRIMARY KEY,
  above_grade_sq_ft INTEGER NOT NULL,
  below_grade_sq_ft INTEGER NOT NULL,
  bedroom_number INTEGER NOT NULL,
  bathroom_number INTEGER NOT NULL,
  foundation_type VARCHAR(60) NOT NULL
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  participant_type VARCHAR(100) NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL
);


CREATE TABLE additional_services (
  additional_services_id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  can_be_scheduled BOOLEAN NOT NULL,
  ui_description_set INTEGER NOT NULL,
  early_arrival INTEGER NOT NULL,
  data_collection INTEGER NOT NULL,
  report_writing INTEGER NOT NULL,
  client_presentation INTEGER NOT NULL
);

CREATE TABLE availability_options (
  availability_options_id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  can_be_scheduled BOOLEAN NOT NULL,
  differential_scheduling_override VARCHAR(100) NOT NULL,
  ui_description_set INTEGER NOT NULL,
  early_arrival INTEGER NOT NULL,
  data_collection INTEGER NOT NULL,
  report_writing INTEGER NOT NULL,
  client_presentation INTEGER NOT NULL
);

CREATE TABLE dwelling_adjustments (
  dwelling_adjustments_id SERIAL PRIMARY KEY,
  dwelling_type_id INTEGER NOT NULL,
  can_be_scheduled BOOLEAN NOT NULL,
  ui_description_set INTEGER NOT NULL,
  early_arrival INTEGER NOT NULL,
  data_collection INTEGER NOT NULL,
  report_writing INTEGER NOT NULL,
  client_presentation INTEGER NOT NULL
);

CREATE TABLE services (
  service_id SERIAL PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  can_be_scheduled BOOLEAN NOT NULL,
  differential_scheduling BOOLEAN NOT NULL,
  ui_description_set INTEGER NOT NULL,
  early_arrival INTEGER NOT NULL,
  data_collection INTEGER NOT NULL,
  report_writing INTEGER NOT NULL,
  client_presentation INTEGER NOT NULL
);








