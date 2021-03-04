import React, { Fragment } from "react";
import { Button, DatePicker, version } from "antd";

export default function Home() {
  return (
    <Fragment>
      <div>
        <h1>antd version: {version}</h1>
        <DatePicker />
        <Button type="primary" style={{ marginLeft: 8 }}>
          Primary Button
        </Button>
      </div>
    </Fragment>
  );
}
