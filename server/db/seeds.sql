INSERT INTO appointment_part_types (appointment_part_name)
VALUES ('early_arrival'),
       ('data_collection'),
       ('report_writing'),
       ('client_presentation');

INSERT INTO appointment_parts (appointment_part_type_id, on_site, time_block_set_id)
VALUES (1, true, 1),
       (1, true, 2),
       (2, true, 3),
       (3, true, 4),
       (3, false, 5),
       (4, true, 6),
       (4, false, 7),
       (5, true, 8);

INSERT INTO dwelling_types (dwelling_type_name, base_sq_ft, ui_description_set_id)
VALUES ('Condo', 600, 2),
       ('Co-op', 600, 3),
       ('Townhouse', 700, 4),
       ('Single Family', 800, 5),
       ('Multi Family', 1500, 6);

INSERT INTO time_block_sets (base_time, rate_over_base_time, base_fee, rate_over_base_fee)
VALUES (0, 0, 0, 0),
       (15, 100, 0, 10),
       (30, 100, 50, 10),
       (30, 100, 75, 10),
       (15, 100, 50, 10),
       (45, 100, 75, 50),
       (60, 100, 50, 10),
       (60, 150, 50, 100),
       (75, 100, 125, 200),
       (175, 0, 0, 0),
       (30, 50, 50, 120),
       (100, 100, 100, 100);

INSERT INTO ui_description_sets (buyer_description, agent_description, owner_description)
VALUES ('I am buying a home', 'My client is buying a home', 'I own a home'),
       ('condo for buyers','condo for agents','condo for owners'),
       ('co-op for buyers','co-op for agents','co-op for owners'),
       ('townhouse for buyers','townhouse for agents','townhouse for owners'),
       ('single family home for buyers','single family home for agents','single family home for owners'),
       ('multi-family home for buyers','multi-family home for agents','multi-family home for owners'),
       ('Buyers Inspection for buyers','Buyers Inspection for agents','Not for you'),
       ('Investors Inspection for buyers','Investors Inspection for agents','Investors Inspection for owners'),
       ('Walk and Talk for buyers','Walk and Talk for agents','Not for you'),
       ('Not for you','Home Check-up and Maintenance Planning for agents','Home Check-up and Maintenance Planning for owners'),
       ('Not for you','Presale Walkthrough for agents','Presale Walkthrough for owners'),
       ('Not for you','Developer Warranty Inspection for agents','Developer Warranty Inspection for owners'),
       ('Reinspection for buyers','Reinspection for agents','Not for you'),
       ('Blue Tape for buyers','Blue Tape for agents','Blue Tape for owners'),
       ('Radon for buyers','Radon for agents','Radon for owners'),
       ('Accessory Dwelling Units for buyers','Accessory Dwelling Units for agents','Accessory Dwelling Units for owners'),
       ('Minimize Time On-Site for buyers','Minimize Time On-Site for agents','Minimize Time On-Site for owners'),
       ('Additional Client Time for buyers','Additional Client Time for agents','Additional Client Time for owners'),
       ('Client will not be present for buyers','Client will not be present for agents','Client will not be present for owners'),
       ('First-Time buyers for buyers','First-Time buyers for agents','First-Time buyers for owners');

-- INSERT INTO addresses (title, house_number, street, apt, city, us_state, zip_code)
-- VALUES (0, 0, 0, 0),
--        (15, 100, 0, 10),
--        (30, 100, 50, 10),
--        (30, 100, 75, 10),
--        (15, 100, 50, 10),
--        (45, 100, 75, 50),
--        (60, 100, 50, 10),
--        (60, 150, 50, 100),
--        (75, 100, 125, 200),
--        (175, 0, 0, 0),
--        (30, 50, 50, 120),
--        (100, 100, 100, 100);

INSERT INTO participant_type (participant_type, participant_description, visibility)
VALUES ('Buyer', 'I am buying a home', true),
       ('Agent', 'My Client is buying a home', true),
       ('Owner', 'I own a home', true),
       ('Inspector', 'This is me!', false);