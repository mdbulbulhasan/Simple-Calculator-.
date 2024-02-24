// import React from 'react'

import { useState } from "react";

export default function From() {
  const [value, setValue] = useState<string>("");
  return (
    <div>
      <h2>{value}</h2>
      <input
        type="text"
        name="input"
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setValue(event.currentTarget.value);
        }}
      />
    </div>
  );
}
