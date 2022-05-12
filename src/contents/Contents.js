import React from "react";
import Alert from "./components/Alert";
import Avatar from "./components/Avatar";
import Badge from "./components/Badge";
import Breadcrumbs from "./components/Breadcrumbs";
import Button from "./components/Button";
import Card from "./components/Card";
import Carousel from "./components/Carousel";
import Checkbox from "./components/Checkbox";
import Drawer from "./components/Drawer";
import Dropdown from "./components/Dropdown";
import InputGroup from "./components/InputGroup";
import Loader from "./components/Loader";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import Pagination from "./components/Pagination";
import Radio from "./components/Radio";
import Range from "./components/Range";
import Select from "./components/Select";
import Step from "./components/Step";
import Tab from "./components/Tab";
import Table from "./components/Table";
import Textarea from "./components/Textarea";
import TextInput from "./components/TextInput";
import Toggle from "./components/Toggle";

const Contents = () => {
  return (
    <div className="px-6 lg:ml-72">
      <Button />
      <Dropdown />
      <Modal />
      <Toggle />
      <Alert />
      <Badge />
      <Loader />
      <TextInput />
      <Checkbox />
      <Radio />
      <Range />
      <Select />
      <Textarea />
      <Avatar />
      <Drawer />
      <Breadcrumbs />
      <Navbar />
      <Pagination />
      <Step />
      <Tab />
      <Card />
      <Carousel />
      <Table />
      <InputGroup />
    </div>
  );
};

export default Contents;
