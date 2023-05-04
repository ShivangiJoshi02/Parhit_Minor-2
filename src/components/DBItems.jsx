import React from "react";
import MaterialTable from "material-table";
import {ThemeProvider, createTheme} from "@mui/material";

const DBItems = () => {
    const defaultMaterialTheme = createTheme();
    return (
        <div className="flex items-center justify-center gap-4 pt-6 w-full">
           <ThemeProvider theme ={defaultMaterialTheme}>
           <MaterialTable
        title="Donation Data Preview"
        columns=
          {[
            {title: "Name", field: "name"},
            {title: "Category", field:"category"},
            {title: "Number-Of-Donations", field:"donation"},
          ]}
        data={[
          {
          name: "Course-Books",
          category: "Books",
          donation:"1",
          },
          {
            name: "Notebooks",
            category: "Books",
            donation:"2",
            },
            {
              name: "Female-Footwear",
              category: "Footwear",
              donation:"2",
            },
            {
              name: "Male-Footwear",
              category: "Footwear",
              donation:"1",
            },
            {
              name: "t-shirt",
              category: "Clothes",
              donation:"1",
            },
            {
              name: "Scarf",
              category: "Clothes",
              donation:"0",
            },
            {
              name: "Jeans",
              category: "Clothes",
              donation:"0",
            },
            {
              name: "Winter-Cap",
              category: "Clothes",
              donation:"2",
            },
            
            {
              name: "Jacket",
              category: "Clothes",
              donation:"1",
            },
            {
              name: "Watch",
              category: "Accessories",
              donation:"1",
            },
            {
              name: "Bag",
              category: "Accessories",
              donation:"0",
            },
            {
              name: "Packaged-Food",
              category: "Food",
              donation:"3",
            },
            {
              name: "Leftover-Food",
              category: "Food",
              donation:"2",
            },


        ]}
        actions={[
          {
            icon: "edit",
            tootltip:"Save User",
            onClick: (event,rowData) => alert("You saved" + rowData.name),

          },
        ]}
        
      /></ThemeProvider> 
        </div>
      
    )
  }
  
export default DBItems;