import React, { Component } from "react";
//components
import ArchivedNotes from "../components/ArchivedNotes";
import Header from "../components/Header";
import InputForm from "../components/InputForm";
import SavedNotes from "../components/SavedNotes";
//import data
import { getInitialData } from "../utils";
//styling
import { Container } from "@mui/material";

export class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: getInitialData(),
      backupData: getInitialData(),
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleArchived = this.handleArchived.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const title =
      e.target.firstElementChild.firstElementChild.firstElementChild
        .firstElementChild.nextElementSibling.firstElementChild.value;
    const body =
      e.target.firstElementChild.firstElementChild.nextElementSibling
        .firstElementChild.firstElementChild.nextElementSibling
        .firstElementChild.value;
    const createdAt = new Date().toISOString();
    const id = Date.now();
    const archived = false;
    const newNotes = { id, title, createdAt, body, archived };
    this.setState({
      data: [...this.state.data, newNotes],
      backupData: this.state.data,
    });
  };

  handleDelete = (id) => {
    const index = this.state.data.findIndex((i) => i.id === id);
    this.state.data.splice(index, 1);
    const newData = this.state.data;
    this.setState({
      data: newData,
      backupData: newData,
    });
    console.log(this.state.data);
  };

  handleArchived = (id) => {
    const index = this.state.data.findIndex((i) => i.id === id);
    const newData = this.state.data;
    newData[index].archived = !newData[index].archived;
    this.setState({
      data: newData,
      backupData: newData,
    });
  };

  handleSearch = (value) => {
    const newData = this.state.backupData.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    this.setState({
      data: newData,
    });
    console.log(this.state.backupData);
  };

  render() {
    return (
      <Container>
        <Header onSearch={this.handleSearch} />
        <InputForm submit={this.handleSubmit} />
        <SavedNotes
          data={this.state.data}
          onDelete={this.handleDelete}
          onArchive={this.handleArchived}
        />
        <ArchivedNotes
          data={this.state.data}
          onDelete={this.handleDelete}
          onArchive={this.handleArchived}
        />
      </Container>
    );
  }
}

export default Home;
