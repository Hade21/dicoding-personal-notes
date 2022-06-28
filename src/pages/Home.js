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
      title: "",
      charLeft: 50,
      body: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleArchived = this.handleArchived.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.setTittle = this.setTittle.bind(this);
    this.setBody = this.setBody.bind(this);
  }

  setTittle = (e) => {
    if (this.state.charLeft !== 0) {
      const title = e;
      const characterLeft = 50 - e.length;
      this.setState({
        title: title,
        charLeft: characterLeft,
      });
    }
  };

  setBody = (e) => {
    this.setState({
      body: e,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const title = this.state.title;
    const body = this.state.body;
    const createdAt = new Date().toISOString();
    const id = Date.now();
    const archived = false;
    const newNotes = { id, title, createdAt, body, archived };
    this.setState({
      data: [...this.state.data, newNotes],
      backupData: this.state.data,
      title: "",
      body: "",
    });
    console.log(body);
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
        <InputForm
          submit={this.handleSubmit}
          setTitle={this.setTittle}
          title={this.state.title}
          charLeft={this.state.charLeft}
          setBody={this.setBody}
          body={this.state.body}
        />
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
