--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5
-- Dumped by pg_dump version 14.5

-- Started on 2022-09-28 18:20:03

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 210 (class 1259 OID 16405)
-- Name: Security Open Close; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Security Open Close" (
    "S_Number" integer NOT NULL,
    "Presence" integer NOT NULL,
    "UpdateDate" date NOT NULL
);


ALTER TABLE public."Security Open Close" OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 16397)
-- Name: Temperature&Humidity; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Temperature&Humidity" (
    "S_Number" integer NOT NULL,
    "Temp" integer NOT NULL,
    "Humidity" integer NOT NULL,
    "UpdateDate" date NOT NULL
);


ALTER TABLE public."Temperature&Humidity" OWNER TO postgres;

--
-- TOC entry 212 (class 1259 OID 16423)
-- Name: UsersID; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."UsersID" (
    "ID" character(1) NOT NULL,
    userid integer NOT NULL,
    roleid integer NOT NULL,
    firstname character(1) NOT NULL,
    lastname character(1) NOT NULL,
    email character(1) NOT NULL,
    password character(1) NOT NULL
);


ALTER TABLE public."UsersID" OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 16416)
-- Name: WaterFlow; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."WaterFlow" (
    "S_Number" integer NOT NULL,
    "Flow" integer NOT NULL,
    "UpdateDate" date NOT NULL
);


ALTER TABLE public."WaterFlow" OWNER TO postgres;

--
-- TOC entry 3326 (class 0 OID 16405)
-- Dependencies: 210
-- Data for Name: Security Open Close; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Security Open Close" ("S_Number", "Presence", "UpdateDate") FROM stdin;
3	1	2022-09-27
2	0	2022-09-27
\.


--
-- TOC entry 3325 (class 0 OID 16397)
-- Dependencies: 209
-- Data for Name: Temperature&Humidity; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Temperature&Humidity" ("S_Number", "Temp", "Humidity", "UpdateDate") FROM stdin;
2	19	45	2022-09-27
3	20	47	2022-09-27
\.


--
-- TOC entry 3328 (class 0 OID 16423)
-- Dependencies: 212
-- Data for Name: UsersID; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."UsersID" ("ID", userid, roleid, firstname, lastname, email, password) FROM stdin;
\.


--
-- TOC entry 3327 (class 0 OID 16416)
-- Dependencies: 211
-- Data for Name: WaterFlow; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."WaterFlow" ("S_Number", "Flow", "UpdateDate") FROM stdin;
2	0	2022-09-27
3	1	2022-09-27
\.


--
-- TOC entry 3176 (class 2606 OID 16401)
-- Name: Temperature&Humidity Sensor Number; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Temperature&Humidity"
    ADD CONSTRAINT "Sensor Number" PRIMARY KEY ("S_Number");


--
-- TOC entry 3179 (class 2606 OID 16409)
-- Name: Security Open Close SensorNumber; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Security Open Close"
    ADD CONSTRAINT "SensorNumber" PRIMARY KEY ("S_Number");


--
-- TOC entry 3185 (class 2606 OID 16427)
-- Name: UsersID UniqueID; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."UsersID"
    ADD CONSTRAINT "UniqueID" PRIMARY KEY ("ID");


--
-- TOC entry 3183 (class 2606 OID 16420)
-- Name: WaterFlow WaterFlow_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."WaterFlow"
    ADD CONSTRAINT "WaterFlow_pkey" PRIMARY KEY ("S_Number");


--
-- TOC entry 3177 (class 1259 OID 16415)
-- Name: Sensor_Num; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "Sensor_Num" ON public."Temperature&Humidity" USING btree ("S_Number");


--
-- TOC entry 3181 (class 1259 OID 16422)
-- Name: Sensor_Number1; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "Sensor_Number1" ON public."WaterFlow" USING btree ("S_Number");


--
-- TOC entry 3180 (class 1259 OID 16421)
-- Name: Sensor_Number2; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "Sensor_Number2" ON public."Security Open Close" USING btree ("S_Number");

ALTER TABLE public."Security Open Close" CLUSTER ON "Sensor_Number2";


--
-- TOC entry 3334 (class 0 OID 0)
-- Dependencies: 209
-- Name: TABLE "Temperature&Humidity"; Type: ACL; Schema: public; Owner: postgres
--

REVOKE ALL ON TABLE public."Temperature&Humidity" FROM postgres;
GRANT ALL ON TABLE public."Temperature&Humidity" TO postgres WITH GRANT OPTION;


-- Completed on 2022-09-28 18:20:03

--
-- PostgreSQL database dump complete
--

