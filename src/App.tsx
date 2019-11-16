import React, { useState, useEffect } from "react";
import axios from "axios";
import { Header, Icon, List } from "semantic-ui-react";
import "./App.css";

const App: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/values").then(res => {
      setData(res.data);
    });
  });
  return (
    <div>
      <Header as="h2">
        <Icon name="plug" />
        <Header.Content>Uptime Guarantee</Header.Content>
      </Header>
      <List>
        {data.map((value: any) => (
          <List.Item key={value.id}>{value.name}</List.Item>
        ))}
      </List>
    </div>
  );
};

export default App;
