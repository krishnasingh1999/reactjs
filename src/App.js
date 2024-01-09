import logo from './logo.svg';
import './App.css';
import Gallery from './gallery';
import { Profile } from './Profile.js';

export default function App() {
  return (
    <div>
    <Gallery />
    <h1>Profile image</h1>
    <Profile />
    </div>
  ); 
  }