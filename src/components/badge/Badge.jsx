import React from "react";
import "./Badge.scss";

export default function Badge({ value }) {
  return <span className="badge badge--discount">{value}</span>;
}
