import React from "react";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import PdfDocument from "./components/PdfDocument";
import { isMobile } from "react-device-detect";
import "./App.css";
import data from "./utils/data.json";

const App = () => {
  return isMobile ? (
    <div style={{ textAlign: "center", padding: 20, paddingTop: 150 }}>
      <p>
        This document cannot be viewed on your browser. You can download the PDF
        instead.
      </p>
      <PDFDownloadLink
        document={<PdfDocument />}
        fileName={`${data.basics.name}.pdf`}
      >
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download now!"
        }
      </PDFDownloadLink>
    </div>
  ) : (
    <PDFViewer width="100%" height="100%">
      <PdfDocument />
    </PDFViewer>
  );
};

export default App;
