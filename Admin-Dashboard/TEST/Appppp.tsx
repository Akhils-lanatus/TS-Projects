// import Basic_01 from "./Examples/01_Basix";
// import HeaderGroup_02 from "./Examples/02_HeaderGroup";
// import ColumnFilter_03 from "./Examples/03_ColumnFilter";
// import Masttt_04 from "./Examples/04_Mastt";
import "./index.css";

// import GenericTable from "./GenericTable"; // Adjust the import path as needed
import { Person, makeData } from "./Examples/makeData";
import { ColumnDef } from "@tanstack/react-table";
import GenericTable from "./Examples/04_Mastt";
import React from "react";

const personColumns: ColumnDef<Person, any>[] = [
  {
    accessorKey: "firstName",
    cell: (info) => info.getValue(),
    header: () => <span>First Name</span>,
  },
  {
    accessorFn: (row) => row.lastName,
    id: "lastName",
    cell: (info) => info.getValue(),
    header: () => <span>Last Name</span>,
  },
  {
    accessorKey: "age",
    header: () => "Age",
    meta: {
      filterVariant: "range",
    },
  },
  {
    accessorKey: "visits",
    header: () => <span>Visits</span>,
    meta: {
      filterVariant: "range",
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    meta: {
      filterVariant: "select",
    },
  },
  {
    accessorKey: "progress",
    header: "Profile Progress",
    meta: {
      filterVariant: "range",
    },
  },
];

// function PersonTable() {
//   return <GenericTable data={data} columns={personColumns} />;
// }

const App = () => {
  const [data, setData] = React.useState<Person[]>(() => makeData(5_000));
  return (
    <div>
      {/* <Basic_01 /> */}
      {/* <HeaderGroup_02 /> */}
      {/* <ColumnFilter_03 /> */}
      <GenericTable data={data} columns={personColumns} />
    </div>
  );
};

export default App;
