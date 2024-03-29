import { Stack } from "@mui/material";

import { categories } from "../utils/constants";

// const selectedCategory = "New";

const Sidebar = ({selectedCategory, setSelectedCategory}) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((c, i) => (
      <button
        onClick={()=>{setSelectedCategory(c.name)}}
        className="category-btn"
        style={{
          background: c.name === selectedCategory && "#FC1503",
          color: "white",
        }}
        key={c.name}
      >
        <span
          style={{
            color: c.name === selectedCategory ? "white" : "red",
            "margin-right": "15px",
          }}
        >
          {c.icon}
        </span>
        <span
            style={{opacity:c.name===selectedCategory ? 1 : 0.8}}
        >{c.name}</span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
