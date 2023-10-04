import React, { useState } from 'react';
import "./index.css";

const AddAndClearMember = () => {
  const [members, setMembers] = useState([]);
  const [newMember, setNewMember] = useState('');

  const handleAddMember = () => {
    if (newMember.trim() !== '') {
      setMembers([...members, newMember]);
      setNewMember('');
    }
  };

  const handleClearMembers = () => {
    setMembers([]);
  };

  return (
    <div>
      <h1>Kelompok 27</h1>
      <ul>
        {members.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
      <input type="text" placeholder="Masukkan Nama Anggota..." value={newMember} onChange={(e) => setNewMember(e.target.value)}/>
      <button className='tambah' onClick={handleAddMember}>Tambah</button>
      <button className='hapus' onClick={handleClearMembers}>Hapus</button>
    </div>
  );
};

export default AddAndClearMember;
