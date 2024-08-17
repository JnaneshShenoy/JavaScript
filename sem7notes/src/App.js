import { storage } from "./firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const fetchFiles = async () => {
      const listRef = ref(storage, "notes/");
      const res = await listAll(listRef);
      const urls = await Promise.all(
        res.items.map((itemRef) => getDownloadURL(itemRef))
      );
      setFiles(urls);
    };

    fetchFiles();
  }, []);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    const storageRef = ref(storage, `notes/${file.name}`);
    await uploadBytes(storageRef, file);
    setUploading(false);
    setFiles((prev) => [...prev, getDownloadURL(storageRef)]);
    // setFiles((prev) => [...prev, await getDownloadURL(storageRef)]);
  };

  return (
    <div className="App">
      <header className="hero-section">
        <nav>
          <h1>Notes Sharing</h1>
        </nav>
        <div className="hero-content">
          <h2>Share Your Notes Seamlessly</h2>
          <input type="file" onChange={handleUpload} />
          {uploading && <p>Uploading...</p>}
        </div>
      </header>
      <main className="download-section">
        <h2>Available Notes</h2>
        <ul>
          {files.map((url, index) => (
            <li key={index}>
              <a href={url} download>
                Download Note {index + 1}
              </a>
            </li>
          ))}
        </ul>
      </main>
      <footer>
        <p>© 2024 Notes Sharing App</p>
      </footer>
    </div>
  );
}

export default App;
